import * as THREE from 'three';

export class OfficeFloor {
  constructor() {
    this.group = new THREE.Group();
    this._buildFloor();
    this._buildGrid();
    this._buildCarpetZone();
    this._buildAmbientProps();
  }

  _buildFloor() {
    // Main floor - polished concrete look with subtle reflection
    const geo = new THREE.PlaneGeometry(80, 80, 1, 1);
    const mat = new THREE.MeshStandardMaterial({
      color: 0x2a2a38,
      roughness: 0.55,
      metalness: 0.25,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.rotation.x = -Math.PI / 2;
    mesh.receiveShadow = true;
    this.group.add(mesh);

    // Subtle reflective overlay for polished floor feel
    const reflGeo = new THREE.PlaneGeometry(80, 80, 1, 1);
    const reflMat = new THREE.MeshStandardMaterial({
      color: 0x2a2a3a,
      roughness: 0.3,
      metalness: 0.5,
      transparent: true,
      opacity: 0.08,
    });
    const refl = new THREE.Mesh(reflGeo, reflMat);
    refl.rotation.x = -Math.PI / 2;
    refl.position.y = 0.005;
    this.group.add(refl);
  }

  _buildGrid() {
    // Subtle hexagonal-feel grid
    const gridHelper = new THREE.GridHelper(60, 40, 0x2a2a40, 0x1a1a2a);
    gridHelper.position.y = 0.01;
    gridHelper.material.opacity = 0.25;
    gridHelper.material.transparent = true;
    this.group.add(gridHelper);

    // Inner accent ring
    const ringGeo = new THREE.RingGeometry(14, 14.08, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x334466,
      transparent: true,
      opacity: 0.2,
      side: THREE.DoubleSide,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.02;
    this.group.add(ring);
  }

  _buildCarpetZone() {
    // Central carpet area where pods sit - warmer tone
    const carpetGeo = new THREE.PlaneGeometry(28, 28, 1, 1);
    const carpetMat = new THREE.MeshStandardMaterial({
      color: 0x282840,
      roughness: 0.9,
      metalness: 0.02,
    });
    const carpet = new THREE.Mesh(carpetGeo, carpetMat);
    carpet.rotation.x = -Math.PI / 2;
    carpet.position.y = 0.008;
    carpet.receiveShadow = true;
    this.group.add(carpet);

    // Carpet border lines
    const borderMat = new THREE.MeshBasicMaterial({
      color: 0x3a3a55,
      transparent: true,
      opacity: 0.3,
    });
    const hw = 14;
    const thickness = 0.06;
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
      color: 0x555566, roughness: 0.3, metalness: 0.7,
    });

    // Corner columns (4 pillars at carpet edges)
    const pillarGeo = new THREE.CylinderGeometry(0.2, 0.25, 3.5, 8);
    const pillars = [[-13, 0, -13], [13, 0, -13], [-13, 0, 13], [13, 0, 13]];
    for (const [px, , pz] of pillars) {
      const pillar = new THREE.Mesh(pillarGeo, metalMat);
      pillar.position.set(px, 1.75, pz);
      pillar.castShadow = true;
      this.group.add(pillar);

      // Pillar top light
      const glow = new THREE.PointLight(0x4466aa, 0.3, 10);
      glow.position.set(px, 3.8, pz);
      this.group.add(glow);
    }

    // Scattered small props - potted plants
    const potMat = new THREE.MeshStandardMaterial({ color: 0x3a3025, roughness: 0.8 });
    const leafMat = new THREE.MeshStandardMaterial({ color: 0x2d5a3a, roughness: 0.7 });
    const plantPositions = [
      [-16, 0, -16], [16, 0, 16], [-16, 0, 10], [10, 0, -16],
      [0, 0, -18], [-18, 0, 0],
    ];
    for (const [px, , pz] of plantPositions) {
      // Pot
      const potGeo = new THREE.CylinderGeometry(0.3, 0.25, 0.5, 6);
      const pot = new THREE.Mesh(potGeo, potMat);
      pot.position.set(px, 0.25, pz);
      pot.castShadow = true;
      this.group.add(pot);

      // Leaves (cluster of spheres)
      for (let i = 0; i < 3; i++) {
        const leafGeo = new THREE.SphereGeometry(0.2 + Math.random() * 0.15, 6, 5);
        const leaf = new THREE.Mesh(leafGeo, leafMat);
        leaf.position.set(
          px + (Math.random() - 0.5) * 0.25,
          0.6 + Math.random() * 0.3,
          pz + (Math.random() - 0.5) * 0.25
        );
        leaf.castShadow = true;
        this.group.add(leaf);
      }
    }

    // Water cooler
    const coolerBody = new THREE.CylinderGeometry(0.2, 0.2, 0.8, 8);
    const coolerMat = new THREE.MeshStandardMaterial({ color: 0xccccdd, roughness: 0.3, metalness: 0.4 });
    const cooler = new THREE.Mesh(coolerBody, coolerMat);
    cooler.position.set(18, 0.9, -5);
    cooler.castShadow = true;
    this.group.add(cooler);
    const jug = new THREE.Mesh(
      new THREE.CylinderGeometry(0.18, 0.2, 0.4, 8),
      new THREE.MeshStandardMaterial({ color: 0x88bbdd, roughness: 0.1, metalness: 0.2, transparent: true, opacity: 0.6 })
    );
    jug.position.set(18, 1.5, -5);
    this.group.add(jug);

    // Whiteboard on invisible wall
    const wbFrame = new THREE.Mesh(
      new THREE.BoxGeometry(3, 2, 0.08),
      new THREE.MeshStandardMaterial({ color: 0x444455, roughness: 0.5, metalness: 0.3 })
    );
    wbFrame.position.set(-18, 2.2, 0);
    wbFrame.rotation.y = Math.PI / 2;
    wbFrame.castShadow = true;
    this.group.add(wbFrame);
    const wbSurface = new THREE.Mesh(
      new THREE.PlaneGeometry(2.8, 1.8),
      new THREE.MeshStandardMaterial({ color: 0xeeeef4, roughness: 0.95, metalness: 0.0 })
    );
    wbSurface.position.set(-17.95, 2.2, 0);
    wbSurface.rotation.y = Math.PI / 2;
    this.group.add(wbSurface);
  }
}
