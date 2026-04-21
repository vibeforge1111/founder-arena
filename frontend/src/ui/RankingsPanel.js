import { formatMoney, formatScore } from '../utils/formatters.js';
import { getAgentColor } from '../utils/colors.js';
import { isCompetitiveMode, rankedStartups, startupScore } from '../utils/rankings.js';

export class RankingsPanel {
  constructor(container, store) {
    this.store = store;
    this.el = document.createElement('div');
    this.el.className = 'panel-left';
    this.el.innerHTML = '<div class="panel-title">RANKINGS</div><div class="rank-list"></div>';
    this._list = this.el.querySelector('.rank-list');
    container.appendChild(this.el);
    this._onSelect = null;
    this._startupOrderMap = new Map();
  }

  onSelect(callback) {
    this._onSelect = callback;
  }

  _formatDelta(delta) {
    const value = Number(delta || 0);
    if (Math.abs(value) < 0.05) return 'Flat';
    return `${value > 0 ? '+' : ''}${formatScore(value)}`;
  }

  _renderRiskTags(startup, rankingMeta) {
    const tags = startup.risk_tags || rankingMeta?.risk_tags || [];
    return tags.slice(0, 2).map((tag) => {
      const tone = tag?.tone || 'neutral';
      const label = tag?.label || tag;
      return `<span class="signal-pill signal-pill-${tone}">${label}</span>`;
    }).join('');
  }

  update(state) {
    const gameData = state.gameData;
    const startups = gameData?.startups;
    if (!startups) return;

    const competitive = isCompetitiveMode(gameData);
    const list = rankedStartups(gameData);
    const rankingMeta = new Map((gameData?.rankings || []).map((item) => [item.startup_id, item]));

    // Track stable color assignment
    for (const s of list) {
      if (!this._startupOrderMap.has(s.id)) {
        this._startupOrderMap.set(s.id, this._startupOrderMap.size);
      }
    }

    const selectedId = state.selectedStartupId;

    this._list.innerHTML = list.map((s, i) => {
      const colorIdx = this._startupOrderMap.get(s.id) || 0;
      const color = getAgentColor(colorIdx);
      const dead = s.alive === false;
      const selected = s.id === selectedId;

      const pq = s.product_quality || 0;
      const mo = s.morale || 0;
      const br = s.brand || 0;
      const initial = (s.startup_name || '?')[0].toUpperCase();
      const posLabel = i === 0 ? '&#128081;' : i + 1;
      const meta = rankingMeta.get(s.id);
      const primaryMetric = competitive ? `${formatScore(startupScore(s))} score` : formatMoney(s.valuation);
      const secondaryMetric = competitive ? `${formatMoney(s.valuation)} val` : '';
      const metricDelta = competitive ? (s.score_delta ?? meta?.score_delta ?? 0) : 0;
      const pressureLevel = s.pressure_level || meta?.pressure_level || 'neutral';
      const riskTags = this._renderRiskTags(s, meta);

      return `
        <div class="rank-item rank-item-${pressureLevel} ${dead ? 'dead' : ''} ${selected ? 'selected' : ''}"
             data-id="${s.id}">
          <div class="rank-pos">${posLabel}</div>
          <div class="rank-avatar" style="background:${color}">${initial}</div>
          <div class="rank-info">
            <div class="rank-topline">
              <div class="rank-name">${s.startup_name || 'Unknown'}</div>
              ${competitive ? `<div class="metric-delta ${metricDelta > 0 ? 'up' : metricDelta < 0 ? 'down' : ''}">${this._formatDelta(metricDelta)}</div>` : ''}
            </div>
            <div class="rank-meta">${s.agent_name || ''} &middot; ${s.sector || ''} ${dead ? '&middot; &#9760; DEAD' : ''}${secondaryMetric ? ` &middot; ${secondaryMetric}` : ''}</div>
            ${riskTags ? `<div class="signal-pills" style="margin-top:5px">${riskTags}</div>` : ''}
            <div class="mini-bars">
              <div class="mini-bar"><div class="mini-bar-fill" style="width:${pq}%;background:#4A9EFF"></div></div>
              <div class="mini-bar"><div class="mini-bar-fill" style="width:${mo}%;background:#34D058"></div></div>
              <div class="mini-bar"><div class="mini-bar-fill" style="width:${br}%;background:#FFB800"></div></div>
            </div>
          </div>
          <div class="rank-val" style="color:${dead ? '#444' : '#FFB800'}">${primaryMetric}</div>
        </div>
      `;
    }).join('');

    // Click handlers
    this._list.querySelectorAll('.rank-item').forEach(el => {
      el.addEventListener('click', () => {
        const id = el.dataset.id;
        if (this._onSelect) this._onSelect(id);
      });
    });
  }
}
