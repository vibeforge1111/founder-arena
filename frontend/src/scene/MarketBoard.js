import * as THREE from 'three';
import { CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';

export class MarketBoard {
  constructor() {
    this.group = new THREE.Group();
    this.group.position.set(0, 0, -8);
    this._build();
  }

  _build() {
    // Board frame — sleek, thin bezel
    const frameGeo = new THREE.BoxGeometry(5.2, 3.2, 0.1);
    const frameMat = new THREE.MeshStandardMaterial({
      color: 0x111120,
      roughness: 0.2,
      metalness: 0.8,
    });
    const frame = new THREE.Mesh(frameGeo, frameMat);
    frame.position.y = 2.5;
    frame.castShadow = true;
    this.group.add(frame);

    // Screen surface — brighter, more emissive
    const screenGeo = new THREE.PlaneGeometry(4.8, 2.8);
    const screenMat = new THREE.MeshStandardMaterial({
      color: 0x060a18,
      emissive: new THREE.Color(0x0c1833),
      emissiveIntensity: 1.2,
      roughness: 0.05,
      metalness: 0.1,
    });
    const screen = new THREE.Mesh(screenGeo, screenMat);
    screen.position.set(0, 2.5, 0.052);
    this.group.add(screen);

    // Edge glow strip around screen
    const edgeMat = new THREE.MeshStandardMaterial({
      color: 0x3366ff,
      emissive: new THREE.Color(0x2255ff),
      emissiveIntensity: 1.0,
    });
    // Bottom edge
    const bottomEdge = new THREE.Mesh(new THREE.BoxGeometry(5.0, 0.03, 0.02), edgeMat);
    bottomEdge.position.set(0, 0.92, 0.06);
    this.group.add(bottomEdge);
    // Top edge
    const topEdge = new THREE.Mesh(new THREE.BoxGeometry(5.0, 0.03, 0.02), edgeMat);
    topEdge.position.set(0, 4.08, 0.06);
    this.group.add(topEdge);

    // Support — dual poles
    const poleMat = new THREE.MeshStandardMaterial({ color: 0x333345, metalness: 0.8, roughness: 0.2 });
    for (const xOff of [-1.2, 1.2]) {
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.05, 1.0, 8), poleMat);
      pole.position.set(xOff, 0.5, 0);
      this.group.add(pole);
    }
    // Base plate
    const basePlate = new THREE.Mesh(
      new THREE.BoxGeometry(3.0, 0.04, 0.6),
      poleMat
    );
    basePlate.position.y = 0.02;
    this.group.add(basePlate);

    // Top light — blue wash on screen
    const light = new THREE.PointLight(0x4466ff, 0.6, 10);
    light.position.set(0, 4.5, 1.5);
    this.group.add(light);

    // Screen light spill on floor
    const floorLight = new THREE.PointLight(0x223388, 0.3, 6);
    floorLight.position.set(0, 0.5, -0.5);
    this.group.add(floorLight);

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
