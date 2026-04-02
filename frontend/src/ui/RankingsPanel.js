import { formatMoney } from '../utils/formatters.js';
import { getAgentColor } from '../utils/colors.js';

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

  update(state) {
    const startups = state.gameData?.startups;
    if (!startups) return;

    const list = Object.entries(startups)
      .map(([id, s]) => ({ id, ...s }))
      .sort((a, b) => (b.valuation || 0) - (a.valuation || 0));

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

      return `
        <div class="rank-item ${dead ? 'dead' : ''} ${selected ? 'selected' : ''}"
             data-id="${s.id}">
          <div class="rank-pos">${posLabel}</div>
          <div class="rank-avatar" style="background:${color}">${initial}</div>
          <div class="rank-info">
            <div class="rank-name">${s.startup_name || 'Unknown'}</div>
            <div class="rank-meta">${s.agent_name || ''} &middot; ${s.sector || ''} ${dead ? '&middot; &#9760; DEAD' : ''}</div>
            <div class="mini-bars">
              <div class="mini-bar"><div class="mini-bar-fill" style="width:${pq}%;background:#4A9EFF"></div></div>
              <div class="mini-bar"><div class="mini-bar-fill" style="width:${mo}%;background:#34D058"></div></div>
              <div class="mini-bar"><div class="mini-bar-fill" style="width:${br}%;background:#FFB800"></div></div>
            </div>
          </div>
          <div class="rank-val" style="color:${dead ? '#444' : '#FFB800'}">${formatMoney(s.valuation)}</div>
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
