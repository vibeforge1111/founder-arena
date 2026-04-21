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
});

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  scene.render();
}
animate();

// Load existing games on startup
store.loadGames();
if (bootGameId) {
  store.watchGame(bootGameId, bootSpectator || null);
}

console.log('[Founder Arena] Three.js frontend initialized');
