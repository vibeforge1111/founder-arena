import { formatMoney } from '../utils/formatters.js';
import { SECTOR_COLORS } from '../utils/colors.js';

const ACTION_ICONS = {
  build_feature: { icon: '\u{1F527}', color: '#3B82F6', label: 'BUILD' },
  acquire_users: { icon: '\u{1F465}', color: '#22C55E', label: 'GROWTH' },
  fundraise: { icon: '\u{1F4B0}', color: '#F0B429', label: 'FUND' },
  hire: { icon: '\u{1F9D1}', color: '#A78BFA', label: 'HIRE' },
  launch_pr: { icon: '\u{1F4E3}', color: '#FB923C', label: 'PR' },
  pivot: { icon: '\u{1F504}', color: '#EF4444', label: 'PIVOT' },
  research: { icon: '\u{1F52C}', color: '#22D3EE', label: 'R&D' },
  optimize: { icon: '\u26A1', color: '#FACC15', label: 'OPT' },
  expand: { icon: '\u{1F30D}', color: '#4ADE80', label: 'EXPAND' },
  defend: { icon: '\u{1F6E1}\uFE0F', color: '#94A3B8', label: 'DEFEND' },
  sabotage: { icon: '\u{1F4A3}', color: '#EF4444', label: 'ATTACK' },
};

const MASCOT_TIPS = [
  "Build smart, not fast!",
  "Watch your burn rate...",
  "Hot sectors = big wins!",
  "Hire before you scale!",
  "Morale wins games!",
  "Pivot early or die late.",
  "Brand is everything.",
  "Ship it! \u{1F680}",
  "The market rewards patience.",
  "Focus beats chaos.",
];

export class TimelinePanel {
  constructor(container) {
    // Create the wrapper that holds mascot + dashboard
    this._wrapper = document.createElement('div');
    this._wrapper.className = 'bottom-dashboard-wrapper';
    container.appendChild(this._wrapper);

    // Mascot floating above
    this._mascotEl = document.createElement('div');
    this._mascotEl.className = 'mascot-container';
    this._mascotEl.innerHTML = '<img src="/mascot.png" alt="Arena Mascot" />';
    this._wrapper.appendChild(this._mascotEl);

    // Speech bubble
    this._speechEl = document.createElement('div');
    this._speechEl.className = 'mascot-speech';
    this._speechEl.textContent = MASCOT_TIPS[0];
    this._wrapper.appendChild(this._speechEl);

    // The actual bottom panel (reuse existing class for backdrop styling)
    this.el = document.createElement('div');
    this.el.className = 'panel-bottom';
    this.el.style.position = 'relative';
    this.el.style.left = '0';
    this.el.style.right = '0';
    this.el.style.bottom = '0';
    this._wrapper.appendChild(this.el);

    this._lastTurn = -1;
    this._tipIndex = 0;

    // Rotate mascot tips
    this._tipInterval = setInterval(() => {
      this._tipIndex = (this._tipIndex + 1) % MASCOT_TIPS.length;
      this._speechEl.textContent = MASCOT_TIPS[this._tipIndex];
    }, 8000);
  }

  update(state) {
    const gd = state.gameData;
    if (!gd) return;

    const turn = gd.turn || 0;
    const phase = gd.phase || 'unknown';
    const startups = gd.startups || {};
    const startupCount = Object.keys(startups).length;
    const aliveCount = Object.values(startups).filter(s => s.alive !== false).length;

    // Only rebuild when turn changes
    if (turn === this._lastTurn && phase !== 'lobby') return;
    this._lastTurn = turn;

    // Gather data
    const hotSectors = gd.hot_sectors || [];
    const arcFeed = (gd.arc_feed || []).slice(-6).reverse();
    const actionLogs = gd.action_logs || {};
    const recentActions = this._getRecentActions(actionLogs, startups, turn);

    // Compute stats
    const startupList = Object.values(startups);
    const sorted = Object.entries(startups)
      .map(([id, s]) => ({ id, ...s }))
      .sort((a, b) => (b.valuation || 0) - (a.valuation || 0));
    const leader = sorted[0];
    const totalFunding = startupList.reduce((sum, s) => sum + (s.total_raised || 0), 0);
    const avgMorale = startupList.length > 0
      ? Math.round(startupList.reduce((sum, s) => sum + (s.morale || 0), 0) / startupList.length)
      : 0;
    const deaths = startupList.filter(s => s.alive === false).length;
    const maxTurns = gd.max_turns || 32;
    const pct = Math.round((turn / maxTurns) * 100);

    const phaseColor = phase === 'playing' ? '#34D058' : phase === 'lobby' ? '#FFB800' : '#EF4444';
    const phaseBadge = phase === 'playing' ? 'LIVE' : phase === 'lobby' ? 'LOBBY' : 'ENDED';

    this.el.innerHTML = `
      <div class="bottom-dash-cards">
        ${this._renderRoundCard(turn, maxTurns, pct, phase, phaseColor, phaseBadge, aliveCount, startupCount)}
        ${this._renderLeaderCard(leader)}
        ${this._renderMarketCard(totalFunding, avgMorale, deaths, hotSectors)}
        ${this._renderFeedCard(recentActions, arcFeed)}
      </div>
    `;
  }

