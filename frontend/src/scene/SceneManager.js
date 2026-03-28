import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { CSS2DRenderer } from 'three/addons/renderers/CSS2DRenderer.js';
import { OfficeFloor } from './OfficeFloor.js';
import { StartupPod } from './StartupPod.js';
import { MarketBoard } from './MarketBoard.js';
import { SkylineBackground } from './SkylineBackground.js';
import { ParticleEffect } from './effects.js';
import { getAgentColor } from '../utils/colors.js';

export class SceneManager {
  constructor(canvas) {
    this.canvas = canvas;
    this.pods = new Map();
    this.clock = new THREE.Clock();
    this._startupOrder = [];

    // Renderer
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.1;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // CSS2D Renderer for labels
    this.labelRenderer = new CSS2DRenderer();
    this.labelRenderer.setSize(window.innerWidth, window.innerHeight);
    this.labelRenderer.domElement.style.position = 'fixed';
    this.labelRenderer.domElement.style.top = '0';
    this.labelRenderer.domElement.style.left = '0';
    this.labelRenderer.domElement.style.pointerEvents = 'none';
    this.labelRenderer.domElement.style.zIndex = '5';
    document.body.appendChild(this.labelRenderer.domElement);

    // Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x101020);
    this.scene.fog = new THREE.FogExp2(0x101020, 0.006);

    // Camera
    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 200);
    this.camera.position.set(20, 18, 20);
    this.camera.lookAt(0, 0, 0);

    // Controls
    this.controls = new OrbitControls(this.camera, canvas);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.08;
    this.controls.maxPolarAngle = Math.PI / 2.3;
    this.controls.minPolarAngle = Math.PI / 8;
    this.controls.minDistance = 8;
    this.controls.maxDistance = 50;
    this.controls.target.set(0, 0, 0);

    // Lighting
    this._setupLights();

    // Floor
    this.floor = new OfficeFloor();
    this.scene.add(this.floor.group);

    // Market Board
    this.marketBoard = new MarketBoard();
    this.scene.add(this.marketBoard.group);

    // Skyline Background
    this.skyline = new SkylineBackground();
    this.scene.add(this.skyline.group);

    // Particle Effects
    this.particles = new ParticleEffect(this.scene);
    this._lastTurn = 0;

    // Raycaster for click selection
    this.raycaster = new THREE.Raycaster();
    this._mouse = new THREE.Vector2();
    this._onClickCallback = null;
    canvas.addEventListener('click', (e) => this._handleClick(e));

