import { formatMoney, formatNumber, formatRunway } from '../utils/formatters.js';
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
    const scores = s.seven_dimension_scores || {};
    const scoreHtml = Object.keys(scores).length > 0
      ? Object.entries(scores).map(([key, val]) => {
          const pct = Math.round((Number(val) || 0) * 100);
          const label = key.replace(/_/g, ' ');
          return `
            <div style="display:flex;align-items:center;gap:6px;margin-bottom:3px">
              <span style="font-size:8px;color:#666;width:70px;text-transform:capitalize">${label}</span>
              <div style="flex:1;height:4px;background:rgba(255,255,255,0.06);border-radius:2px;overflow:hidden">
                <div style="height:100%;width:${pct}%;background:${color};border-radius:2px"></div>
              </div>
              <span style="font-size:9px;color:#888;width:28px;text-align:right">${pct}%</span>
            </div>
          `;
        }).join('')
      : '<div style="font-size:9px;color:#555">Not available yet</div>';

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
          <div class="stat-label">Valuation</div>
          <div class="stat-value" style="color:#F0B429">${formatMoney(s.valuation)}</div>
        </div>
        <div class="stat-cell">
          <div class="stat-label">Cash</div>
          <div class="stat-value">${formatMoney(s.cash)}</div>
        </div>
        <div class="stat-cell">
          <div class="stat-label">Revenue</div>
          <div class="stat-value" style="color:#22C55E">${formatMoney(s.revenue)}</div>
        </div>
        <div class="stat-cell">
          <div class="stat-label">Runway</div>
          <div class="stat-value" style="color:${(s.runway || 0) < 4 ? '#EF4444' : '#eee'}">${formatRunway(s.runway)}</div>
        </div>
        <div class="stat-cell">
          <div class="stat-label">Users</div>
          <div class="stat-value">${formatNumber(s.users)}</div>
        </div>
        <div class="stat-cell">
          <div class="stat-label">Product</div>
          <div class="stat-value" style="color:#3B82F6">${s.product_quality || 0}%</div>
        </div>
        <div class="stat-cell">
          <div class="stat-label">Morale</div>
          <div class="stat-value" style="color:#22C55E">${s.morale || 0}%</div>
        </div>
        <div class="stat-cell">
          <div class="stat-label">Brand</div>
          <div class="stat-value" style="color:#F0B429">${s.brand || 0}%</div>
        </div>
      </div>

      <div class="panel-title" style="margin-top:8px">FUNDING</div>
      <div style="font-size:10px;color:#aaa;margin-bottom:8px">
        Round: <strong>${s.funding_round || 'pre-seed'}</strong> &middot;
        Raised: <strong>${formatMoney(s.total_raised)}</strong> &middot;
        Dilution: <strong>${Math.round((s.dilution || 0) * 100)}%</strong>
      </div>

      <div class="panel-title">TEAM (${(s.team || []).length})</div>
      <div style="margin-bottom:10px">${team || '<div style="font-size:9px;color:#555">No team members</div>'}</div>

      <div class="panel-title">PERFORMANCE</div>
      <div style="margin-bottom:8px">${scoreHtml}</div>

      ${s.alive === false ? `
        <div style="background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.2);border-radius:8px;padding:10px;margin-top:8px">
          <div style="font-size:10px;font-weight:700;color:#EF4444">ELIMINATED</div>
          <div style="font-size:9px;color:#888;margin-top:4px">${s.death_reason || 'Startup failed'}</div>
        </div>
      ` : ''}
    `;
  }
}
