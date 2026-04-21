import * as api from './client.js';
import { rankedStartups } from '../utils/rankings.js';

export class GameStore {
  constructor() {
    this.state = {
      view: 'landing',       // landing | lobby | playing | finished
      games: [],
      leaderboardData: {
        leaderboard: [],
        agent_rankings: [],
      },
      featuredFeed: {
        daily_featured_duel: null,
        weekly_upset_recap: null,
        benchmark_challenge: null,
        featured_replays: [],
        live_now: [],
      },
      gameId: null,
      adminToken: null,
      spectatorToken: null,
      joinCode: null,
      agentToken: null,
      myStartupId: null,
      gameData: null,
      selectedStartupId: null,
      entryContext: {
        viaSharedLink: false,
        requestedPhase: null,
        layout: null,
        slot: null,
      },
      error: null,
    };
    this._listeners = new Set();
    this._pollTimer = null;
    this._pollInterval = 2000;
  }

  _syncUrl() {
    if (typeof window === 'undefined' || !window.history?.replaceState) return;
    const url = new URL(window.location.href);
    if (this.state.gameId) {
      url.searchParams.set('game', this.state.gameId);
    } else {
      url.searchParams.delete('game');
    }
    if (this.state.spectatorToken) {
      url.searchParams.set('spectator', this.state.spectatorToken);
    } else {
      url.searchParams.delete('spectator');
    }
    if (this.state.view === 'finished') {
      url.searchParams.set('phase', 'replay');
    } else {
      url.searchParams.delete('phase');
    }
    if (this.state.entryContext?.layout) {
      url.searchParams.set('layout', this.state.entryContext.layout);
    } else {
      url.searchParams.delete('layout');
    }
    if (this.state.entryContext?.slot) {
      url.searchParams.set('slot', this.state.entryContext.slot);
    } else {
      url.searchParams.delete('slot');
    }
    window.history.replaceState({}, '', `${url.pathname}${url.search}`);
  }

  subscribe(fn) {
    this._listeners.add(fn);
    return () => this._listeners.delete(fn);
  }

  _notify() {
    for (const fn of this._listeners) {
      try { fn(this.state); } catch (e) { console.error('Store listener error:', e); }
    }
  }

  update(partial) {
    Object.assign(this.state, partial);
    this._syncUrl();
    this._notify();
  }

  get startups() {
    return this.state.gameData?.startups || {};
  }

  get startupList() {
    return rankedStartups(this.state.gameData);
  }

  get selectedStartup() {
    if (!this.state.selectedStartupId) return null;
    return this.startups[this.state.selectedStartupId] || null;
  }

  get turn() {
    return this.state.gameData?.turn || 0;
  }

  get phase() {
    return this.state.gameData?.phase || 'unknown';
  }

  get maxTurns() {
    return this.state.gameData?.max_turns || 32;
  }

  getShareUrl(options = {}) {
    if (typeof window === 'undefined') return '';
    const url = new URL(window.location.href);
    if (this.state.gameId) {
      url.searchParams.set('game', this.state.gameId);
    }
    if (this.state.spectatorToken) {
      url.searchParams.set('spectator', this.state.spectatorToken);
    }
    if ((options.phase || this.phase) === 'finished') {
      url.searchParams.set('phase', 'replay');
    }
    if (options.layout) {
      url.searchParams.set('layout', options.layout);
    } else if (options.layout === null) {
      url.searchParams.delete('layout');
    } else if (this.state.entryContext?.layout) {
      url.searchParams.set('layout', this.state.entryContext.layout);
    }
    if (options.slot) {
      url.searchParams.set('slot', options.slot);
    } else if (options.slot === null) {
      url.searchParams.delete('slot');
    } else if (this.state.entryContext?.slot) {
      url.searchParams.set('slot', this.state.entryContext.slot);
    }
    return url.toString();
  }

  getFeaturedSlotUrl(slot, options = {}) {
    if (typeof window === 'undefined') return '';
    const url = new URL(window.location.href);
    url.searchParams.delete('game');
    url.searchParams.delete('spectator');
    url.searchParams.delete('phase');
    url.searchParams.delete('layout');
    if (slot) {
      url.searchParams.set('slot', slot);
    } else {
      url.searchParams.delete('slot');
    }
    if (options.layout) {
      url.searchParams.set('layout', options.layout);
    }
    return url.toString();
  }

  async loadGames() {
    try {
      const data = await api.fetchGames();
      this.update({ games: data.games || [] });
    } catch (e) {
      console.error('Failed to load games:', e);
    }
  }

  async loadLeaderboard() {
    try {
      const data = await api.fetchLeaderboard();
      this.update({
        leaderboardData: {
          leaderboard: data.leaderboard || [],
          agent_rankings: data.agent_rankings || [],
        },
      });
    } catch (e) {
      console.error('Failed to load leaderboard:', e);
    }
  }

