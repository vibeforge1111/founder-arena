import * as THREE from 'three';
import { CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';

export class MarketBoard {
  constructor() {
    this.group = new THREE.Group();
    this.group.position.set(0, 0, -8);
    this._build();
  }

  _build() {
    // Board frame
    const frameGeo = new THREE.BoxGeometry(5, 3, 0.15);
    const frameMat = new THREE.MeshStandardMaterial({
      color: 0x1a1a2e,
      roughness: 0.3,
      metalness: 0.7,
    });
    const frame = new THREE.Mesh(frameGeo, frameMat);
    frame.position.y = 2.5;
    frame.castShadow = true;
    this.group.add(frame);

    // Screen surface
    const screenGeo = new THREE.PlaneGeometry(4.6, 2.6);
    const screenMat = new THREE.MeshStandardMaterial({
      color: 0x0a0a1a,
      emissive: new THREE.Color(0x0a1025),
      emissiveIntensity: 0.8,
      roughness: 0.1,
      metalness: 0.2,
    });
    const screen = new THREE.Mesh(screenGeo, screenMat);
    screen.position.set(0, 2.5, 0.08);
    this.group.add(screen);

    // Support pole
    const poleGeo = new THREE.CylinderGeometry(0.06, 0.08, 1.0, 8);
    const poleMat = new THREE.MeshStandardMaterial({ color: 0x333345, metalness: 0.8 });
    const pole = new THREE.Mesh(poleGeo, poleMat);
    pole.position.y = 0.5;
    this.group.add(pole);

    // Top light
    const light = new THREE.PointLight(0x4466ff, 0.5, 8);
    light.position.set(0, 4.5, 1);
    this.group.add(light);

    // CSS2D Label
    const el = document.createElement('div');
    el.style.cssText = `
      text-align: center;
      pointer-events: none;
      width: 200px;
    `;

    this._titleEl = document.createElement('div');
    this._titleEl.style.cssText = 'font-size:12px;font-weight:800;color:#4488ff;letter-spacing:3px;';
    this._titleEl.textContent = 'FOUNDER ARENA';
    el.appendChild(this._titleEl);

    this._turnEl = document.createElement('div');
    this._turnEl.style.cssText = 'font-size:18px;font-weight:700;color:#eee;margin-top:4px;';
    this._turnEl.textContent = 'WEEK 0';
    el.appendChild(this._turnEl);

    this._phaseEl = document.createElement('div');
    this._phaseEl.style.cssText = 'font-size:9px;color:#666;letter-spacing:1.5px;margin-top:3px;text-transform:uppercase;';
    this._phaseEl.textContent = 'WAITING';
    el.appendChild(this._phaseEl);

    this._eventEl = document.createElement('div');
    this._eventEl.style.cssText = 'font-size:9px;color:#888;margin-top:6px;max-width:180px;';
    el.appendChild(this._eventEl);

    const label = new CSS2DObject(el);
    label.position.set(0, 2.5, 0.2);
    this.group.add(label);
  }

  update(gameData) {
    if (!gameData) return;

    const turn = gameData.turn || 0;
    const maxTurns = gameData.max_turns || 32;
    const phase = gameData.phase || 'unknown';

    this._turnEl.textContent = `WEEK ${turn}`;

    if (phase === 'lobby') {
      this._phaseEl.textContent = 'LOBBY - WAITING FOR PLAYERS';
      this._phaseEl.style.color = '#F0B429';
    } else if (phase === 'playing') {
      const phaseName = turn <= 10 ? 'EARLY STAGE' : turn <= 25 ? 'GROWTH' : turn <= 40 ? 'SCALE' : 'ENDGAME';
      this._phaseEl.textContent = `${phaseName} (${turn}/${maxTurns})`;
      this._phaseEl.style.color = '#22C55E';
    } else if (phase === 'finished') {
      this._phaseEl.textContent = 'GAME OVER';
      this._phaseEl.style.color = '#EF4444';
    }

    // Show latest event
    const events = gameData.event_log || [];
    if (events.length > 0) {
      const latest = events[events.length - 1];
      const text = typeof latest === 'string' ? latest : (latest.text || latest.headline || '');
      this._eventEl.textContent = text.slice(0, 60);
    }
  }
}
