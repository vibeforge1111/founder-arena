import { formatMoney, formatNumber, formatRunway, formatScore } from '../utils/formatters.js';
import { getAgentColor } from '../utils/colors.js';
import { rankedStartups, startupScore } from '../utils/rankings.js';

export class AgentDetailPanel {
  constructor(container) {
    this.el = document.createElement('div');
    this.el.className = 'panel-right';
    container.appendChild(this.el);
    this._startupOrderMap = new Map();
  }

  _renderRiskPills(tags = []) {
    return tags.slice(0, 3).map((tag) => {
      const tone = tag?.tone || 'neutral';
      const label = tag?.label || tag;
      return `<span class="signal-pill signal-pill-${tone}">${label}</span>`;
    }).join('');
  }

  _scoreEdgeSummary(subject, comparison) {
    const subjectDimensions = subject?.seven_dimension_scores?.dimensions || {};
    const comparisonDimensions = comparison?.seven_dimension_scores?.dimensions || {};
    const deltas = Object.keys(subjectDimensions).map((key) => {
      const subjectValue = Number(subjectDimensions[key] || 0);
      const comparisonValue = Number(comparisonDimensions[key] || 0);
      return {
        key,
        label: key.replace(/_/g, ' '),
        delta: Number((subjectValue - comparisonValue).toFixed(1)),
      };
    });

    const strengths = deltas
      .filter((item) => item.delta > 0)
      .sort((a, b) => b.delta - a.delta)
      .slice(0, 2);
    const gaps = deltas
      .filter((item) => item.delta < 0)
      .sort((a, b) => a.delta - b.delta)
      .slice(0, 2);
    return { strengths, gaps };
  }

