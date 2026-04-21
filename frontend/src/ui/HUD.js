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

    this._discoveryShelf = document.createElement('div');
    this._discoveryShelf.className = 'spectator-entry hidden';
    this.container.appendChild(this._discoveryShelf);

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

  _updateDiscoveryShelf(state) {
    const hasFocusedGame = Boolean(state.gameId || state.gameData);
    if (hasFocusedGame) {
      this._discoveryShelf.classList.add('hidden');
      this._discoveryShelf.innerHTML = '';
      return;
    }

    const games = Array.isArray(state.games) ? state.games : [];
    const leaderboardData = state.leaderboardData || {};
    const liveGames = games
      .filter((game) => game.phase === 'playing')
      .sort((a, b) => (b.turn || 0) - (a.turn || 0))
      .slice(0, 3);
    const featuredReplays = [];
    for (const entry of (leaderboardData.leaderboard || [])) {
      if (entry.game_mode !== 'competitive_mode' || !entry.was_winner) continue;
      if (featuredReplays.some((item) => item.game_id === entry.game_id)) continue;
      featuredReplays.push(entry);
      if (featuredReplays.length >= 4) break;
    }
    const topAgents = (leaderboardData.agent_rankings || []).slice(0, 5);

    if (liveGames.length === 0 && featuredReplays.length === 0 && topAgents.length === 0) {
      this._discoveryShelf.classList.add('hidden');
      this._discoveryShelf.innerHTML = '';
      return;
    }

    const liveHtml = liveGames.length > 0
      ? liveGames.map((game) => `
          <button class="btn-clean discovery-link" data-mode="watch" data-game="${game.id}" style="text-align:left;padding:10px 12px;border-color:rgba(34,211,238,0.18);background:rgba(34,211,238,0.06)">
            <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
              <div style="font-size:10px;color:#22D3EE;font-weight:800">${game.name || 'Founder Arena'}</div>
              <div style="font-size:8px;color:var(--text-muted);border:1px solid rgba(34,211,238,0.16);border-radius:999px;padding:2px 6px">Week ${game.turn || 0}/${game.max_turns || 32}</div>
            </div>
            <div style="font-size:9px;color:var(--text-dim);line-height:1.5;margin-top:6px">${game.queue || 'showmatch'} &middot; ${game.benchmark_tier || 'baseline'} &middot; ${game.players || 0} founders</div>
          </button>
        `).join('')
      : '<div style="font-size:10px;color:var(--text-muted)">No live showmatches right now.</div>';

    const replayHtml = featuredReplays.length > 0
      ? featuredReplays.map((entry) => `
          <button class="btn-clean discovery-link" data-mode="replay" data-game="${entry.game_id}" style="text-align:left;padding:10px 12px;border-color:rgba(255,184,0,0.18);background:rgba(255,184,0,0.06)">
            <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
              <div style="font-size:10px;color:#FFB800;font-weight:800">${entry.startup_name}</div>
              <div style="font-size:8px;color:var(--text-muted);border:1px solid rgba(255,184,0,0.16);border-radius:999px;padding:2px 6px">${Number(entry.score || entry.official_metric || 0).toFixed(1)} score</div>
            </div>
            <div style="font-size:9px;color:var(--text-dim);line-height:1.5;margin-top:6px">${entry.agent_name} &middot; ${entry.queue || 'showmatch'} &middot; replay</div>
          </button>
        `).join('')
      : '<div style="font-size:10px;color:var(--text-muted)">No finished featured replays yet.</div>';

    const agentsHtml = topAgents.length > 0
      ? topAgents.map((agent, index) => `
          <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;padding:8px 0;border-bottom:${index === topAgents.length - 1 ? 'none' : '1px solid rgba(255,255,255,0.06)'}">
            <div>
              <div style="font-size:10px;color:var(--text);font-weight:800">${index + 1}. ${agent.agent_name}</div>
              <div style="font-size:9px;color:var(--text-dim);margin-top:4px">${agent.competitive_wins || 0} comp wins &middot; ${agent.games_played || 0} games</div>
            </div>
            <div style="font-size:10px;color:#22D3EE;font-weight:800">${Number(agent.avg_score || 0).toFixed(1)} avg</div>
          </div>
        `).join('')
      : '<div style="font-size:10px;color:var(--text-muted)">Leaderboard is still warming up.</div>';

    this._discoveryShelf.classList.remove('hidden');
    this._discoveryShelf.innerHTML = `
      <div class="spectator-entry-card">
        <div class="spectator-entry-topline">
          <span class="spectator-entry-badge">Watch Founder Arena</span>
          <span class="spectator-entry-meta">Featured live matches, replays, and the public ladder</span>
        </div>
        <div class="spectator-entry-headline">Spectator mode should start with a story, not an empty shell.</div>
        <div class="spectator-entry-summary-grid" style="margin-top:14px">
          <div class="spectator-entry-summary-cell">
            <div class="spectator-entry-cell-label">Live Now</div>
            <div style="display:grid;gap:8px;margin-top:8px">${liveHtml}</div>
          </div>
          <div class="spectator-entry-summary-cell">
            <div class="spectator-entry-cell-label">Featured Replays</div>
            <div style="display:grid;gap:8px;margin-top:8px">${replayHtml}</div>
          </div>
          <div class="spectator-entry-summary-cell">
            <div class="spectator-entry-cell-label">Top Agents</div>
            <div style="margin-top:8px">${agentsHtml}</div>
          </div>
        </div>
      </div>
    `;

    this._discoveryShelf.querySelectorAll('.discovery-link').forEach((button) => {
      button.addEventListener('click', () => {
        const gameId = button.dataset.game;
        const mode = button.dataset.mode;
        if (!gameId) return;
        if (mode === 'replay') {
          this.store.watchGame(gameId, null, { viaSharedLink: true, requestedPhase: 'replay' });
          return;
        }
        this.store.watchGame(gameId, null);
      });
    });
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
      ? this.controls._buildSharePackage(gameData, summary, sorted, gameData?.rank_basis === 'score')
      : null;
    const shareUrl = isReplayRail ? this.store.getShareUrl() : '';
    const replayLabel = sharePackage?.formatLabel || modeLabel;

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
            <span class="spectator-entry-badge">Featured Replay</span>
            <span class="spectator-entry-meta">${replayLabel} &middot; ${subline}</span>
          </div>
          <div class="spectator-entry-hero">
            <div>
              <div class="spectator-entry-headline">${sharePackage?.headline || summary.winner_summary || 'Replay recap is loading.'}</div>
              <div class="spectator-entry-subline">${sharePackage?.matchupLabel || subline}</div>
              <div class="spectator-entry-subline">${meta}${state.gameId ? ` · ID ${state.gameId}` : ''}</div>
            </div>
            <div class="spectator-entry-scorecard">
              <div class="spectator-entry-score">${winner?.startup_name || 'Unknown'}</div>
              <div class="spectator-entry-score-meta">${summary.final_margin != null ? `${summary.final_margin.toFixed(1)} score margin` : 'Final replay'}</div>
            </div>
          </div>
          <div class="spectator-entry-summary-grid">
            <div class="spectator-entry-summary-cell">
              <div class="spectator-entry-cell-label">Format</div>
              <div class="spectator-entry-cell-value">${sharePackage?.formatLabel || 'Replay'}</div>
            </div>
            <div class="spectator-entry-summary-cell">
              <div class="spectator-entry-cell-label">Matchup</div>
              <div class="spectator-entry-cell-value spectator-entry-cell-wrap">${sharePackage?.matchupLabel || winner?.startup_name || 'Unknown'}</div>
            </div>
            <div class="spectator-entry-summary-cell">
              <div class="spectator-entry-cell-label">Winner</div>
              <div class="spectator-entry-cell-value">${winner?.startup_name || 'Unknown'}</div>
            </div>
            <div class="spectator-entry-summary-cell">
              <div class="spectator-entry-cell-label">Margin</div>
              <div class="spectator-entry-cell-value">${summary.final_margin != null ? `${summary.final_margin.toFixed(1)} score` : 'N/A'}</div>
            </div>
            <div class="spectator-entry-summary-cell">
              <div class="spectator-entry-cell-label">Story Hook</div>
              <div class="spectator-entry-cell-value spectator-entry-cell-wrap">${sharePackage?.storyHook || summary.winner_summary || 'Replay story is loading.'}</div>
            </div>
            <div class="spectator-entry-summary-cell">
              <div class="spectator-entry-cell-label">Turning Point</div>
              <div class="spectator-entry-cell-value spectator-entry-cell-wrap">${sharePackage?.topTurningPoint?.headline || topTurningPoint?.headline || 'Turning points are loading.'}</div>
            </div>
          </div>
          <div class="spectator-entry-actions">
            <button class="btn-clean spectator-entry-action" id="spectator-open-recap">Open Recap</button>
            <button class="btn-clean spectator-entry-action" id="spectator-copy-link">Copy Link</button>
            <button class="btn-clean spectator-entry-action" id="spectator-copy-headline">Copy Headline</button>
            <button class="btn-clean spectator-entry-action" id="spectator-copy-caption">Copy Caption</button>
            <button class="btn-clean spectator-entry-action" id="spectator-copy-package">Copy Package</button>
          </div>
        </div>
      `;

      const openButton = this._spectatorEntry.querySelector('#spectator-open-recap');
      const linkButton = this._spectatorEntry.querySelector('#spectator-copy-link');
      const headlineButton = this._spectatorEntry.querySelector('#spectator-copy-headline');
      const captionButton = this._spectatorEntry.querySelector('#spectator-copy-caption');
      const packageButton = this._spectatorEntry.querySelector('#spectator-copy-package');

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
      captionButton?.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(sharePackage?.caption || '');
          this._copyButtonFeedback(captionButton, 'Copy Caption', 'Caption Copied');
        } catch (e) {
          this._copyButtonFeedback(captionButton, 'Copy Caption', 'Copy Failed');
        }
      });
      packageButton?.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(sharePackage?.featuredCard || '');
          this._copyButtonFeedback(packageButton, 'Copy Package', 'Package Copied');
        } catch (e) {
          this._copyButtonFeedback(packageButton, 'Copy Package', 'Copy Failed');
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
    this._updateDiscoveryShelf(state);

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
