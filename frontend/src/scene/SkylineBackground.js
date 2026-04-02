import * as THREE from 'three';

export class SkylineBackground {
  constructor() {
    this.group = new THREE.Group();
    this._buildSkyDome();
    this._buildSkyline();
    this._buildStars();
    this._buildGroundFog();
    this._buildStreetLights();
  }

  _buildSkyDome() {
    // Gradient sky dome — dark blue to purple horizon
    const skyGeo = new THREE.SphereGeometry(90, 32, 16);
    const skyMat = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      uniforms: {
        topColor: { value: new THREE.Color(0x050510) },
        bottomColor: { value: new THREE.Color(0x1a1035) },
        offset: { value: 10 },
        exponent: { value: 0.5 },
      },
      vertexShader: `
        varying vec3 vWorldPosition;
        void main() {
          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPos.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 topColor;
        uniform vec3 bottomColor;
        uniform float offset;
        uniform float exponent;
        varying vec3 vWorldPosition;
        void main() {
          float h = normalize(vWorldPosition + offset).y;
          gl_FragColor = vec4(mix(bottomColor, topColor, max(pow(max(h, 0.0), exponent), 0.0)), 1.0);
        }
      `,
    });
    const sky = new THREE.Mesh(skyGeo, skyMat);
    this.group.add(sky);
  }

  _buildSkyline() {
    const rng = (min, max) => min + Math.random() * (max - min);

    // Two rings of buildings for depth
    this._buildBuildingRing(32, 30, 0.75);
    this._buildBuildingRing(44, 22, 0.35);
  }

  _buildBuildingRing(radius, count, opacityBase) {
    const rng = (min, max) => min + Math.random() * (max - min);

    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2 + rng(-0.1, 0.1);
      const dist = radius + rng(-4, 4);
      const x = Math.cos(angle) * dist;
      const z = Math.sin(angle) * dist;

      const width = rng(2.5, 6.5);
      const depth = rng(2, 5);
      const height = rng(6, 28);

      // Building body — darker, more imposing
      const hue = rng(0.58, 0.68);
      const buildingMat = new THREE.MeshStandardMaterial({
        color: new THREE.Color().setHSL(hue, 0.1, rng(0.03, 0.07)),
        roughness: 0.7,
        metalness: 0.4,
        transparent: true,
        opacity: opacityBase,
      });

      const geo = new THREE.BoxGeometry(width, height, depth);
      const building = new THREE.Mesh(geo, buildingMat);
      building.position.set(x, height / 2, z);
      building.rotation.y = angle + rng(-0.3, 0.3);
      this.group.add(building);

      // Rooftop structure
      if (Math.random() > 0.35) {
        const roofGeo = new THREE.BoxGeometry(width * 0.35, rng(0.5, 2.5), depth * 0.35);
        const roofMat = new THREE.MeshStandardMaterial({
          color: 0x080812, roughness: 0.5, metalness: 0.5,
          transparent: true, opacity: opacityBase,
        });
        const roof = new THREE.Mesh(roofGeo, roofMat);
        roof.position.set(x, height + rng(0.3, 1.2), z);
        this.group.add(roof);
      }

      // Antenna on tall buildings with blinking light
      if (height > 20 && Math.random() > 0.4) {
        const antennaGeo = new THREE.CylinderGeometry(0.025, 0.025, rng(2.5, 5), 4);
        const antennaMat = new THREE.MeshStandardMaterial({ color: 0x555566, metalness: 0.8 });
        const antenna = new THREE.Mesh(antennaGeo, antennaMat);
        antenna.position.set(x, height + rng(1.2, 2.5), z);
        this.group.add(antenna);

        // Red blinking light
        const blink = new THREE.PointLight(0xff2222, 0.4, 10);
        blink.position.set(x, height + rng(2.5, 5), z);
        this.group.add(blink);
      }

      // Windows — varied colors for city life
      const windowColors = [0x112244, 0x1a3055, 0x182848, 0x223355, 0x2a1a30, 0x1a2840];
      const windowCount = Math.floor(height / 1.8);
      for (let w = 0; w < windowCount; w++) {
        if (Math.random() > 0.6) continue;

        const wColor = windowColors[Math.floor(Math.random() * windowColors.length)];
        const isLit = Math.random() > 0.25;
        const wMat = new THREE.MeshStandardMaterial({
          color: wColor,
          emissive: new THREE.Color(isLit ? wColor : 0x040408),
          emissiveIntensity: isLit ? rng(0.3, 0.8) : 0.02,
          roughness: 0.1,
          transparent: true,
          opacity: opacityBase + 0.15,
        });

        const windowsPerFloor = Math.floor(width / 1.1);
        for (let wx = 0; wx < windowsPerFloor; wx++) {
          if (Math.random() > 0.65) continue;
          const wGeo = new THREE.PlaneGeometry(0.45, 0.55);
          const wMesh = new THREE.Mesh(wGeo, wMat);
          const wy = (w + 0.5) * 1.8;
          const wxOffset = (wx - (windowsPerFloor - 1) / 2) * 1.05;

          wMesh.position.set(
            x + Math.cos(angle) * (depth / 2 + 0.02) + Math.sin(angle) * wxOffset * 0.3,
            wy,
            z + Math.sin(angle) * (depth / 2 + 0.02) - Math.cos(angle) * wxOffset * 0.3,
          );
          wMesh.lookAt(0, wy, 0);
          this.group.add(wMesh);
        }
      }

      // Building edge highlight — subtle neon strip on some tall buildings
      if (height > 16 && Math.random() > 0.6) {
        const edgeColor = [0x3366ff, 0xff3366, 0x33ffaa, 0xff8833][Math.floor(Math.random() * 4)];
        const edgeMat = new THREE.MeshStandardMaterial({
          color: edgeColor,
          emissive: new THREE.Color(edgeColor),
          emissiveIntensity: 0.5,
          transparent: true,
          opacity: opacityBase * 0.7,
        });
        const edgeGeo = new THREE.BoxGeometry(width + 0.05, 0.06, 0.06);
        const edge = new THREE.Mesh(edgeGeo, edgeMat);
        edge.position.set(x, height, z - depth / 2);
        edge.rotation.y = angle;
        this.group.add(edge);
      }
    }
  }

  _buildStars() {
    // Starfield dome — more stars, varying brightness
    const count = 500;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI * 0.4;
      const r = 80 + Math.random() * 15;

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.cos(phi) + 12;
      positions[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);

      // Varied star colors: white, blue-white, warm-white
      const temp = Math.random();
      if (temp > 0.8) {
        colors[i * 3] = 0.7; colors[i * 3 + 1] = 0.8; colors[i * 3 + 2] = 1.0;
      } else if (temp > 0.6) {
        colors[i * 3] = 1.0; colors[i * 3 + 1] = 0.95; colors[i * 3 + 2] = 0.8;
      } else {
        colors[i * 3] = 0.9; colors[i * 3 + 1] = 0.9; colors[i * 3 + 2] = 0.95;
      }
    }

    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const starMat = new THREE.PointsMaterial({
      size: 0.18,
      transparent: true,
      opacity: 0.7,
      sizeAttenuation: true,
      vertexColors: true,
    });

    const stars = new THREE.Points(starGeo, starMat);
    this.group.add(stars);
  }

  _buildGroundFog() {
    // Low-lying fog ring — more atmospheric
    const fogGeo = new THREE.RingGeometry(18, 55, 64, 1);
    const fogMat = new THREE.MeshBasicMaterial({
      color: 0x0d0d1a,
      transparent: true,
      opacity: 0.4,
      side: THREE.DoubleSide,
    });
    const fog = new THREE.Mesh(fogGeo, fogMat);
    fog.rotation.x = -Math.PI / 2;
    fog.position.y = 0.03;
    this.group.add(fog);

    // Inner haze with color
    const hazeGeo = new THREE.RingGeometry(15, 24, 48, 1);
    const hazeMat = new THREE.MeshBasicMaterial({
      color: 0x151528,
      transparent: true,
      opacity: 0.2,
      side: THREE.DoubleSide,
    });
    const haze = new THREE.Mesh(hazeGeo, hazeMat);
    haze.rotation.x = -Math.PI / 2;
    haze.position.y = 0.5;
    this.group.add(haze);
  }

  _buildStreetLights() {
    const lightMat = new THREE.MeshStandardMaterial({ color: 0x444455, metalness: 0.7, roughness: 0.25 });

    const count = 14;
    const radius = 22;
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;

      // Pole
      const pole = new THREE.Mesh(
        new THREE.CylinderGeometry(0.035, 0.045, 3.5, 6),
        lightMat
      );
      pole.position.set(x, 1.75, z);
      this.group.add(pole);

      // Curved arm
      const arm = new THREE.Mesh(
        new THREE.BoxGeometry(0.7, 0.025, 0.025),
        lightMat
      );
      arm.position.set(x - Math.cos(angle) * 0.35, 3.5, z - Math.sin(angle) * 0.35);
      this.group.add(arm);

      // Light fixture — warm glow
      const fixtureMat = new THREE.MeshStandardMaterial({
        color: 0xffeecc,
        emissive: new THREE.Color(0xffddaa),
        emissiveIntensity: 0.9,
      });
      const fixture = new THREE.Mesh(
        new THREE.CylinderGeometry(0.07, 0.11, 0.05, 8),
        fixtureMat
      );
      fixture.position.set(x - Math.cos(angle) * 0.65, 3.48, z - Math.sin(angle) * 0.65);
      this.group.add(fixture);

      // Light source
      const light = new THREE.PointLight(0xffddaa, 0.35, 10);
      light.position.set(x - Math.cos(angle) * 0.65, 3.4, z - Math.sin(angle) * 0.65);
      this.group.add(light);
    }
  }
}