  async loadFeaturedFeed() {
    try {
      const data = await api.fetchFeaturedFeed();
      this.update({
        featuredFeed: {
          daily_featured_duel: data.daily_featured_duel || null,
          weekly_upset_recap: data.weekly_upset_recap || null,
          benchmark_challenge: data.benchmark_challenge || null,
          featured_replays: data.featured_replays || [],
          live_now: data.live_now || [],
        },
      });
    } catch (e) {
      console.error('Failed to load featured feed:', e);
    }
  }

  async createGame(config = {}) {
    try {
      const data = await api.createGame(config);
      this.update({
        gameId: data.game_id,
        adminToken: data.admin_token,
        spectatorToken: data.spectator_token,
        joinCode: data.join_code,
        view: 'lobby',
        error: null,
      });
      this.startPolling();
      return data;
    } catch (e) {
      this.update({ error: e.message });
      throw e;
    }
  }

  async joinAsPlayer(agentConfig) {
    try {
      const data = await api.joinGame(this.state.gameId, {
        agent_name: agentConfig.agentName,
        startup_name: agentConfig.startupName,
        sector: agentConfig.sector,
        motto: agentConfig.motto || '',
        strategy_description: agentConfig.strategyDescription || '',
        join_code: this.state.joinCode,
      });
      this.update({
        agentToken: data.agent_token,
        myStartupId: data.startup_id,
        selectedStartupId: data.startup_id,
        error: null,
      });
      return data;
    } catch (e) {
      this.update({ error: e.message });
      throw e;
    }
  }

  async fillBotsAndStart(tier = 'baseline') {
    try {
      console.log(`[Store] fillBotsAndStart: gameId=${this.state.gameId} tier=${tier}`);
      const result = await api.fillBotsAndStart(this.state.gameId, this.state.adminToken, tier);
      console.log('[Store] fillBotsAndStart result:', result);
      return result;
    } catch (e) {
      console.error('[Store] fillBotsAndStart error:', e);
      this.update({ error: e.message });
      throw e;
    }
  }

  async watchGame(gameId, spectatorToken, options = {}) {
    this.update({
      gameId,
      spectatorToken,
      view: 'playing',
      entryContext: {
        viaSharedLink: Boolean(options.viaSharedLink),
        requestedPhase: options.requestedPhase || null,
        layout: options.layout || null,
        slot: options.slot || null,
      },
      error: null,
    });
    this.startPolling();
  }

  openFeaturedSlot(slot, options = {}) {
    this.stopPolling();
    this.update({
      gameId: null,
      spectatorToken: null,
      gameData: null,
      selectedStartupId: null,
      view: 'landing',
      entryContext: {
        viaSharedLink: Boolean(options.viaSharedLink ?? true),
        requestedPhase: null,
        layout: options.layout || null,
        slot: slot || null,
      },
      error: null,
    });
  }

  selectStartup(startupId) {
    this.update({ selectedStartupId: startupId });
  }

  async poll() {
    if (!this.state.gameId) return;
    try {
      const previousPhase = this.state.gameData?.phase || null;
      let data;
      if (this.state.spectatorToken) {
        data = await api.fetchSpectatorState(this.state.gameId, this.state.spectatorToken);
      } else {
        data = await api.fetchGamePublic(this.state.gameId);
      }

      const phase = data.phase || 'unknown';
      const startupCount = data.startups ? Object.keys(data.startups).length : 0;
      console.log(`[Poll] phase=${phase} turn=${data.turn || 0} startups=${startupCount}`);

      let view = this.state.view;
      if (phase === 'lobby') view = 'lobby';
      else if (phase === 'playing') view = 'playing';
      else if (phase === 'finished') view = 'finished';

      let selectedStartupId = this.state.selectedStartupId;
      const isReplayBoot = this.state.entryContext?.viaSharedLink && this.state.entryContext?.requestedPhase === 'replay';
      if ((!selectedStartupId || !data.startups?.[selectedStartupId]) && data.startups) {
        if (isReplayBoot && data.winner && data.startups[data.winner]) {
          selectedStartupId = data.winner;
        } else {
          const ids = Object.keys(data.startups);
          if (ids.length > 0) selectedStartupId = ids[0];
        }
      }

      this.update({ gameData: data, view, selectedStartupId, error: null });
      if (phase === 'finished' && previousPhase !== 'finished') {
        this.loadGames();
        this.loadLeaderboard();
        this.loadFeaturedFeed();
      }
    } catch (e) {
      console.error('[Poll] Error:', e);
    }
  }

  startPolling() {
    this.stopPolling();
    this.poll();
    this._pollTimer = setInterval(() => this.poll(), this._pollInterval);
  }

  stopPolling() {
    if (this._pollTimer) {
      clearInterval(this._pollTimer);
      this._pollTimer = null;
    }
  }
}
