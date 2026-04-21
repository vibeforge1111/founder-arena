import { SceneManager } from './scene/SceneManager.js';
import { GameStore } from './api/store.js';
import { HUD } from './ui/HUD.js';

// Initialize
const canvas = document.getElementById('three-canvas');
const hudRoot = document.getElementById('hud-root');

const store = new GameStore();
const scene = new SceneManager(canvas);
const hud = new HUD(hudRoot, store, scene);

const bootParams = new URLSearchParams(window.location.search);
const bootGameId = bootParams.get('game');
const bootSpectator = bootParams.get('spectator');
const bootPhase = bootParams.get('phase');

function updateDocumentTitle(state) {
  const gameData = state.gameData;
  if (!gameData || !state.gameId) {
    document.title = 'FOUNDER ARENA';
    return;
  }

  const phase = gameData.phase || state.view;
  const ranked = Object.values(gameData.startups || {}).sort((a, b) => {
    const aScore = Number(a.score ?? a.seven_dimension_scores?.total_score ?? a.valuation ?? 0);
    const bScore = Number(b.score ?? b.seven_dimension_scores?.total_score ?? b.valuation ?? 0);
    return bScore - aScore;
  });
  const leader = ranked[0];
  const challenger = ranked[1];
  const isSharedReplay = Boolean(
    state.entryContext?.viaSharedLink &&
    state.entryContext?.requestedPhase === 'replay' &&
    phase === 'finished'
  );

  if (phase === 'finished') {
    const winner = gameData.startups?.[gameData.winner] || leader;
    document.title = `${isSharedReplay ? 'Featured Replay' : 'Replay'}: ${winner?.startup_name || gameData.name} | Founder Arena`;
    return;
  }
  if (phase === 'playing') {
    const matchup = leader && challenger
      ? `${leader.startup_name} vs ${challenger.startup_name}`
      : (leader?.startup_name || gameData.name);
    document.title = `Live: ${matchup} | Founder Arena`;
    return;
  }
  if (phase === 'lobby') {
    document.title = `Lobby: ${gameData.name || state.gameId} | Founder Arena`;
    return;
  }
  document.title = `${gameData.name || 'Founder Arena'} | Founder Arena`;
}

// Subscribe to state changes
store.subscribe((state) => {
  // Update 3D scene
  if (state.gameData?.startups) {
    scene.updatePods(state.gameData.startups, state.selectedStartupId);
    scene.highlightPod(state.selectedStartupId);
  }
  scene.updateMarketBoard(state.gameData);
  scene.checkTurnEvents(state.gameData);

  // Update HUD
  hud.update(state);
  updateDocumentTitle(state);
});

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  scene.render();
}
animate();

// Load existing games on startup
store.loadGames();
store.loadLeaderboard();
if (bootGameId) {
  store.watchGame(bootGameId, bootSpectator || null, {
    viaSharedLink: true,
    requestedPhase: bootPhase || null,
  });
}

console.log('[Founder Arena] Three.js frontend initialized');
