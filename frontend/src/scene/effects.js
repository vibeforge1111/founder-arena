import * as THREE from 'three';

export class ParticleEffect {
  constructor(scene) {
    this.scene = scene;
    this._systems = [];
  }

  spawnFundraiseEffect(position) {
    const count = 40;
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const velocities = [];

    const goldColors = [
      new THREE.Color(0xF0B429),
      new THREE.Color(0xFFD700),
      new THREE.Color(0xFFA500),
      new THREE.Color(0xFFE066),
    ];

    for (let i = 0; i < count; i++) {
      positions[i * 3] = position.x + (Math.random() - 0.5) * 2;
      positions[i * 3 + 1] = position.y + 3 + Math.random() * 2.5;
      positions[i * 3 + 2] = position.z + (Math.random() - 0.5) * 2;

      const c = goldColors[Math.floor(Math.random() * goldColors.length)];
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;

      velocities.push({
        x: (Math.random() - 0.5) * 0.03,
        y: -0.015 - Math.random() * 0.025,
        z: (Math.random() - 0.5) * 0.03,
      });
    }

    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const mat = new THREE.PointsMaterial({
      size: 0.18,
      transparent: true,
      opacity: 1.0,
      vertexColors: true,
      sizeAttenuation: true,
    });

    const points = new THREE.Points(geo, mat);
    this.scene.add(points);

    this._systems.push({
      points,
      velocities,
      life: 2.5,
      maxLife: 2.5,
    });
  }

  spawnGrowthEffect(position) {
    const count = 25;
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const velocities = [];

    const greenColors = [
      new THREE.Color(0x22C55E),
      new THREE.Color(0x4ADE80),
      new THREE.Color(0x10B981),
      new THREE.Color(0x86EFAC),
    ];

    for (let i = 0; i < count; i++) {
      positions[i * 3] = position.x + (Math.random() - 0.5) * 0.5;
      positions[i * 3 + 1] = position.y + 1;
      positions[i * 3 + 2] = position.z + (Math.random() - 0.5) * 0.5;

      const c = greenColors[Math.floor(Math.random() * greenColors.length)];
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;

      velocities.push({
        x: (Math.random() - 0.5) * 0.05,
        y: 0.04 + Math.random() * 0.04,
        z: (Math.random() - 0.5) * 0.05,
      });
    }

    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const mat = new THREE.PointsMaterial({
      color: 0x22C55E,
      size: 0.12,
      transparent: true,
      opacity: 1.0,
      vertexColors: true,
      sizeAttenuation: true,
    });

    const points = new THREE.Points(geo, mat);
    this.scene.add(points);

    this._systems.push({
      points,
      velocities,
      life: 2.0,
      maxLife: 2.0,
    });
  }

  update(dt) {
    for (let i = this._systems.length - 1; i >= 0; i--) {
      const sys = this._systems[i];
      sys.life -= dt;

      if (sys.life <= 0) {
        this.scene.remove(sys.points);
        sys.points.geometry.dispose();
        sys.points.material.dispose();
        this._systems.splice(i, 1);
        continue;
      }

      const posAttr = sys.points.geometry.getAttribute('position');
      for (let j = 0; j < sys.velocities.length; j++) {
        posAttr.array[j * 3] += sys.velocities[j].x;
        posAttr.array[j * 3 + 1] += sys.velocities[j].y;
        posAttr.array[j * 3 + 2] += sys.velocities[j].z;

        // Slight gravity for fundraise (downward), lift for growth
        sys.velocities[j].y *= 0.995;
      }
      posAttr.needsUpdate = true;

      // Smooth fade out
      const lifeRatio = sys.life / sys.maxLife;
      sys.points.material.opacity = lifeRatio * lifeRatio;
      sys.points.material.size = (0.1 + lifeRatio * 0.1);
    }
  }
}
