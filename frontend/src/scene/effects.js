import * as THREE from 'three';

export class ParticleEffect {
  constructor(scene) {
    this.scene = scene;
    this._systems = [];
  }

  spawnFundraiseEffect(position) {
    const count = 30;
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const velocities = [];

    for (let i = 0; i < count; i++) {
      positions[i * 3] = position.x + (Math.random() - 0.5) * 2;
      positions[i * 3 + 1] = position.y + 3 + Math.random() * 2;
      positions[i * 3 + 2] = position.z + (Math.random() - 0.5) * 2;
      velocities.push({
        x: (Math.random() - 0.5) * 0.02,
        y: -0.02 - Math.random() * 0.02,
        z: (Math.random() - 0.5) * 0.02,
      });
    }

    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const mat = new THREE.PointsMaterial({
      color: 0xF0B429,
      size: 0.15,
      transparent: true,
      opacity: 1.0,
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

  spawnGrowthEffect(position) {
    const count = 15;
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const velocities = [];

    for (let i = 0; i < count; i++) {
      positions[i * 3] = position.x;
      positions[i * 3 + 1] = position.y + 1;
      positions[i * 3 + 2] = position.z;
      velocities.push({
        x: (Math.random() - 0.5) * 0.04,
        y: 0.03 + Math.random() * 0.03,
        z: (Math.random() - 0.5) * 0.04,
      });
    }

    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const mat = new THREE.PointsMaterial({
      color: 0x22C55E,
      size: 0.1,
      transparent: true,
      opacity: 1.0,
    });

    const points = new THREE.Points(geo, mat);
    this.scene.add(points);

    this._systems.push({
      points,
      velocities,
      life: 1.5,
      maxLife: 1.5,
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
      }
      posAttr.needsUpdate = true;

      sys.points.material.opacity = sys.life / sys.maxLife;
    }
  }
}
