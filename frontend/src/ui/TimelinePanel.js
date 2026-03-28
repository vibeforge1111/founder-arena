export class TimelinePanel {
  constructor(container) {
    this.el = document.createElement('div');
    this.el.className = 'panel-bottom';
    this.el.innerHTML = '<div class="panel-title">TIMELINE</div><div class="timeline-list"></div>';
    this._list = this.el.querySelector('.timeline-list');
    container.appendChild(this.el);
    this._lastEntryCount = 0;
  }

  update(state) {
    const gameData = state.gameData;
    if (!gameData) return;

    const entries = [];
    const turn = gameData.turn || 0;
    const actionLogs = gameData.action_logs || {};
    const arcFeed = gameData.arc_feed || [];
    const decisionSummaries = gameData.decision_summaries || {};

    // Collect action log entries for each turn (latest 8 turns)
    const startTurn = Math.max(1, turn - 8);
    for (let t = turn; t >= startTurn; t--) {
      const turnEntries = [];

      // Arcs for this turn
      for (const arc of arcFeed) {
        if (arc.turn === t || (!arc.turn && t === turn)) {
          turnEntries.push({
            type: 'arc',
            text: `${arc.startup_name || 'Unknown'}: ${arc.headline || arc.title || 'Event'}`,
            severity: arc.severity || 0,
          });
        }
      }

      // Actions for this turn
      for (const [sid, logs] of Object.entries(actionLogs)) {
        const startupName = gameData.startups?.[sid]?.startup_name || sid.slice(0, 6);
        for (const log of (Array.isArray(logs) ? logs : [])) {
          if (log.turn === t) {
            const success = log.success !== false ? '+' : '-';
            turnEntries.push({
              type: 'action',
              text: `${startupName} ${success} ${log.action_type || log.type || '?'}`,
            });
          }
        }
      }

      // Decision summaries
      for (const [sid, summary] of Object.entries(decisionSummaries)) {
        if (summary && summary.turn_index === t) {
          const startupName = gameData.startups?.[sid]?.startup_name || sid.slice(0, 6);
          turnEntries.push({
            type: 'decision',
            text: `${startupName}: ${summary.intent || ''}`,
          });
        }
      }

      if (turnEntries.length > 0) {
        entries.push({ turn: t, items: turnEntries });
      }
    }

    // If no detailed logs, show phase info
    if (entries.length === 0) {
      const phase = gameData.phase || 'unknown';
      if (phase === 'lobby') {
        this._list.innerHTML = '<div class="timeline-entry"><span class="action-text">Waiting for agents to join...</span></div>';
      } else if (phase === 'finished') {
        this._list.innerHTML = '<div class="timeline-entry"><span class="action-text">Game finished!</span></div>';
      } else {
        this._list.innerHTML = '<div class="timeline-entry"><span class="action-text">Game in progress - Week ' + turn + '</span></div>';
      }
      return;
    }

    this._list.innerHTML = entries.map(group => {
      const items = group.items.map(item => {
        let color = '#999';
        if (item.type === 'arc') color = item.severity > 0.5 ? '#EF4444' : '#FB923C';
        else if (item.type === 'decision') color = '#A78BFA';
        return `<div style="color:${color};margin-top:2px" class="action-text">${item.text}</div>`;
      }).join('');

      return `
        <div class="timeline-entry">
          <div class="turn-label">WEEK ${group.turn}</div>
          ${items}
        </div>
      `;
    }).join('');

    // Auto-scroll to top (latest)
    if (entries.length !== this._lastEntryCount) {
      this._list.scrollTop = 0;
      this._lastEntryCount = entries.length;
    }
  }
}
