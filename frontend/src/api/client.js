const BASE = '';

async function fetchJSON(url, options = {}) {
  const { headers: customHeaders, ...rest } = options;
  const resp = await fetch(BASE + url, {
    ...rest,
    headers: { 'Content-Type': 'application/json', ...customHeaders },
  });
  if (!resp.ok) {
    const text = await resp.text().catch(() => '');
    console.error(`[API] ${rest.method || 'GET'} ${url} -> ${resp.status}: ${text}`);
    throw new Error(`API ${resp.status}: ${text}`);
  }
  return resp.json();
}

export async function fetchInfo() {
  return fetchJSON('/api/info');
}

export async function fetchGames() {
  return fetchJSON('/api/games');
}

export async function fetchGamePublic(gameId) {
  return fetchJSON(`/api/games/${gameId}`);
}

export async function fetchGameState(gameId, agentToken) {
  return fetchJSON(`/api/games/${gameId}/state`, {
    headers: { 'X-Agent-Token': agentToken },
  });
}

export async function fetchSpectatorState(gameId, spectatorToken) {
  return fetchJSON(`/api/games/${gameId}/spectate`, {
    headers: { 'X-Spectator-Token': spectatorToken },
  });
}

export async function createGame(config = {}) {
  return fetchJSON('/api/games', {
    method: 'POST',
    body: JSON.stringify({
      name: config.name || 'Founder Arena',
      max_players: config.maxPlayers || 8,
      min_players: config.minPlayers || 2,
      turn_timeout: config.turnTimeout || 5,
      max_turns: config.maxTurns || 32,
      game_mode: config.gameMode || 'competitive_mode',
      queue: config.queue || 'showmatch',
      benchmark_tier: config.benchmarkTier || 'baseline',
    }),
  });
}

export async function joinGame(gameId, payload) {
  return fetchJSON(`/api/games/${gameId}/join`, {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

export async function startGame(gameId, adminToken) {
  return fetchJSON(`/api/games/${gameId}/start`, {
    method: 'POST',
    headers: { 'X-Admin-Token': adminToken },
  });
}

export async function fillBotsAndStart(gameId, adminToken, benchmarkTier = 'baseline') {
  return fetchJSON(`/api/games/${gameId}/fill-bots`, {
    method: 'POST',
    headers: { 'X-Admin-Token': adminToken },
    body: JSON.stringify({ benchmark_tier: benchmarkTier }),
  });
}

export async function submitActions(gameId, agentToken, actions, decisionPacket = null) {
  const body = { actions };
  if (decisionPacket) body.decision_packet = decisionPacket;
  return fetchJSON(`/api/games/${gameId}/action`, {
    method: 'POST',
    headers: { 'X-Agent-Token': agentToken },
    body: JSON.stringify(body),
  });
}

export async function fetchReplay(gameId) {
  return fetchJSON(`/api/games/${gameId}/replay`);
}

export async function fetchNarrative(gameId) {
  return fetchJSON(`/api/games/${gameId}/narrative`);
}

export async function fetchActions(gameId) {
  return fetchJSON(`/api/games/${gameId}/actions`);
}

export async function fetchLeaderboard() {
  return fetchJSON('/api/leaderboard');
}

export async function fetchEntrants() {
  return fetchJSON('/api/entrants');
}
