import { RankingsPanel } from './RankingsPanel.js';
import { TimelinePanel } from './TimelinePanel.js';
import { AgentDetailPanel } from './AgentDetailPanel.js';
import { GameControls } from './GameControls.js';

export class HUD {
  constructor(container, store, sceneManager) {
    this.store = store;
    this.scene = sceneManager;
    this.container = container;
    this._postGameShown = false;

    // Header
    this._buildHeader();

    // Panels
    this.rankings = new RankingsPanel(container, store);
    this.timeline = new TimelinePanel(container);
    this.detail = new AgentDetailPanel(container);
    this.controls = new GameControls(container, store);

    // Wire rankings click -> store select + scene focus
    this.rankings.onSelect((id) => {
      store.selectStartup(id);
      if (sceneManager) sceneManager.focusOnPod(id);
    });

    // Wire scene pod click -> store select
    if (sceneManager) {
      sceneManager.onPodClick((id) => {
        store.selectStartup(id);
        sceneManager.focusOnPod(id);
      });
    }
  }

  _buildHeader() {
    this._header = document.createElement('div');
    this._header.className = 'header';
    this._header.innerHTML = `
      <div class="logo">
        <div class="logo-icon">FA</div>
        <div class="logo-text">FOUNDER ARENA<span>STARTUP SIMULATOR</span></div>
      </div>
      <div class="header-status" id="header-status">
        <span class="dot"></span>READY
      </div>
      <button class="btn-game btn-game-green" id="btn-quick-play">&#9654; PRACTICE LOBBY</button>
      <button class="btn-clean" id="btn-new-game">+ NEW GAME</button>
      <button class="btn-ghost" id="btn-watch">&#128065; WATCH</button>
    `;
    this.container.appendChild(this._header);

    this._matchStrip = document.createElement('div');
    this._matchStrip.className = 'match-strip hidden';
    this.container.appendChild(this._matchStrip);

    this._statusEl = this._header.querySelector('#header-status');

    this._header.querySelector('#btn-quick-play').addEventListener('click', () => {
      this.controls.quickPlayVsBots();
    });
    this._header.querySelector('#btn-new-game').addEventListener('click', () => {
      this.controls.showCreateGame();
    });
    this._header.querySelector('#btn-watch').addEventListener('click', () => {
      this.controls.showJoinExisting();
    });
  }

  _formatDelta(value) {
    const num = Number(value || 0);
    if (Math.abs(num) < 0.05) return 'Flat';
    return `${num > 0 ? '+' : ''}${num.toFixed(1)}`;
  }

  _pressurePills(pressure) {
    const tags = pressure?.risk_tags || [];
    return tags.slice(0, 2).map((tag) =>
      `<span class="signal-pill signal-pill-${tag.tone || 'neutral'}">${tag.label || tag}</span>`
    ).join('');
  }

  _runnerAlertTone(alert) {
    return {
      error: 'danger',
      warn: 'warning',
      info: 'neutral',
    }[alert?.severity] || 'neutral';
  }

  _updateMatchStrip(state) {
    const summary = state.gameData?.live_summary;
    const phase = state.gameData?.phase;
    if (!summary || (phase !== 'playing' && phase !== 'finished')) {
      this._matchStrip.classList.add('hidden');
      this._matchStrip.innerHTML = '';
      return;
    }

    const leaderTags = this._pressurePills(summary.leader_pressure);
    const challengerTags = this._pressurePills(summary.challenger_pressure);
    const runnerAlert = summary.runner_alert || null;
    const runnerTone = this._runnerAlertTone(runnerAlert);
    this._matchStrip.classList.remove('hidden');
    this._matchStrip.innerHTML = `
      <div class="match-strip-card emphasis">
        <div class="match-strip-label">Leader</div>
        <div class="match-strip-score">${summary.leader_startup_name}</div>
        <div class="match-strip-sub">${summary.leader_score?.toFixed(1)} score &middot; ${this._formatDelta(summary.leader_delta)} this turn</div>
        ${leaderTags ? `<div class="signal-pills">${leaderTags}</div>` : ''}
      </div>
      <div class="match-strip-card">
        <div class="match-strip-label">Why Ahead</div>
        <div class="match-strip-body">${summary.why_ahead || 'Match edge not available yet.'}</div>
        <div class="match-strip-sub">Margin: ${summary.margin != null ? `${summary.margin.toFixed(1)} score` : 'No challenger yet'}</div>
      </div>
      <div class="match-strip-card">
        <div class="match-strip-label">What Could Flip</div>
        <div class="match-strip-body">${summary.flip_watch || 'No immediate flip signal recorded.'}</div>
        ${summary.challenger_startup_name ? `<div class="match-strip-sub">${summary.challenger_startup_name} &middot; ${summary.challenger_score?.toFixed(1)} score &middot; ${this._formatDelta(summary.challenger_delta)} this turn</div>` : ''}
        ${challengerTags ? `<div class="signal-pills">${challengerTags}</div>` : ''}
      </div>
      ${runnerAlert ? `
        <div class="match-strip-card">
          <div class="match-strip-label">Runner Alert</div>
          <div class="match-strip-body" style="color:${runnerTone === 'danger' ? '#FCA5A5' : runnerTone === 'warning' ? '#FCD34D' : 'var(--text)'}">${runnerAlert.headline || `${runnerAlert.startup_name} has a runner issue.`}</div>
          <div class="match-strip-sub">${runnerAlert.startup_name} &middot; ${runnerAlert.label}</div>
          <div class="signal-pills"><span class="signal-pill signal-pill-${runnerTone}">${runnerAlert.label}</span></div>
        </div>
      ` : ''}
    `;
  }

  update(state) {
    // Update header status
    const phase = state.gameData?.phase;
    const turn = state.gameData?.turn || 0;
    const maxTurns = state.gameData?.max_turns || 32;

    if (phase === 'playing') {
      this._statusEl.innerHTML = `<span class="dot" style="background:#34D058;box-shadow:0 0 8px rgba(52,208,88,0.6)"></span>LIVE &middot; Week ${turn}/${maxTurns}`;
    } else if (phase === 'lobby') {
      const count = Object.keys(state.gameData?.startups || {}).length;
      this._statusEl.innerHTML = `<span class="dot" style="background:#FFB800;box-shadow:0 0 8px rgba(255,184,0,0.6)"></span>LOBBY &middot; ${count} agents`;
    } else if (phase === 'finished') {
      this._statusEl.innerHTML = `<span class="dot" style="background:#EF4444;box-shadow:0 0 8px rgba(239,68,68,0.6)"></span>FINISHED`;
    } else if (state.gameId) {
      this._statusEl.innerHTML = `<span class="dot" style="background:#4A9EFF;box-shadow:0 0 8px rgba(74,158,255,0.6)"></span>CONNECTING...`;
    } else {
      this._statusEl.innerHTML = `<span class="dot"></span>READY`;
    }

    this._updateMatchStrip(state);

    // Update panels
    this.rankings.update(state);
    this.timeline.update(state);
    this.detail.update(state);

    // Show post-game modal once
    if (phase === 'finished' && !this._postGameShown) {
      this._postGameShown = true;
      setTimeout(() => this.controls.showPostGame(), 1500);
    }
    if (phase !== 'finished') {
      this._postGameShown = false;
    }
  }
}