    // Resize
    window.addEventListener('resize', () => this._onResize());
  }

  _setupLights() {
    // Ambient - bright office
    const ambient = new THREE.AmbientLight(0x556688, 1.0);
    this.scene.add(ambient);

    // Hemisphere light - sky blue top, warm ground bounce
    const hemi = new THREE.HemisphereLight(0x88aadd, 0x443322, 0.7);
    this.scene.add(hemi);

    // Main directional (strong overhead)
    const dirLight = new THREE.DirectionalLight(0xfff0dd, 1.5);
    dirLight.position.set(12, 22, 8);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;
    dirLight.shadow.camera.near = 0.5;
    dirLight.shadow.camera.far = 60;
    dirLight.shadow.camera.left = -25;
    dirLight.shadow.camera.right = 25;
    dirLight.shadow.camera.top = 25;
    dirLight.shadow.camera.bottom = -25;
    dirLight.shadow.bias = -0.001;
    this.scene.add(dirLight);

    // Warm fill from opposite side
    const fillLight = new THREE.DirectionalLight(0xffcc88, 0.5);
    fillLight.position.set(-12, 8, -8);
    this.scene.add(fillLight);

    // Cool rim backlight
    const rimLight = new THREE.PointLight(0x6688ee, 0.6, 50);
    rimLight.position.set(-10, 14, 10);
    this.scene.add(rimLight);

    // Warm accent from front
    const warmAccent = new THREE.PointLight(0xffaa66, 0.5, 35);
    warmAccent.position.set(8, 6, 15);
    this.scene.add(warmAccent);

    // Central overhead office light (bright)
    const overhead = new THREE.PointLight(0xffffff, 0.8, 30);
    overhead.position.set(0, 10, 0);
    this.scene.add(overhead);

    // Extra fill from behind camera
    const backFill = new THREE.PointLight(0xddddff, 0.3, 40);
    backFill.position.set(15, 8, 15);
    this.scene.add(backFill);
  }

  onPodClick(callback) {
    this._onClickCallback = callback;
  }

  _handleClick(event) {
    const rect = this.canvas.getBoundingClientRect();
    this._mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this._mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    this.raycaster.setFromCamera(this._mouse, this.camera);
    const objects = [];
    for (const pod of this.pods.values()) {
      objects.push(...pod.clickTargets);
    }
    const intersects = this.raycaster.intersectObjects(objects, false);
    if (intersects.length > 0) {
      const hit = intersects[0].object;
      const startupId = hit.userData.startupId;
      if (startupId && this._onClickCallback) {
        this._onClickCallback(startupId);
      }
    }
  }

  focusOnPod(startupId) {
    const pod = this.pods.get(startupId);
    if (!pod) return;
    const pos = pod.group.position;
    const target = new THREE.Vector3(pos.x, 0, pos.z);

    // Animate camera target
    const start = this.controls.target.clone();
    const duration = 600;
    const startTime = performance.now();

    const animate = () => {
      const elapsed = performance.now() - startTime;
      const t = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - t, 3); // ease-out cubic
      this.controls.target.lerpVectors(start, target, ease);
      if (t < 1) requestAnimationFrame(animate);
    };
    animate();
  }

  updatePods(startups, selectedId) {
    const ids = Object.keys(startups);

    // Track startup order for stable positioning
    for (const id of ids) {
      if (!this._startupOrder.includes(id)) {
        this._startupOrder.push(id);
      }
    }

    // Create or update pods
    const cols = Math.max(2, Math.ceil(Math.sqrt(ids.length)));
    const spacing = 7;

    for (const id of ids) {
      const idx = this._startupOrder.indexOf(id);
      const row = Math.floor(idx / cols);
      const col = idx % cols;
      const x = (col - (cols - 1) / 2) * spacing;
      const z = (row - (Math.ceil(ids.length / cols) - 1) / 2) * spacing;

      let pod = this.pods.get(id);
      if (!pod) {
        const colorIndex = this._startupOrder.indexOf(id);
        pod = new StartupPod(id, getAgentColor(colorIndex));
        pod.group.position.set(x, 0, z);
        this.scene.add(pod.group);
        this.pods.set(id, pod);
      }

      pod.update(startups[id], id === selectedId);
    }

    // Remove pods for startups that no longer exist
    for (const [id, pod] of this.pods) {
      if (!ids.includes(id)) {
        this.scene.remove(pod.group);
        pod.dispose();
        this.pods.delete(id);
      }
    }
  }

  updateMarketBoard(gameData) {
    if (gameData) {
      this.marketBoard.update(gameData);
    }
  }

  highlightPod(startupId) {
    for (const [id, pod] of this.pods) {
      pod.setHighlight(id === startupId);
    }
  }

  render() {
    const dt = this.clock.getDelta();
    const elapsed = this.clock.getElapsedTime();

    this.controls.update();

    // Animate pods
    for (const pod of this.pods.values()) {
      pod.animate(elapsed, dt);
    }

    // Update particle effects
    this.particles.update(dt);

    this.renderer.render(this.scene, this.camera);
    this.labelRenderer.render(this.scene, this.camera);
  }

  spawnEffectAtPod(startupId, type) {
    const pod = this.pods.get(startupId);
    if (!pod) return;
    const pos = pod.group.position;
    if (type === 'fundraise') {
      this.particles.spawnFundraiseEffect(pos);
    } else if (type === 'growth') {
      this.particles.spawnGrowthEffect(pos);
    }
  }

  checkTurnEvents(gameData) {
    if (!gameData || !gameData.turn) return;
    const turn = gameData.turn;
    if (turn <= this._lastTurn) return;
    this._lastTurn = turn;

    // Scan action logs for effect-worthy events
    const logs = gameData.action_log || gameData.event_log || [];
    for (const log of logs) {
      const text = typeof log === 'string' ? log : (log.text || log.action || '');
      const sid = typeof log === 'object' ? log.startup_id : null;
      if (!sid) continue;
      if (/fundraise|raised|funding/i.test(text)) {
        this.spawnEffectAtPod(sid, 'fundraise');
      } else if (/users|growth|viral|acquire/i.test(text)) {
        this.spawnEffectAtPod(sid, 'growth');
      }
    }
  }

  _onResize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
    this.labelRenderer.setSize(w, h);
  }
}
