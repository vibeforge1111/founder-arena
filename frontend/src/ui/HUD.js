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
      <div class="logo">FOUNDER ARENA <span>THREE.JS</span></div>
      <div class="header-status" id="header-status">
        <span class="dot"></span>READY
      </div>
      <button class="header-btn" id="btn-quick-play" style="background:rgba(34,197,94,0.2);color:#22C55E;border:1px solid rgba(34,197,94,0.3)">PLAY vs BOTS</button>
      <button class="header-btn" id="btn-new-game">NEW GAME</button>
      <button class="header-btn" id="btn-watch" style="background:rgba(255,255,255,0.08);color:#999">WATCH</button>
    `;
    this.container.appendChild(this._header);

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

  update(state) {
    // Update header status
    const phase = state.gameData?.phase;
    const turn = state.gameData?.turn || 0;
    const maxTurns = state.gameData?.max_turns || 32;

    if (phase === 'playing') {
      this._statusEl.innerHTML = `<span class="dot" style="background:#22C55E"></span>LIVE &middot; Week ${turn}/${maxTurns}`;
    } else if (phase === 'lobby') {
      const count = Object.keys(state.gameData?.startups || {}).length;
      this._statusEl.innerHTML = `<span class="dot" style="background:#F0B429"></span>LOBBY &middot; ${count} agents`;
    } else if (phase === 'finished') {
      this._statusEl.innerHTML = `<span class="dot" style="background:#EF4444"></span>FINISHED`;
    } else if (state.gameId) {
      this._statusEl.innerHTML = `<span class="dot" style="background:#3B82F6"></span>CONNECTING...`;
    } else {
      this._statusEl.innerHTML = `<span class="dot"></span>READY`;
    }

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