  _renderRoundCard(turn, maxTurns, pct, phase, phaseColor, phaseBadge, alive, total) {
    const phaseLabel = turn <= 10 ? 'EARLY' : turn <= 25 ? 'GROWTH' : turn <= 40 ? 'SCALE' : 'ENDGAME';
    return `
      <div class="bottom-dash-card card-green" style="flex:0 0 170px">
        <div class="bottom-dash-card-title">
          <div class="card-icon" style="background:${phaseColor}33;color:${phaseColor}">W</div>
          ROUND
          <span class="dash-badge" style="margin-left:auto;background:${phaseColor}22;color:${phaseColor};border:1px solid ${phaseColor}33;${phase === 'playing' ? 'animation:badgePulse 2s ease-in-out infinite' : ''}">${phaseBadge}</span>
        </div>
        <div style="display:flex;align-items:center;gap:14px">
          <div style="position:relative;width:56px;height:56px;flex-shrink:0">
            <svg width="56" height="56" viewBox="0 0 56 56" style="transform:rotate(-90deg)">
              <circle cx="28" cy="28" r="23" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="4"/>
              <circle cx="28" cy="28" r="23" fill="none" stroke="${phaseColor}" stroke-width="4"
                stroke-dasharray="${2 * Math.PI * 23}" stroke-dashoffset="${2 * Math.PI * 23 * (1 - pct / 100)}"
                stroke-linecap="round" style="filter:drop-shadow(0 0 4px ${phaseColor}66);transition:stroke-dashoffset 0.6s ease"/>
            </svg>
            <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;flex-direction:column">
              <div style="font-size:18px;font-weight:900;color:var(--text);line-height:1">${turn}</div>
              <div style="font-size:7px;color:var(--text-muted);letter-spacing:0.5px">/${maxTurns}</div>
            </div>
          </div>
          <div>
            <div style="font-size:8px;color:var(--text-muted);letter-spacing:1px;font-weight:600">${phaseLabel}</div>
            <div style="font-size:12px;font-weight:700;color:var(--text);margin-top:2px">${alive}<span style="color:var(--text-muted);font-weight:500">/${total}</span></div>
            <div style="font-size:8px;color:var(--text-muted)">alive</div>
          </div>
        </div>
      </div>
    `;
  }

  _renderLeaderCard(leader) {
    if (!leader) {
      return `
        <div class="bottom-dash-card card-gold" style="flex:0 0 180px">
          <div class="bottom-dash-card-title">
            <div class="card-icon" style="background:rgba(255,184,0,0.2);color:#FFB800">\u{1F451}</div>
            LEADER
          </div>
          <div style="font-size:11px;color:var(--text-muted);margin-top:16px">Waiting for game...</div>
        </div>
      `;
    }
    return `
      <div class="bottom-dash-card card-gold" style="flex:0 0 180px">
        <div class="bottom-dash-card-title">
          <div class="card-icon" style="background:rgba(255,184,0,0.2);color:#FFB800">\u{1F451}</div>
          LEADER
        </div>
        <div class="bottom-dash-card-value" style="color:#FFB800;text-shadow:0 0 16px rgba(255,184,0,0.25)">${formatMoney(leader.valuation)}</div>
        <div style="font-size:12px;font-weight:800;color:var(--text);margin-top:4px">${leader.startup_name || '?'}</div>
        <div class="bottom-dash-card-sub">${leader.agent_name || ''} \u00B7 ${leader.sector || ''}</div>
        <div class="bottom-dash-card-mini">
          <div class="bottom-dash-mini-stat">
            <span class="mini-label">Product</span>
            <span class="mini-val" style="color:#4A9EFF">${leader.product_quality || 0}%</span>
          </div>
          <div class="bottom-dash-mini-stat">
            <span class="mini-label">Morale</span>
            <span class="mini-val" style="color:#34D058">${leader.morale || 0}%</span>
          </div>
          <div class="bottom-dash-mini-stat">
            <span class="mini-label">Brand</span>
            <span class="mini-val" style="color:#FFB800">${leader.brand || 0}%</span>
          </div>
        </div>
      </div>
    `;
  }

