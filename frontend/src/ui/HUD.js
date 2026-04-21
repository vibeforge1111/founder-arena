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

    this._spectatorEntry = document.createElement('div');
    this._spectatorEntry.className = 'spectator-entry hidden';
    this.container.appendChild(this._spectatorEntry);

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

  _copyButtonFeedback(button, label, copiedLabel) {
    if (!button) return;
    button.textContent = copiedLabel;
    clearTimeout(button._copyTimer);
    button._copyTimer = setTimeout(() => {
      button.textContent = label;
    }, 1500);
  }

  _updateSpectatorEntry(state) {
    const entry = state.entryContext || {};
    const gameData = state.gameData;
    if (!entry.viaSharedLink) {
      this._spectatorEntry.classList.add('hidden');
      this._matchStrip.classList.remove('match-strip-with-entry');
      this._matchStrip.classList.remove('match-strip-with-replay-entry');
      this._spectatorEntry.innerHTML = '';
      return;
    }

    const phase = gameData?.phase || state.view;
    const requestedReplay = entry.requestedPhase === 'replay';
    const isReplayRail = requestedReplay && phase === 'finished' && gameData?.summary;
    const modeLabel = requestedReplay || phase === 'finished'
      ? 'Replay Link'
      : 'Watch Link';
    const headline = isReplayRail ? null : phase === 'finished'
      ? (gameData?.summary?.winner_summary || 'Replay recap is loading.')
      : phase === 'playing'
        ? (gameData?.live_summary?.why_ahead || 'Live match context is loading.')
        : phase === 'lobby'
          ? 'Shared lobby link opened. Waiting for the match to start.'
          : 'Connecting to shared match link.';
    const subline = gameData
      ? `${gameData.name || 'Founder Arena'} · ${gameData.queue || 'showmatch'} · ${gameData.benchmark_tier || 'baseline'}`
      : `Game ${state.gameId || ''}`;
    const meta = gameData
      ? `${phase === 'finished' ? 'Final replay' : phase === 'playing' ? `Week ${gameData.turn || 0}/${gameData.max_turns || 32}` : 'Pre-match'}`
      : 'Connecting';
    const sorted = this.store.startupList || [];
    const summary = gameData?.summary || {};
    const winner = sorted[0] || null;
    const topTurningPoint = (summary.turning_points || [])[0] || null;
    const sharePackage = isReplayRail
      ? this.controls._buildSharePackage(summary, sorted, gameData?.rank_basis === 'score')
      : null;
    const shareUrl = isReplayRail ? this.store.getShareUrl() : '';
    const recapText = isReplayRail
      ? this.controls._buildReplayRecapText(summary, sorted, gameData?.rank_basis === 'score')
      : '';

    this._spectatorEntry.classList.remove('hidden');
    this._matchStrip.classList.add('match-strip-with-entry');
    this._matchStrip.classList.toggle('match-strip-with-replay-entry', Boolean(isReplayRail));
    this._spectatorEntry.innerHTML = `
      <div class="spectator-entry-card">
        <div class="spectator-entry-topline">
          <span class="spectator-entry-badge">${modeLabel}</span>
          <span class="spectator-entry-meta">${subline}</span>
        </div>
        <div class="spectator-entry-headline">${headline}</div>
        <div class="spectator-entry-subline">${meta}${state.gameId ? ` · ID ${state.gameId}` : ''}</div>
      </div>
    `;
    if (isReplayRail) {
      this._spectatorEntry.innerHTML = `
        <div class="spectator-entry-card spectator-entry-card-replay">
          <div class="spectator-entry-topline">
            <span class="spectator-entry-badge">${modeLabel}</span>
            <span class="spectator-entry-meta">${subline}</span>
          </div>
          <div class="spectator-entry-hero">
            <div>
              <div class="spectator-entry-headline">${summary.winner_summary || 'Replay recap is loading.'}</div>
              <div class="spectator-entry-subline">${meta}${state.gameId ? ` · ID ${state.gameId}` : ''}</div>
            </div>
            <div class="spectator-entry-scorecard">
              <div class="spectator-entry-score">${winner?.startup_name || 'Unknown'}</div>
              <div class="spectator-entry-score-meta">${summary.final_margin != null ? `${summary.final_margin.toFixed(1)} score margin` : 'Final replay'}</div>
            </div>
          </div>
          <div class="spectator-entry-summary-grid">
            <div class="spectator-entry-summary-cell">
              <div class="spectator-entry-cell-label">Winner</div>
              <div class="spectator-entry-cell-value">${winner?.startup_name || 'Unknown'}</div>
            </div>
            <div class="spectator-entry-summary-cell">
              <div class="spectator-entry-cell-label">Margin</div>
              <div class="spectator-entry-cell-value">${summary.final_margin != null ? `${summary.final_margin.toFixed(1)} score` : 'N/A'}</div>
            </div>
            <div class="spectator-entry-summary-cell">
              <div class="spectator-entry-cell-label">Turning Point</div>
              <div class="spectator-entry-cell-value spectator-entry-cell-wrap">${topTurningPoint?.headline || 'Turning points are loading.'}</div>
            </div>
          </div>
          <div class="spectator-entry-actions">
            <button class="btn-clean spectator-entry-action" id="spectator-open-recap">Open Recap</button>
            <button class="btn-clean spectator-entry-action" id="spectator-copy-link">Copy Link</button>
            <button class="btn-clean spectator-entry-action" id="spectator-copy-headline">Copy Headline</button>
            <button class="btn-clean spectator-entry-action" id="spectator-copy-recap">Copy Recap</button>
          </div>
        </div>
      `;

      const openButton = this._spectatorEntry.querySelector('#spectator-open-recap');
      const linkButton = this._spectatorEntry.querySelector('#spectator-copy-link');
      const headlineButton = this._spectatorEntry.querySelector('#spectator-copy-headline');
      const recapButton = this._spectatorEntry.querySelector('#spectator-copy-recap');

      openButton?.addEventListener('click', () => {
        this.controls.showPostGame({ entryMode: 'sharedReplay' });
      });
      linkButton?.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(shareUrl);
          this._copyButtonFeedback(linkButton, 'Copy Link', 'Link Copied');
        } catch (e) {
          this._copyButtonFeedback(linkButton, 'Copy Link', 'Copy Failed');
        }
      });
      headlineButton?.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(sharePackage?.headline || '');
          this._copyButtonFeedback(headlineButton, 'Copy Headline', 'Headline Copied');
        } catch (e) {
          this._copyButtonFeedback(headlineButton, 'Copy Headline', 'Copy Failed');
        }
      });
      recapButton?.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(recapText);
          this._copyButtonFeedback(recapButton, 'Copy Recap', 'Recap Copied');
        } catch (e) {
          this._copyButtonFeedback(recapButton, 'Copy Recap', 'Copy Failed');
        }
      });
    }
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
    this._updateSpectatorEntry(state);

    // Update panels
    this.rankings.update(state);
    this.timeline.update(state);
    this.detail.update(state);

    // Show post-game modal once
    if (phase === 'finished' && !this._postGameShown) {
      this._postGameShown = true;
      const isSharedReplay = Boolean(
        state.entryContext?.viaSharedLink && state.entryContext?.requestedPhase === 'replay'
      );
      const openModal = () => this.controls.showPostGame({
        entryMode: isSharedReplay ? 'sharedReplay' : 'standard',
      });
      if (isSharedReplay) {
        openModal();
      } else {
        setTimeout(openModal, 1500);
      }
    }
    if (phase !== 'finished') {
      this._postGameShown = false;
    }
  }
}
