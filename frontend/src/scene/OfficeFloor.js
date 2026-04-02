import * as THREE from 'three';
import { AssetLoader } from './AssetLoader.js';

export class OfficeFloor {
  constructor() {
    this.group = new THREE.Group();
    this._buildFloor();
    this._buildGrid();
    this._buildCarpetZone();
    this._buildAmbientProps();
    this._buildCeilingStructure();
    this._buildNeonAccents();
    this._loadGLBProps();
  }

  _buildFloor() {
    // Main floor — polished dark concrete with better material
    const geo = new THREE.PlaneGeometry(80, 80, 1, 1);
    const mat = new THREE.MeshStandardMaterial({
      color: 0x1e1e2a,
      roughness: 0.35,
      metalness: 0.3,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.rotation.x = -Math.PI / 2;
    mesh.receiveShadow = true;
    this.group.add(mesh);

    // Subtle reflective overlay for polished floor
    const reflGeo = new THREE.PlaneGeometry(80, 80, 1, 1);
    const reflMat = new THREE.MeshStandardMaterial({
      color: 0x2a2a3a,
      roughness: 0.15,
      metalness: 0.6,
      transparent: true,
      opacity: 0.12,
    });
    const refl = new THREE.Mesh(reflGeo, reflMat);
    refl.rotation.x = -Math.PI / 2;
    refl.position.y = 0.005;
    this.group.add(refl);
  }

  _buildGrid() {
    // Subtle floor grid — tech office feel
    const gridHelper = new THREE.GridHelper(60, 40, 0x2a2a44, 0x1a1a2e);
    gridHelper.position.y = 0.01;
    gridHelper.material.opacity = 0.15;
    gridHelper.material.transparent = true;
    this.group.add(gridHelper);

    // Inner accent ring — glowing
    const ringGeo = new THREE.RingGeometry(14, 14.12, 64);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0x3355aa,
      emissive: new THREE.Color(0x2244aa),
      emissiveIntensity: 0.3,
      transparent: true,
      opacity: 0.35,
      side: THREE.DoubleSide,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.02;
    this.group.add(ring);
  }

  _buildCarpetZone() {
    // Central carpet — premium dark wool texture feel
    const carpetGeo = new THREE.PlaneGeometry(28, 28, 1, 1);
    const carpetMat = new THREE.MeshStandardMaterial({
      color: 0x222238,
      roughness: 0.92,
      metalness: 0.0,
    });
    const carpet = new THREE.Mesh(carpetGeo, carpetMat);
    carpet.rotation.x = -Math.PI / 2;
    carpet.position.y = 0.008;
    carpet.receiveShadow = true;
    this.group.add(carpet);

    // Carpet border — glowing accent lines
    const borderMat = new THREE.MeshStandardMaterial({
      color: 0x4466aa,
      emissive: new THREE.Color(0x2244aa),
      emissiveIntensity: 0.4,
      transparent: true,
      opacity: 0.5,
    });
    const hw = 14;
    const thickness = 0.08;
    const sides = [
      { x: 0, z: -hw, sx: hw * 2, sz: thickness },
      { x: 0, z: hw, sx: hw * 2, sz: thickness },
      { x: -hw, z: 0, sx: thickness, sz: hw * 2 },
      { x: hw, z: 0, sx: thickness, sz: hw * 2 },
    ];
    for (const s of sides) {
      const geo = new THREE.PlaneGeometry(s.sx, s.sz);
      const m = new THREE.Mesh(geo, borderMat);
      m.rotation.x = -Math.PI / 2;
      m.position.set(s.x, 0.015, s.z);
      this.group.add(m);
    }
  }

  _buildAmbientProps() {
    const metalMat = new THREE.MeshStandardMaterial({
      color: 0x555566, roughness: 0.2, metalness: 0.8,
    });

    // Corner columns — floor to ceiling, with emissive strips
    const pillarHeight = 12;
    const pillarGeo = new THREE.CylinderGeometry(0.18, 0.22, pillarHeight, 12);
    const pillars = [[-13, 0, -13], [13, 0, -13], [-13, 0, 13], [13, 0, 13]];
    for (const [px, , pz] of pillars) {
      const pillar = new THREE.Mesh(pillarGeo, metalMat);
      pillar.position.set(px, pillarHeight / 2, pz);
      pillar.castShadow = true;
      this.group.add(pillar);

      // Emissive strip running full height
      const stripGeo = new THREE.BoxGeometry(0.04, pillarHeight - 0.5, 0.04);
      const stripMat = new THREE.MeshStandardMaterial({
        color: 0x3366ff,
        emissive: new THREE.Color(0x2255ee),
        emissiveIntensity: 0.8,
      });
      const strip = new THREE.Mesh(stripGeo, stripMat);
      strip.position.set(px, pillarHeight / 2, pz + 0.2);
      this.group.add(strip);

      // Pillar top light
      const glow = new THREE.PointLight(0x4466cc, 0.4, 14);
      glow.position.set(px, pillarHeight + 0.2, pz);
      this.group.add(glow);
    }

    // Potted plants — better shape
    const potMat = new THREE.MeshStandardMaterial({ color: 0x2a2520, roughness: 0.8 });
    const leafMat = new THREE.MeshStandardMaterial({
      color: 0x2d6b3a, roughness: 0.6,
      emissive: new THREE.Color(0x0a1a0a),
      emissiveIntensity: 0.2,
    });
    const plantPositions = [
      [-16, 0, -16], [16, 0, 16], [-16, 0, 10], [10, 0, -16],
      [0, 0, -18], [-18, 0, 0],
    ];
    for (const [px, , pz] of plantPositions) {
      // Pot — tapered with rim
      const potGeo = new THREE.CylinderGeometry(0.28, 0.2, 0.5, 8);
      const pot = new THREE.Mesh(potGeo, potMat);
      pot.position.set(px, 0.25, pz);
      pot.castShadow = true;
      this.group.add(pot);

      // Pot rim
      const rimGeo = new THREE.TorusGeometry(0.28, 0.025, 6, 12);
      const rim = new THREE.Mesh(rimGeo, potMat);
      rim.position.set(px, 0.5, pz);
      rim.rotation.x = Math.PI / 2;
      this.group.add(rim);

      // Foliage — layered sphere cluster
      const foliageCount = 4 + Math.floor(Math.random() * 3);
      for (let i = 0; i < foliageCount; i++) {
        const size = 0.15 + Math.random() * 0.2;
        const leafGeo = new THREE.SphereGeometry(size, 8, 6);
        const leaf = new THREE.Mesh(leafGeo, leafMat);
        leaf.position.set(
          px + (Math.random() - 0.5) * 0.3,
          0.55 + Math.random() * 0.45,
          pz + (Math.random() - 0.5) * 0.3
        );
        leaf.scale.set(1, 0.8 + Math.random() * 0.4, 1);
        leaf.castShadow = true;
        this.group.add(leaf);
      }
    }

    // Water cooler — more detailed
    const coolerMat = new THREE.MeshStandardMaterial({ color: 0xbbbbcc, roughness: 0.2, metalness: 0.5 });
    const coolerBody = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.8, 10), coolerMat);
    coolerBody.position.set(18, 0.9, -5);
    coolerBody.castShadow = true;
    this.group.add(coolerBody);

    // Water jug (translucent blue)
    const jugMat = new THREE.MeshStandardMaterial({
      color: 0x88ccee, roughness: 0.05, metalness: 0.1,
      transparent: true, opacity: 0.5,
    });
    const jug = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.2, 0.4, 10), jugMat);
    jug.position.set(18, 1.5, -5);
    this.group.add(jug);

    // Whiteboard — with colored markers and notes
    const wbFrameMat = new THREE.MeshStandardMaterial({ color: 0x333344, roughness: 0.4, metalness: 0.4 });
    const wbFrame = new THREE.Mesh(new THREE.BoxGeometry(3.2, 2.2, 0.1), wbFrameMat);
    wbFrame.position.set(-18, 2.2, 0);
    wbFrame.rotation.y = Math.PI / 2;
    wbFrame.castShadow = true;
    this.group.add(wbFrame);

    const wbSurface = new THREE.Mesh(
      new THREE.PlaneGeometry(2.9, 1.9),
      new THREE.MeshStandardMaterial({
        color: 0xf0f0f8, roughness: 0.95, metalness: 0.0,
        emissive: new THREE.Color(0xf0f0f8),
        emissiveIntensity: 0.05,
      })
    );
    wbSurface.position.set(-17.94, 2.2, 0);
    wbSurface.rotation.y = Math.PI / 2;
    this.group.add(wbSurface);

    // Whiteboard "sticky notes" — small colored rectangles
    const noteColors = [0xffdd44, 0xff6688, 0x44ddff, 0x88ff66];
    for (let i = 0; i < 6; i++) {
      const noteGeo = new THREE.PlaneGeometry(0.3, 0.25);
      const noteMat = new THREE.MeshStandardMaterial({
        color: noteColors[Math.floor(Math.random() * noteColors.length)],
        roughness: 0.9,
        side: THREE.DoubleSide,
      });
      const note = new THREE.Mesh(noteGeo, noteMat);
      note.position.set(
        -17.92,
        2.0 + (Math.random() - 0.5) * 1.2,
        (Math.random() - 0.5) * 2.0
      );
      note.rotation.y = Math.PI / 2;
      note.rotation.z = (Math.random() - 0.5) * 0.2;
      this.group.add(note);
    }

    // Standing desk / monitor stand at edge
    this._buildStandingDesk(16, 0, 5);
    this._buildStandingDesk(-16, 0, -8);

    // Bean bag chairs
    this._buildBeanBag(15, 0, -12, 0xff6644);
    this._buildBeanBag(-15, 0, 12, 0x4488ff);
  }

  _buildStandingDesk(x, y, z) {
    const frameMat = new THREE.MeshStandardMaterial({ color: 0x444450, metalness: 0.6, roughness: 0.25 });
    const topMat = new THREE.MeshStandardMaterial({ color: 0x6a5232, roughness: 0.4, metalness: 0.05 });

    // Desk top
    const top = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.06, 0.8), topMat);
    top.position.set(x, 1.1, z);
    top.castShadow = true;
    this.group.add(top);

    // Legs
    const legGeo = new THREE.CylinderGeometry(0.03, 0.03, 1.1, 6);
    for (const [lx, lz] of [[-0.8, -0.35], [0.8, -0.35], [-0.8, 0.35], [0.8, 0.35]]) {
      const leg = new THREE.Mesh(legGeo, frameMat);
      leg.position.set(x + lx, 0.55, z + lz);
      this.group.add(leg);
    }

    // Monitor on stand
    const monitorFrame = new THREE.Mesh(
      new THREE.BoxGeometry(0.8, 0.5, 0.03),
      new THREE.MeshStandardMaterial({ color: 0x222230, roughness: 0.3, metalness: 0.5 })
    );
    monitorFrame.position.set(x, 1.55, z - 0.2);
    this.group.add(monitorFrame);

    const screen = new THREE.Mesh(
      new THREE.PlaneGeometry(0.72, 0.42),
      new THREE.MeshStandardMaterial({
        color: 0x0a1525,
        emissive: new THREE.Color(0x112244),
        emissiveIntensity: 0.6,
        roughness: 0.1,
      })
    );
    screen.position.set(x, 1.55, z - 0.183);
    this.group.add(screen);

    // Stand pole
    const pole = new THREE.Mesh(
      new THREE.CylinderGeometry(0.02, 0.02, 0.3, 6),
      new THREE.MeshStandardMaterial({ color: 0x444450, metalness: 0.7, roughness: 0.2 })
    );
    pole.position.set(x, 1.28, z - 0.2);
    this.group.add(pole);
  }

  _buildBeanBag(x, y, z, color) {
    const mat = new THREE.MeshStandardMaterial({
      color, roughness: 0.85, metalness: 0.0,
    });
    // Main body — squished sphere
    const bodyGeo = new THREE.SphereGeometry(0.45, 12, 10);
    const body = new THREE.Mesh(bodyGeo, mat);
    body.position.set(x, 0.3, z);
    body.scale.set(1.0, 0.6, 1.1);
    body.castShadow = true;
    this.group.add(body);

    // Backrest bump
    const backGeo = new THREE.SphereGeometry(0.3, 10, 8);
    const back = new THREE.Mesh(backGeo, mat);
    back.position.set(x, 0.45, z + 0.25);
    back.scale.set(0.9, 0.8, 0.6);
    this.group.add(back);
  }

  _buildCeilingStructure() {
    // Exposed ceiling beams — industrial loft office, high ceiling
    const ceilingY = 12; // High ceiling so it doesn't feel cramped
    const beamMat = new THREE.MeshStandardMaterial({
      color: 0x2a2a35, roughness: 0.5, metalness: 0.4,
    });

    // Main cross beams — wide spacing
    const beamGeo = new THREE.BoxGeometry(34, 0.2, 0.35);
    for (const z of [-10, 0, 10]) {
      const beam = new THREE.Mesh(beamGeo, beamMat);
      beam.position.set(0, ceilingY, z);
      this.group.add(beam);
    }

    // Perpendicular beams
    const beamGeo2 = new THREE.BoxGeometry(0.35, 0.2, 34);
    for (const x of [-10, 0, 10]) {
      const beam = new THREE.Mesh(beamGeo2, beamMat);
      beam.position.set(x, ceilingY, 0);
      this.group.add(beam);
    }

    // Hanging pendant lights on long wires from beams
    const wireLength = 5;
    const pendantY = ceilingY - wireLength;
    const pendantPositions = [
      [-7, 0, -7], [7, 0, -7], [-7, 0, 7], [7, 0, 7], [0, 0, 0],
    ];
    for (const [px, , pz] of pendantPositions) {
      // Wire
      const wire = new THREE.Mesh(
        new THREE.CylinderGeometry(0.005, 0.005, wireLength, 4),
        beamMat
      );
      wire.position.set(px, ceilingY - wireLength / 2, pz);
      this.group.add(wire);

      // Shade
      const shadeMat = new THREE.MeshStandardMaterial({
        color: 0x222230, roughness: 0.3, metalness: 0.5, side: THREE.DoubleSide,
      });
      const shade = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.45, 0.3, 12, 1, true),
        shadeMat
      );
      shade.position.set(px, pendantY - 0.15, pz);
      this.group.add(shade);

      // Bulb glow
      const bulb = new THREE.Mesh(
        new THREE.SphereGeometry(0.07, 8, 6),
        new THREE.MeshStandardMaterial({
          color: 0xffeecc,
          emissive: new THREE.Color(0xffddaa),
          emissiveIntensity: 1.5,
        })
      );
      bulb.position.set(px, pendantY - 0.05, pz);
      this.group.add(bulb);

      // Point light — stronger since it's higher up
      const light = new THREE.PointLight(0xffeedd, 0.5, 16);
      light.position.set(px, pendantY, pz);
      this.group.add(light);
    }
  }

  _buildNeonAccents() {
    // Neon strip lights along the carpet border — startup aesthetic
    const neonMat = new THREE.MeshStandardMaterial({
      color: 0x3366ff,
      emissive: new THREE.Color(0x2255ff),
      emissiveIntensity: 1.2,
      transparent: true,
      opacity: 0.8,
    });

    // Floor-level neon strips at carpet corners
    const cornerSize = 3;
    const hw = 14;
    const corners = [
      // Bottom-left corner
      { x: -hw, z: -hw, dx: cornerSize, dz: 0 },
      { x: -hw, z: -hw, dx: 0, dz: cornerSize },
      // Bottom-right
      { x: hw, z: -hw, dx: -cornerSize, dz: 0 },
      { x: hw, z: -hw, dx: 0, dz: cornerSize },
      // Top-left
      { x: -hw, z: hw, dx: cornerSize, dz: 0 },
      { x: -hw, z: hw, dx: 0, dz: -cornerSize },
      // Top-right
      { x: hw, z: hw, dx: -cornerSize, dz: 0 },
      { x: hw, z: hw, dx: 0, dz: -cornerSize },
    ];

    for (const c of corners) {
      const len = Math.abs(c.dx || c.dz);
      const isX = c.dx !== 0;
      const geo = new THREE.BoxGeometry(
        isX ? len : 0.04,
        0.03,
        isX ? 0.04 : len
      );
      const strip = new THREE.Mesh(geo, neonMat);
      strip.position.set(
        c.x + (c.dx / 2),
        0.02,
        c.z + (c.dz / 2)
      );
      this.group.add(strip);
    }

    // Central logo area — glowing circle under the market board
    const logoGeo = new THREE.RingGeometry(1.0, 1.1, 32);
    const logoMat = new THREE.MeshStandardMaterial({
      color: 0x4488ff,
      emissive: new THREE.Color(0x3366ff),
      emissiveIntensity: 0.8,
      transparent: true,
      opacity: 0.6,
      side: THREE.DoubleSide,
    });
    const logo = new THREE.Mesh(logoGeo, logoMat);
    logo.rotation.x = -Math.PI / 2;
    logo.position.set(0, 0.02, -8);
    this.group.add(logo);

    // Inner filled circle — darker
    const innerGeo = new THREE.CircleGeometry(1.0, 32);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x111122,
      emissive: new THREE.Color(0x112244),
      emissiveIntensity: 0.3,
      transparent: true,
      opacity: 0.4,
    });
    const inner = new THREE.Mesh(innerGeo, innerMat);
    inner.rotation.x = -Math.PI / 2;
    inner.position.set(0, 0.018, -8);
    this.group.add(inner);
  }

  async _loadGLBProps() {
    // Load Kenney CC0 GLB models as ambient office props.
    // These are placed around the perimeter to fill out the space.
    // All loads are fire-and-forget — if a model fails, the scene
    // still works with the procedural fallbacks already in place.

    const placements = [
      // Bookcases along back wall
      { model: 'models/bookcaseOpen.glb', pos: [-17, 0, -6], rot: Math.PI / 2, scale: 2.0 },
      { model: 'models/bookcaseOpen.glb', pos: [-17, 0, 6], rot: Math.PI / 2, scale: 2.0 },
      // Coffee table areas with lounge chairs
      { model: 'models/tableCoffeeGlass.glb', pos: [17, 0, 0], rot: 0, scale: 2.0 },
      { model: 'models/loungeDesignChair.glb', pos: [17, 0, -2], rot: Math.PI, scale: 2.0 },
      { model: 'models/loungeDesignChair.glb', pos: [17, 0, 2], rot: 0, scale: 2.0 },
      // Plants scattered around
      { model: 'models/pottedPlant.glb', pos: [14, 0, -14], rot: 0, scale: 2.5 },
      { model: 'models/pottedPlant.glb', pos: [-14, 0, 14], rot: 1.2, scale: 2.5 },
      { model: 'models/plantSmall1.glb', pos: [18, 0, 8], rot: 0.5, scale: 2.0 },
      { model: 'models/plantSmall1.glb', pos: [-18, 0, -12], rot: 2.1, scale: 2.0 },
      // Desk lamp on standing desk
      { model: 'models/lampRoundTable.glb', pos: [16.5, 1.12, 5.2], rot: 0, scale: 1.5 },
      { model: 'models/lampRoundTable.glb', pos: [-15.5, 1.12, -7.8], rot: 0, scale: 1.5 },
      // Books stacked
      { model: 'models/books.glb', pos: [-17, 2.2, -6], rot: 0.3, scale: 1.8 },
      { model: 'models/books.glb', pos: [-17, 1.2, 6], rot: -0.4, scale: 1.8 },
      // Round rug in lounge area
      { model: 'models/rugRound.glb', pos: [17, 0.01, 0], rot: 0, scale: 3.0 },
      // Coffee machine near water cooler
      { model: 'models/coffeeMachine.glb', pos: [18, 0.5, -3], rot: Math.PI, scale: 2.0 },
    ];

    for (const p of placements) {
      this._placeModel(p.model, p.pos, p.rot, p.scale);
    }
  }

  async _placeModel(path, [x, y, z], rotY, scale) {
    try {
      const model = await AssetLoader.loadModel(path);
      model.position.set(x, y, z);
      model.rotation.y = rotY;
      model.scale.setScalar(scale);
      model.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      this.group.add(model);
    } catch {
      // Silently skip — procedural fallbacks are already in the scene
    }
  }
}
