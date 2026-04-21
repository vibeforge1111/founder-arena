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

  _isSharedReplay(state, gameData) {
    return Boolean(
      state.entryContext?.viaSharedLink &&
      state.entryContext?.requestedPhase === 'replay' &&
      gameData?.phase === 'finished' &&
      gameData?.summary
    );
  }

  _replaySpotlights(gameData, list) {
    const summary = gameData?.summary || {};
    const winnerId = gameData?.winner || list[0]?.id || null;
    const runnerUpId = list[1]?.id || null;
    const topTurningPoint = (summary.turning_points || [])[0] || null;
    const turningPointIds = new Set();
    if (topTurningPoint) {
      const leader = list.find((startup) => startup.startup_name === topTurningPoint.leader_startup);
      const challenger = list.find((startup) => startup.startup_name === topTurningPoint.challenger_startup);
      if (leader?.id) turningPointIds.add(leader.id);
      if (challenger?.id) turningPointIds.add(challenger.id);
    }
    return { winnerId, runnerUpId, topTurningPoint, turningPointIds };
  }

  _renderReplayGuide(state, gameData, list, replaySpotlights) {
    if (!this._isSharedReplay(state, gameData)) return '';
    const summary = gameData?.summary || {};
    const winner = list.find((startup) => startup.id === replaySpotlights.winnerId) || list[0] || null;
    const runnerUp = list.find((startup) => startup.id === replaySpotlights.runnerUpId) || null;
    const topTurningPoint = replaySpotlights.topTurningPoint;

    return `
      <div style="margin-bottom:12px;padding:12px;border-radius:12px;background:rgba(255,184,0,0.06);border:1px solid rgba(255,184,0,0.14)">
        <div style="font-size:8px;color:#FFB800;font-weight:800;letter-spacing:0.8px;text-transform:uppercase">Replay Guide</div>
        <div style="font-size:10px;color:var(--text);font-weight:800;line-height:1.45;margin-top:8px">${summary.winner_summary || 'Replay summary is loading.'}</div>
        <div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:10px">
          ${winner ? `<button class="btn-clean replay-jump" data-id="${winner.id}" style="flex:1 1 120px;border-color:rgba(255,184,0,0.24);color:#FFB800">Winner: ${winner.startup_name}</button>` : ''}
          ${runnerUp ? `<button class="btn-clean replay-jump" data-id="${runnerUp.id}" style="flex:1 1 120px;border-color:rgba(148,163,184,0.24);color:#CBD5E1">Runner-up: ${runnerUp.startup_name}</button>` : ''}
        </div>
        ${topTurningPoint ? `
          <div style="font-size:9px;color:var(--text-dim);line-height:1.5;margin-top:10px">${topTurningPoint.headline}</div>
          <div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:8px">
            ${list
              .filter((startup) => replaySpotlights.turningPointIds.has(startup.id))
              .map((startup) => `<button class="btn-clean replay-jump" data-id="${startup.id}" style="flex:1 1 120px;border-color:rgba(34,211,238,0.24);color:#22D3EE">Turning Point: ${startup.startup_name}</button>`)
              .join('')}
          </div>
        ` : ''}
      </div>
    `;
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
    const isSharedReplay = this._isSharedReplay(state, gameData);
    const replaySpotlights = this._replaySpotlights(gameData, list);

    this._list.innerHTML = `
      ${this._renderReplayGuide(state, gameData, list, replaySpotlights)}
      ${list.map((s, i) => {
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
      const replayBadges = [];
      if (isSharedReplay) {
        if (s.id === replaySpotlights.winnerId) replayBadges.push({ label: 'Winner', tone: 'positive' });
        if (s.id === replaySpotlights.runnerUpId) replayBadges.push({ label: 'Runner-up', tone: 'neutral' });
        if (replaySpotlights.turningPointIds.has(s.id)) replayBadges.push({ label: 'Turning Point', tone: 'warning' });
      }
      const replayBadgeHtml = replayBadges.map((badge) =>
        `<span class="signal-pill signal-pill-${badge.tone}">${badge.label}</span>`
      ).join('');

      return `
        <div class="rank-item rank-item-${pressureLevel} ${dead ? 'dead' : ''} ${selected ? 'selected' : ''}"
             style="${isSharedReplay && s.id === replaySpotlights.winnerId ? 'box-shadow:inset 0 0 0 1px rgba(255,184,0,0.18), 0 0 20px rgba(255,184,0,0.08);' : ''}"
             data-id="${s.id}">
          <div class="rank-pos">${posLabel}</div>
          <div class="rank-avatar" style="background:${color}">${initial}</div>
          <div class="rank-info">
            <div class="rank-topline">
              <div class="rank-name">${s.startup_name || 'Unknown'}</div>
              ${competitive ? `<div class="metric-delta ${metricDelta > 0 ? 'up' : metricDelta < 0 ? 'down' : ''}">${this._formatDelta(metricDelta)}</div>` : ''}
            </div>
            <div class="rank-meta">${s.agent_name || ''} &middot; ${s.sector || ''} ${dead ? '&middot; &#9760; DEAD' : ''}${secondaryMetric ? ` &middot; ${secondaryMetric}` : ''}</div>
            ${(riskTags || replayBadgeHtml) ? `<div class="signal-pills" style="margin-top:5px">${replayBadgeHtml}${riskTags}</div>` : ''}
            <div class="mini-bars">
              <div class="mini-bar"><div class="mini-bar-fill" style="width:${pq}%;background:#4A9EFF"></div></div>
              <div class="mini-bar"><div class="mini-bar-fill" style="width:${mo}%;background:#34D058"></div></div>
              <div class="mini-bar"><div class="mini-bar-fill" style="width:${br}%;background:#FFB800"></div></div>
            </div>
          </div>
          <div class="rank-val" style="color:${dead ? '#444' : '#FFB800'}">${primaryMetric}</div>
        </div>
      `;
    }).join('')}
    `;

    // Click handlers
    this._list.querySelectorAll('.rank-item').forEach(el => {
      el.addEventListener('click', () => {
        const id = el.dataset.id;
        if (this._onSelect) this._onSelect(id);
      });
    });
    this._list.querySelectorAll('.replay-jump').forEach((el) => {
      el.addEventListener('click', () => {
        const id = el.dataset.id;
        if (id && this._onSelect) this._onSelect(id);
      });
    });
  }
}
