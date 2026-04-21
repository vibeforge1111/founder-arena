import { formatMoney, formatNumber, formatRunway, formatScore } from '../utils/formatters.js';
import { getAgentColor } from '../utils/colors.js';

export class AgentDetailPanel {
  constructor(container) {
    this.el = document.createElement('div');
    this.el.className = 'panel-right';
    container.appendChild(this.el);
    this._startupOrderMap = new Map();
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
    const latestDecision = s.latest_decision || state.gameData?.decision_summaries?.[sid] || null;
    const currentArc = s.current_arc || null;

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
    const totalScore = Number(scorecard.total_score) || Number(s.score) || 0;
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
          <div class="stat-label">Score</div>
          <div class="stat-value" style="color:#A78BFA">${formatScore(totalScore)}</div>
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