  update(state) {
    const sid = state.selectedStartupId;
    const startups = state.gameData?.startups;
    if (!sid || !startups || !startups[sid]) {
      this.el.classList.remove('visible');
      return;
    }

    this.el.classList.add('visible');
    const s = startups[sid];
    const ranked = rankedStartups(state.gameData);
    const leader = ranked[0] || null;
    const leaderId = leader?.id || state.gameData?.live_summary?.leader_startup_id || null;
    const selectedRank = ranked.findIndex((startup) => startup.id === sid) + 1;
    const leaderStartup = leaderId ? ranked.find((startup) => startup.id === leaderId) || null : null;
    const comparisonTarget = leaderStartup && leaderStartup.id !== sid
      ? leaderStartup
      : (ranked.find((startup) => startup.id !== sid) || null);
    const latestDecision = s.latest_decision || state.gameData?.decision_summaries?.[sid] || null;
    const currentArc = s.current_arc || null;
    const runnerPresence = s.runner_presence || null;
    const runnerFailure = s.runner_failure || null;
    const pressureLevel = s.pressure_level || 'neutral';
    const riskPills = this._renderRiskPills(s.risk_tags || []);
    const scoreDelta = Number(s.score_delta || 0);
    const totalScore = Number(s.seven_dimension_scores?.total_score) || Number(s.score) || 0;
    const comparisonSummary = comparisonTarget ? this._scoreEdgeSummary(s, comparisonTarget) : { strengths: [], gaps: [] };
    const scoreGapToLeader = leaderStartup ? Number((startupScore(leaderStartup) - totalScore).toFixed(1)) : 0;
    const dangerHeadline = !s.alive
      ? 'Eliminated'
      : pressureLevel === 'danger'
        ? 'Critical pressure'
        : pressureLevel === 'warning'
          ? 'Watch closely'
          : pressureLevel === 'positive'
            ? 'Positive momentum'
            : 'Stable position';
    const dangerColor = !s.alive
      ? '#EF4444'
      : pressureLevel === 'danger'
        ? '#EF4444'
        : pressureLevel === 'warning'
          ? '#FB923C'
          : pressureLevel === 'positive'
            ? '#34D058'
            : '#22D3EE';
    const comparisonHeader = comparisonTarget ? `Against ${comparisonTarget.startup_name}` : 'Comparison';
    const comparisonGap = comparisonTarget
      ? Math.abs(Number((totalScore - startupScore(comparisonTarget)).toFixed(1)))
      : 0;
    const runnerTone = runnerFailure
      ? (runnerFailure.severity === 'error' ? '#EF4444' : runnerFailure.severity === 'warn' ? '#FB923C' : '#22D3EE')
      : (runnerPresence?.tone === 'positive' ? '#34D058' : runnerPresence?.tone === 'warning' ? '#FB923C' : runnerPresence?.tone === 'danger' ? '#EF4444' : '#22D3EE');
    const runnerHeadline = runnerFailure
      ? runnerFailure.label
      : runnerPresence?.label || 'No runner data';
    const runnerDetail = runnerFailure?.message
      || runnerPresence?.detail
      || 'No operator state recorded yet.';

    // Track color
    if (!this._startupOrderMap.has(sid)) {
      this._startupOrderMap.set(sid, this._startupOrderMap.size);
    }
    const color = getAgentColor(this._startupOrderMap.get(sid) || 0);

    // Team roster
    const team = (s.team || []).map(m => `
      <div class="team-member">
        <div style="width:6px;height:6px;border-radius:50%;background:${color};flex-shrink:0"></div>
        <span>${m.name || 'Unknown'}</span>
        <span class="team-role">${m.role || ''}</span>
        <span style="margin-left:auto;color:#666;font-size:9px">Skill ${m.skill || 0}</span>
      </div>
    `).join('');

    // Seven dimension scores
    const scorecard = s.seven_dimension_scores || {};
    const scoreDimensions = scorecard.dimensions || {};
    const scoreHtml = Object.keys(scoreDimensions).length > 0
      ? Object.entries(scoreDimensions).map(([key, val]) => {
          const pct = Math.round(Number(val) || 0);
          const label = key.replace(/_/g, ' ');
          const barColor = pct >= 70 ? '#34D058' : pct >= 40 ? '#FFB800' : '#EF4444';
          return `
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px;padding:3px 0">
              <span style="font-size:8px;color:var(--text-muted);width:70px;text-transform:capitalize;font-weight:600">${label}</span>
              <div style="flex:1;height:5px;background:rgba(255,255,255,0.06);border-radius:3px;overflow:hidden">
                <div style="height:100%;width:${pct}%;background:${barColor};border-radius:3px;box-shadow:0 0 6px ${barColor}44;transition:width 0.4s"></div>
              </div>
              <span style="font-size:9px;color:var(--text-dim);width:30px;text-align:right;font-weight:700">${pct}%</span>
            </div>
          `;
        }).join('')
      : '<div style="font-size:9px;color:var(--text-muted)">Not available yet</div>';

    // Strategy + motto
    const strategy = s.strategy || 'balanced';
    const motto = s.motto || '';

    this.el.innerHTML = `
      <div class="detail-header">
        <div class="detail-avatar" style="background:${color}">${(s.startup_name || '?')[0]}</div>
        <div>
          <div class="detail-name">${s.startup_name || 'Unknown'}</div>
          <div class="detail-sector">${s.agent_name || ''} &middot; ${s.sector || ''} &middot; ${strategy}</div>
          ${motto ? `<div style="font-size:9px;color:#555;font-style:italic;margin-top:2px">"${motto}"</div>` : ''}
        </div>
      </div>

      <div class="stat-grid">
        <div class="stat-cell">
          <div class="stat-label">Rank</div>
          <div class="stat-value" style="color:#F0B429">#${selectedRank || '-'}</div>
        </div>
        <div class="stat-cell">
          <div class="stat-label">Score</div>
          <div class="stat-value" style="color:#A78BFA">${formatScore(totalScore)}</div>
        </div>
        <div class="stat-cell">
          <div class="stat-label">Score Delta</div>
          <div class="stat-value" style="color:${scoreDelta > 0 ? '#34D058' : scoreDelta < 0 ? '#EF4444' : 'var(--text-dim)'}">${Math.abs(scoreDelta) < 0.05 ? 'Flat' : `${scoreDelta > 0 ? '+' : ''}${formatScore(scoreDelta)}`}</div>
        </div>
        <div class="stat-cell">
          <div class="stat-label">Valuation</div>
          <div class="stat-value" style="color:#FFB800">${formatMoney(s.valuation)}</div>
        </div>
        <div class="stat-cell">
          <div class="stat-label">Rank Basis</div>
          <div class="stat-value" style="color:#F0B429">${state.gameData?.rank_basis === 'score' ? 'Score' : 'Valuation'}</div>
        </div>
        <div class="stat-cell">
          <div class="stat-label">Cash</div>
          <div class="stat-value">${formatMoney(s.cash)}</div>
        </div>
        <div class="stat-cell">
          <div class="stat-label">Revenue</div>
          <div class="stat-value" style="color:#34D058">${formatMoney(s.revenue)}</div>
        </div>
        <div class="stat-cell">
          <div class="stat-label">Runway</div>
          <div class="stat-value" style="color:${(s.runway || 0) < 4 ? '#EF4444' : (s.runway || 0) < 7 ? '#FB923C' : '#34D058'}">${formatRunway(s.runway)}</div>
        </div>
        <div class="stat-cell">
          <div class="stat-label">Users</div>
          <div class="stat-value" style="color:#22D3EE">${formatNumber(s.users)}</div>
        </div>
        <div class="stat-cell">
          <div class="stat-label">Product</div>
          <div class="stat-value" style="color:#4A9EFF">${s.product_quality || 0}%</div>
        </div>
        <div class="stat-cell">
          <div class="stat-label">Morale</div>
          <div class="stat-value" style="color:#34D058">${s.morale || 0}%</div>
        </div>
        <div class="stat-cell">
          <div class="stat-label">Brand</div>
          <div class="stat-value" style="color:#FFB800">${s.brand || 0}%</div>
        </div>
      </div>

      <div class="panel-title" style="margin-top:8px">DANGER STATE</div>
      <div style="margin-bottom:12px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.05);border-radius:12px;padding:10px 12px">
        <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
          <div style="font-size:11px;font-weight:800;color:${dangerColor}">${dangerHeadline}</div>
          ${riskPills ? `<div class="signal-pills">${riskPills}</div>` : ''}
        </div>
        <div style="font-size:9px;color:var(--text-dim);line-height:1.5;margin-top:8px">${s.watch_text || currentArc?.headline || 'No immediate danger signal recorded.'}</div>
      </div>

      <div class="panel-title">RUNNER STATUS</div>
      <div style="margin-bottom:12px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.05);border-radius:12px;padding:10px 12px">
        <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
          <div style="font-size:11px;font-weight:800;color:${runnerTone}">${runnerHeadline}</div>
          ${runnerPresence?.heartbeat_age_seconds != null ? `<div style="font-size:8px;color:var(--text-muted);border:1px solid rgba(255,255,255,0.08);background:rgba(255,255,255,0.04);border-radius:999px;padding:3px 8px">Heartbeat ${runnerPresence.heartbeat_age_seconds}s ago</div>` : ''}
        </div>
        <div style="font-size:9px;color:var(--text-dim);line-height:1.5;margin-top:8px">${runnerDetail}</div>
        ${runnerFailure?.turn != null ? `<div style="font-size:8px;color:${runnerTone};margin-top:8px">Issue surfaced on Week ${runnerFailure.turn}</div>` : ''}
      </div>

      <div class="panel-title">${comparisonHeader}</div>
      <div style="margin-bottom:12px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.05);border-radius:12px;padding:10px 12px">
        ${comparisonTarget ? `
          <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
            <div style="font-size:11px;font-weight:800;color:var(--text)">${comparisonTarget.startup_name}</div>
            <div style="font-size:8px;color:#A78BFA;border:1px solid rgba(167,139,250,0.22);background:rgba(167,139,250,0.08);border-radius:999px;padding:3px 8px">${scoreGapToLeader > 0 && leaderStartup?.id !== sid ? `${formatScore(scoreGapToLeader)} behind leader` : `${formatScore(comparisonGap)} gap`}</div>
          </div>
          <div style="font-size:9px;color:var(--text-dim);line-height:1.5;margin-top:8px">
            ${comparisonTarget.id === leaderStartup?.id && comparisonTarget.id !== sid
              ? `${s.startup_name} needs ${formatScore(scoreGapToLeader)} score to catch the leader.`
              : `${s.startup_name} is being compared against ${comparisonTarget.startup_name}'s current score balance.`}
          </div>
          ${comparisonSummary.strengths.length > 0 ? `<div style="font-size:9px;color:#34D058;margin-top:8px">Ahead on: ${comparisonSummary.strengths.map((item) => `${item.label} (+${formatScore(item.delta)})`).join(' · ')}</div>` : ''}
          ${comparisonSummary.gaps.length > 0 ? `<div style="font-size:9px;color:#EF4444;margin-top:4px">Losing on: ${comparisonSummary.gaps.map((item) => `${item.label} (${formatScore(item.delta)})`).join(' · ')}</div>` : ''}
        ` : '<div style="font-size:9px;color:var(--text-muted)">No comparison target available yet.</div>'}
      </div>

      <div class="panel-title" style="margin-top:8px">CURRENT ARC</div>
      <div style="margin-bottom:12px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.05);border-radius:12px;padding:10px 12px">
        ${currentArc ? `
          <div style="display:flex;align-items:center;gap:8px">
            <div style="font-size:10px;font-weight:800;color:#FB923C;text-transform:uppercase;letter-spacing:0.8px">${currentArc.packet_kind_label || currentArc.theme || currentArc.arc_type || 'Arc'}</div>
            ${currentArc.severity != null ? `<div style="margin-left:auto;font-size:9px;color:${currentArc.severity >= 0.6 ? '#EF4444' : currentArc.severity >= 0.3 ? '#FB923C' : '#22D3EE'}">Severity ${Math.round(currentArc.severity * 100)}%</div>` : ''}
          </div>
          <div style="font-size:11px;font-weight:700;color:var(--text);margin-top:6px">${currentArc.title || 'Active pressure'}</div>
          <div style="font-size:9px;color:var(--text-dim);line-height:1.45;margin-top:4px">${currentArc.headline || 'No active headline.'}</div>
        ` : '<div style="font-size:9px;color:var(--text-muted)">No active pressure arc.</div>'}
      </div>

      <div class="panel-title">LATEST PLAN</div>
      <div style="margin-bottom:12px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.05);border-radius:12px;padding:10px 12px">
        ${latestDecision ? `
          <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:8px">
            <div style="font-size:8px;color:#A78BFA;border:1px solid rgba(167,139,250,0.22);background:rgba(167,139,250,0.1);border-radius:999px;padding:3px 8px;text-transform:uppercase;letter-spacing:0.7px">${latestDecision.confidence || 'mid'} confidence</div>
            ${latestDecision.watch_metric ? `<div style="font-size:8px;color:#22D3EE;border:1px solid rgba(34,211,238,0.2);background:rgba(34,211,238,0.1);border-radius:999px;padding:3px 8px;text-transform:uppercase;letter-spacing:0.7px">watch ${latestDecision.watch_metric}</div>` : ''}
          </div>
          <div style="font-size:11px;font-weight:700;color:var(--text)">${latestDecision.intent || 'No intent recorded.'}</div>
          ${latestDecision.primary_risk ? `<div style="font-size:9px;color:#FB923C;margin-top:5px">Risk: ${latestDecision.primary_risk}</div>` : ''}
          ${latestDecision.reasoning_summary ? `<div style="font-size:9px;color:var(--text-dim);line-height:1.45;margin-top:8px">${latestDecision.reasoning_summary}</div>` : ''}
          ${latestDecision.expected_outcome ? `<div style="font-size:9px;color:#34D058;margin-top:8px">Expected: ${latestDecision.expected_outcome}</div>` : ''}
        ` : '<div style="font-size:9px;color:var(--text-muted)">No decision summary recorded yet.</div>'}
      </div>

      <div class="panel-title" style="margin-top:8px">FUNDING</div>
      <div style="display:flex;gap:6px;margin-bottom:12px">
        <div style="flex:1;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.04);border-radius:10px;padding:8px 10px;text-align:center">
          <div style="font-size:8px;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.5px;font-weight:600">Round</div>
          <div style="font-size:11px;font-weight:800;margin-top:2px;color:#A78BFA;text-transform:capitalize">${s.funding_round || 'pre-seed'}</div>
        </div>
        <div style="flex:1;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.04);border-radius:10px;padding:8px 10px;text-align:center">
          <div style="font-size:8px;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.5px;font-weight:600">Raised</div>
          <div style="font-size:11px;font-weight:800;margin-top:2px;color:#FFB800">${formatMoney(s.total_raised)}</div>
        </div>
        <div style="flex:1;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.04);border-radius:10px;padding:8px 10px;text-align:center">
          <div style="font-size:8px;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.5px;font-weight:600">Dilution</div>
          <div style="font-size:11px;font-weight:800;margin-top:2px;color:${(s.dilution || 0) > 0.4 ? '#EF4444' : 'var(--text)'}">${Math.round((s.dilution || 0) * 100)}%</div>
        </div>
      </div>

      <div class="panel-title">TEAM (${(s.team || []).length})</div>
      <div style="margin-bottom:12px">${team || '<div style="font-size:9px;color:var(--text-muted)">No team members</div>'}</div>

      <div class="panel-title">PERFORMANCE</div>
      <div style="font-size:10px;font-weight:800;color:#A78BFA;margin-bottom:8px">Total Score ${formatScore(totalScore)}</div>
      <div style="margin-bottom:8px">${scoreHtml}</div>

      ${s.alive === false ? `
        <div style="background:rgba(239,68,68,0.08);border:1px solid rgba(239,68,68,0.15);border-radius:12px;padding:12px;margin-top:10px">
          <div style="font-size:11px;font-weight:800;color:#EF4444;display:flex;align-items:center;gap:6px">&#9760; ELIMINATED</div>
          <div style="font-size:9px;color:var(--text-muted);margin-top:4px">${s.death_reason || 'Startup failed'}</div>
        </div>
      ` : ''}
    `;
  }
}