  _renderMarketCard(totalFunding, avgMorale, deaths, hotSectors) {
    const sectorPills = hotSectors.slice(0, 3).map(s => {
      const color = SECTOR_COLORS[s] || '#888';
      return `<div class="tag-pill" style="padding:3px 8px;font-size:8px"><div class="tag-dot" style="background:${color};box-shadow:0 0 4px ${color}"></div>${s}</div>`;
    }).join('');

    return `
      <div class="bottom-dash-card card-blue" style="flex:0 0 180px">
        <div class="bottom-dash-card-title">
          <div class="card-icon" style="background:rgba(74,158,255,0.2);color:#4A9EFF">M</div>
          MARKET
        </div>
        <div class="bottom-dash-card-value" style="color:#4A9EFF;text-shadow:0 0 16px rgba(74,158,255,0.2)">${formatMoney(totalFunding)}</div>
        <div class="bottom-dash-card-sub">Total Raised</div>
        <div class="bottom-dash-card-mini">
          <div class="bottom-dash-mini-stat">
            <span class="mini-label">Morale</span>
            <span class="mini-val" style="color:${avgMorale > 60 ? '#34D058' : avgMorale > 40 ? '#FB923C' : '#EF4444'}">${avgMorale}%</span>
          </div>
          ${deaths > 0 ? `
            <div class="bottom-dash-mini-stat">
              <span class="mini-label">Dead</span>
              <span class="mini-val" style="color:#EF4444">${deaths}</span>
            </div>
          ` : ''}
        </div>
        ${hotSectors.length > 0 ? `<div style="display:flex;flex-wrap:wrap;gap:3px;margin-top:8px">${sectorPills}</div>` : ''}
      </div>
    `;
  }

  _renderFeedCard(recentActions, arcFeed) {
    const items = recentActions.slice(0, 5).map(a => {
      const info = ACTION_ICONS[a.type] || { icon: '\u25B8', color: '#888', label: a.type?.toUpperCase() || '?' };
      const ok = a.success !== false;
      return `
        <div style="display:flex;align-items:center;gap:6px;padding:4px 0;border-bottom:1px solid rgba(255,255,255,0.03)">
          <div style="width:20px;height:20px;border-radius:5px;background:${info.color}22;color:${info.color};display:flex;align-items:center;justify-content:center;font-size:10px;flex-shrink:0">${info.icon}</div>
          <div style="flex:1;min-width:0">
            <div style="font-size:9px;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${a.name}</div>
            <div style="font-size:7px;color:var(--text-muted)">W${a.turn} \u00B7 ${info.label}</div>
          </div>
          <div style="font-size:8px;font-weight:700;color:${ok ? '#34D058' : '#EF4444'}">${ok ? '\u2713' : '\u2717'}</div>
        </div>
      `;
    }).join('');

    const eventItems = arcFeed.slice(0, 2).map(arc => {
      const sev = (arc.severity || 0) > 0.6 ? '#EF4444' : (arc.severity || 0) > 0.3 ? '#FB923C' : '#22D3EE';
      return `
        <div style="padding:4px 0;border-bottom:1px solid rgba(255,255,255,0.03)">
          <div style="font-size:9px;font-weight:700;color:${sev};white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${arc.headline || arc.title || 'Event'}</div>
          <div style="font-size:7px;color:var(--text-muted)">W${arc.turn || '?'}</div>
        </div>
      `;
    }).join('');

    return `
      <div class="bottom-dash-card card-purple" style="flex:1">
        <div class="bottom-dash-card-title">
          <div class="card-icon" style="background:rgba(167,139,250,0.2);color:#A78BFA">\u26A1</div>
          LIVE FEED
          ${recentActions.length > 0 ? `<span class="dash-badge" style="margin-left:auto;background:rgba(52,208,88,0.12);color:#34D058;border:1px solid rgba(52,208,88,0.15)">${recentActions.length}</span>` : ''}
        </div>
        <div style="display:flex;gap:10px;height:calc(100% - 28px);overflow:hidden">
          <div style="flex:1;overflow-y:auto">
            ${items || '<div style="font-size:9px;color:var(--text-muted);padding:4px 0">No actions yet...</div>'}
          </div>
          ${eventItems ? `
            <div style="flex:0 0 120px;overflow-y:auto;border-left:1px solid rgba(255,255,255,0.04);padding-left:8px">
              <div style="font-size:7px;color:var(--text-muted);letter-spacing:0.8px;font-weight:600;margin-bottom:4px">EVENTS</div>
              ${eventItems}
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }

  _getRecentActions(actionLogs, startups, currentTurn) {
    const actions = [];
    const startTurn = Math.max(1, currentTurn - 3);

    for (const [sid, logs] of Object.entries(actionLogs)) {
      const name = startups[sid]?.startup_name || sid.slice(0, 6);
      for (const log of (Array.isArray(logs) ? logs : [])) {
        if (log.turn >= startTurn && log.turn <= currentTurn) {
          actions.push({
            turn: log.turn,
            name,
            type: log.action_type || log.type || 'unknown',
            success: log.success,
            detail: log.detail || log.outcome || '',
          });
        }
      }
    }

    // Sort newest first
    actions.sort((a, b) => b.turn - a.turn);
    return actions;
  }
}
