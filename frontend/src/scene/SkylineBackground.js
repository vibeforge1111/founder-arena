import * as THREE from 'three';

export class SkylineBackground {
  constructor() {
    this.group = new THREE.Group();
    this._buildSkyline();
    this._buildStars();
    this._buildGroundFog();
    this._buildStreetLights();
  }

  _buildSkyline() {
    const rng = (min, max) => min + Math.random() * (max - min);

    // Two rings of buildings for depth
    this._buildBuildingRing(32, 30, 0.7);
    this._buildBuildingRing(42, 20, 0.4);
  }

  _buildBuildingRing(radius, count, opacityBase) {
    const rng = (min, max) => min + Math.random() * (max - min);

    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2 + rng(-0.1, 0.1);
      const dist = radius + rng(-4, 4);
      const x = Math.cos(angle) * dist;
      const z = Math.sin(angle) * dist;

      const width = rng(2.5, 6);
      const depth = rng(2, 5);
      const height = rng(5, 25);

      // Building body
      const buildingMat = new THREE.MeshStandardMaterial({
        color: new THREE.Color().setHSL(0.62, 0.08, rng(0.04, 0.08)),
        roughness: 0.75,
        metalness: 0.35,
        transparent: true,
        opacity: opacityBase,
      });

      const geo = new THREE.BoxGeometry(width, height, depth);
      const building = new THREE.Mesh(geo, buildingMat);
      building.position.set(x, height / 2, z);
      building.rotation.y = angle + rng(-0.3, 0.3);
      this.group.add(building);

      // Rooftop detail
      if (Math.random() > 0.4) {
        const roofGeo = new THREE.BoxGeometry(width * 0.4, rng(0.5, 2), depth * 0.4);
        const roofMat = new THREE.MeshStandardMaterial({
          color: 0x0a0a12, roughness: 0.6, metalness: 0.5,
          transparent: true, opacity: opacityBase,
        });
        const roof = new THREE.Mesh(roofGeo, roofMat);
        roof.position.set(x, height + rng(0.3, 1), z);
        this.group.add(roof);
      }

      // Antenna on tall buildings
      if (height > 18 && Math.random() > 0.5) {
        const antennaGeo = new THREE.CylinderGeometry(0.03, 0.03, rng(2, 4), 4);
        const antennaMat = new THREE.MeshStandardMaterial({ color: 0x555566, metalness: 0.8 });
        const antenna = new THREE.Mesh(antennaGeo, antennaMat);
        antenna.position.set(x, height + rng(1, 2), z);
        this.group.add(antenna);

        // Blinking light
        const blink = new THREE.PointLight(0xff3333, 0.3, 8);
        blink.position.set(x, height + rng(2, 4), z);
        this.group.add(blink);
      }

      // Windows - varied colors for life
      const windowColors = [0x112244, 0x182848, 0x1a3050, 0x223355, 0x2a1a30];
      const windowCount = Math.floor(height / 1.8);
      for (let w = 0; w < windowCount; w++) {
        if (Math.random() > 0.55) continue;

        const wColor = windowColors[Math.floor(Math.random() * windowColors.length)];
        const isLit = Math.random() > 0.3;
        const wMat = new THREE.MeshStandardMaterial({
          color: wColor,
          emissive: new THREE.Color(isLit ? wColor : 0x050508),
          emissiveIntensity: isLit ? rng(0.2, 0.6) : 0.05,
          roughness: 0.15,
          transparent: true,
          opacity: opacityBase + 0.1,
        });

        // Window rows (multiple windows per floor)
        const windowsPerFloor = Math.floor(width / 1.2);
        for (let wx = 0; wx < windowsPerFloor; wx++) {
          if (Math.random() > 0.7) continue;
          const wGeo = new THREE.PlaneGeometry(0.5, 0.6);
          const wMesh = new THREE.Mesh(wGeo, wMat);
          const wy = (w + 0.5) * 1.8;
          const wxOffset = (wx - (windowsPerFloor - 1) / 2) * 1.1;

          // Place on front face
          wMesh.position.set(
            x + Math.cos(angle) * (depth / 2 + 0.02) + Math.sin(angle) * wxOffset * 0.3,
            wy,
            z + Math.sin(angle) * (depth / 2 + 0.02) - Math.cos(angle) * wxOffset * 0.3,
          );
          wMesh.lookAt(0, wy, 0);
          this.group.add(wMesh);
        }
      }
    }
  }

  _buildStars() {
    // Starfield dome
    const count = 300;
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      // Hemisphere distribution
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI * 0.45; // upper hemisphere only
      const r = 80 + Math.random() * 20;

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.cos(phi) + 10;
      positions[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
      sizes[i] = 0.1 + Math.random() * 0.2;
    }

    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const starMat = new THREE.PointsMaterial({
      color: 0xccccee,
      size: 0.15,
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true,
    });

    const stars = new THREE.Points(starGeo, starMat);
    this.group.add(stars);
  }

  _buildGroundFog() {
    // Low-lying fog ring around the office area
    const fogGeo = new THREE.RingGeometry(18, 50, 64, 1);
    const fogMat = new THREE.MeshBasicMaterial({
      color: 0x0d0d1a,
      transparent: true,
      opacity: 0.35,
      side: THREE.DoubleSide,
    });
    const fog = new THREE.Mesh(fogGeo, fogMat);
    fog.rotation.x = -Math.PI / 2;
    fog.position.y = 0.03;
    this.group.add(fog);

    // Inner haze
    const hazeGeo = new THREE.RingGeometry(15, 22, 48, 1);
    const hazeMat = new THREE.MeshBasicMaterial({
      color: 0x151525,
      transparent: true,
      opacity: 0.15,
      side: THREE.DoubleSide,
    });
    const haze = new THREE.Mesh(hazeGeo, hazeMat);
    haze.rotation.x = -Math.PI / 2;
    haze.position.y = 0.5;
    this.group.add(haze);
  }

  _buildStreetLights() {
    const lightMat = new THREE.MeshStandardMaterial({ color: 0x444455, metalness: 0.7, roughness: 0.3 });

    // Street lights around the perimeter
    const count = 12;
    const radius = 22;
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;

      // Pole
      const pole = new THREE.Mesh(
        new THREE.CylinderGeometry(0.04, 0.05, 3.5, 6),
        lightMat
      );
      pole.position.set(x, 1.75, z);
      this.group.add(pole);

      // Arm
      const arm = new THREE.Mesh(
        new THREE.BoxGeometry(0.6, 0.03, 0.03),
        lightMat
      );
      arm.position.set(x - Math.cos(angle) * 0.3, 3.5, z - Math.sin(angle) * 0.3);
      this.group.add(arm);

      // Light fixture
      const fixture = new THREE.Mesh(
        new THREE.CylinderGeometry(0.08, 0.12, 0.06, 6),
        new THREE.MeshStandardMaterial({
          color: 0xffeecc,
          emissive: new THREE.Color(0xffddaa),
          emissiveIntensity: 0.6,
        })
      );
      fixture.position.set(x - Math.cos(angle) * 0.6, 3.48, z - Math.sin(angle) * 0.6);
      this.group.add(fixture);

      // Actual light
      const light = new THREE.PointLight(0xffddaa, 0.3, 8);
      light.position.set(x - Math.cos(angle) * 0.6, 3.4, z - Math.sin(angle) * 0.6);
      this.group.add(light);
    }
  }
}
