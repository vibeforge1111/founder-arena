import * as THREE from 'three';
import { CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';
import { formatMoney, formatNumber } from '../utils/formatters.js';

const DESK_COLOR = 0x5a422e;
const CHAIR_COLOR = 0x2a2a38;
const SCREEN_COLOR = 0x0a1520;
const SKIN_TONES = [0xf5d0a9, 0xe8b88a, 0xd4956b, 0xc68642, 0x8d5524, 0xf0c8a0];

export class StartupPod {
  constructor(startupId, accentColor) {
    this.startupId = startupId;
    this.accentHex = accentColor;
    this.accent = new THREE.Color(accentColor);
    this.group = new THREE.Group();
    this.clickTargets = [];
    this._highlighted = false;
    this._alive = true;
    this._bobOffset = Math.random() * Math.PI * 2;
    this._skinTone = SKIN_TONES[Math.floor(Math.random() * SKIN_TONES.length)];

    this._buildDeskSetup();
    this._buildChair();
    this._buildCharacter();
    this._buildLaptop();
    this._buildDeskProps();
    this._buildAccentLight();
    this._buildFloorMat();
    this._buildLabel();
    this._buildMetricBars();
  }

  _buildDeskSetup() {
    // Desktop surface - rounded edges feel
    const topGeo = new THREE.BoxGeometry(2.6, 0.1, 1.3);
    const topMat = new THREE.MeshStandardMaterial({
      color: DESK_COLOR, roughness: 0.5, metalness: 0.05,
    });
    this.deskTop = new THREE.Mesh(topGeo, topMat);
    this.deskTop.position.set(0, 0.75, 0);
    this.deskTop.castShadow = true;
    this.deskTop.receiveShadow = true;
    this.deskTop.userData.startupId = this.startupId;
    this.clickTargets.push(this.deskTop);
    this.group.add(this.deskTop);

    // Metal frame legs (L-shaped sides)
    const legMat = new THREE.MeshStandardMaterial({ color: 0x444450, metalness: 0.7, roughness: 0.25 });
    const sideGeo = new THREE.BoxGeometry(0.06, 0.7, 1.2);
    const leftSide = new THREE.Mesh(sideGeo, legMat);
    leftSide.position.set(-1.2, 0.35, 0);
    leftSide.castShadow = true;
    this.group.add(leftSide);
    const rightSide = new THREE.Mesh(sideGeo, legMat);
    rightSide.position.set(1.2, 0.35, 0);
    rightSide.castShadow = true;
    this.group.add(rightSide);

    // Cross bar
    const barGeo = new THREE.BoxGeometry(2.34, 0.04, 0.04);
    const bar = new THREE.Mesh(barGeo, legMat);
    bar.position.set(0, 0.08, 0);
    this.group.add(bar);
  }

  _buildChair() {
    const chairMat = new THREE.MeshStandardMaterial({ color: CHAIR_COLOR, roughness: 0.6 });
    const chairGroup = new THREE.Group();
    chairGroup.position.set(0, 0, 1.1);

    // Seat cushion (rounded)
    const seatGeo = new THREE.BoxGeometry(0.55, 0.08, 0.55);
    const seat = new THREE.Mesh(seatGeo, chairMat);
    seat.position.y = 0.48;
    seat.castShadow = true;
    chairGroup.add(seat);

    // Backrest (taller, slight curve)
    const backGeo = new THREE.BoxGeometry(0.55, 0.65, 0.06);
    const back = new THREE.Mesh(backGeo, chairMat);
    back.position.set(0, 0.83, 0.26);
    back.castShadow = true;
    chairGroup.add(back);

    // Armrests
    const armGeo = new THREE.BoxGeometry(0.06, 0.04, 0.35);
    const armMat = new THREE.MeshStandardMaterial({ color: 0x3a3a48, roughness: 0.5 });
    const leftArm = new THREE.Mesh(armGeo, armMat);
    leftArm.position.set(-0.28, 0.62, 0.08);
    chairGroup.add(leftArm);
    const rightArm = new THREE.Mesh(armGeo, armMat);
    rightArm.position.set(0.28, 0.62, 0.08);
    chairGroup.add(rightArm);

    // Chair base (star base)
    const baseMat = new THREE.MeshStandardMaterial({ color: 0x333340, metalness: 0.6, roughness: 0.3 });
    const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.35, 8), baseMat);
    stem.position.y = 0.28;
    chairGroup.add(stem);

    // Star legs
    for (let i = 0; i < 5; i++) {
      const angle = (i / 5) * Math.PI * 2;
      const legGeo = new THREE.BoxGeometry(0.03, 0.03, 0.25);
      const leg = new THREE.Mesh(legGeo, baseMat);
      leg.position.set(Math.cos(angle) * 0.12, 0.08, Math.sin(angle) * 0.12);
      leg.rotation.y = angle;
      chairGroup.add(leg);

      // Wheel
      const wheel = new THREE.Mesh(new THREE.SphereGeometry(0.035, 6, 4), baseMat);
      wheel.position.set(Math.cos(angle) * 0.22, 0.035, Math.sin(angle) * 0.22);
      chairGroup.add(wheel);
    }

    this.group.add(chairGroup);
  }

  _buildCharacter() {
    this.characterGroup = new THREE.Group();
    this.characterGroup.position.set(0, 0, 1.1);

    const skinMat = new THREE.MeshStandardMaterial({
      color: this._skinTone, roughness: 0.65, metalness: 0.0,
    });
    const clothesMat = new THREE.MeshStandardMaterial({
      color: this.accent, roughness: 0.5, metalness: 0.08,
    });
    const shoesMat = new THREE.MeshStandardMaterial({ color: 0x222228, roughness: 0.7 });

    // Torso (tapered)
    const torsoGeo = new THREE.CylinderGeometry(0.18, 0.2, 0.5, 8);
    this.body = new THREE.Mesh(torsoGeo, clothesMat);
    this.body.position.y = 1.0;
    this.body.castShadow = true;
    this.body.userData.startupId = this.startupId;
    this.clickTargets.push(this.body);
    this.characterGroup.add(this.body);

    // Neck
    const neckGeo = new THREE.CylinderGeometry(0.06, 0.07, 0.08, 8);
    const neck = new THREE.Mesh(neckGeo, skinMat);
    neck.position.y = 1.29;
    this.characterGroup.add(neck);

    // Head (slightly oval)
    const headGeo = new THREE.SphereGeometry(0.17, 14, 10);
    this.head = new THREE.Mesh(headGeo, skinMat);
    this.head.position.y = 1.5;
    this.head.scale.set(1, 1.1, 1);
    this.head.castShadow = true;
    this.characterGroup.add(this.head);

    // Hair (varies by startup)
    const hairColor = this._getHairColor();
    const hairMat = new THREE.MeshStandardMaterial({ color: hairColor, roughness: 0.8 });
    const hairGeo = new THREE.SphereGeometry(0.18, 10, 8, 0, Math.PI * 2, 0, Math.PI * 0.6);
    const hair = new THREE.Mesh(hairGeo, hairMat);
    hair.position.y = 1.55;
    hair.scale.set(1, 0.9, 1.05);
    this.characterGroup.add(hair);

    // Eyes (two small dark spheres)
    const eyeMat = new THREE.MeshStandardMaterial({ color: 0x222233, roughness: 0.3 });
    const eyeGeo = new THREE.SphereGeometry(0.025, 6, 4);
    const leftEye = new THREE.Mesh(eyeGeo, eyeMat);
    leftEye.position.set(-0.06, 1.52, -0.15);
    this.characterGroup.add(leftEye);
    const rightEye = new THREE.Mesh(eyeGeo, eyeMat);
    rightEye.position.set(0.06, 1.52, -0.15);
    this.characterGroup.add(rightEye);

    // Arms
    const armGeo = new THREE.CylinderGeometry(0.05, 0.045, 0.4, 6);

    // Left arm (resting on desk)
    this.leftArm = new THREE.Mesh(armGeo, clothesMat);
    this.leftArm.position.set(-0.28, 0.9, -0.15);
    this.leftArm.rotation.x = -0.5;
    this.leftArm.rotation.z = 0.2;
    this.leftArm.castShadow = true;
    this.characterGroup.add(this.leftArm);

    // Left hand
    const handGeo = new THREE.SphereGeometry(0.04, 6, 4);
    const leftHand = new THREE.Mesh(handGeo, skinMat);
    leftHand.position.set(-0.32, 0.72, -0.3);
    this.characterGroup.add(leftHand);

    // Right arm
    this.rightArm = new THREE.Mesh(armGeo, clothesMat);
    this.rightArm.position.set(0.28, 0.9, -0.15);
    this.rightArm.rotation.x = -0.5;
    this.rightArm.rotation.z = -0.2;
    this.rightArm.castShadow = true;
    this.characterGroup.add(this.rightArm);

    // Right hand
    const rightHand = new THREE.Mesh(handGeo, skinMat);
    rightHand.position.set(0.32, 0.72, -0.3);
    this.characterGroup.add(rightHand);

    // Legs (seated)
    const legGeo = new THREE.CylinderGeometry(0.065, 0.055, 0.45, 6);
    const pantsMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(this.accent).multiplyScalar(0.4).offsetHSL(0, -0.3, -0.1),
      roughness: 0.7,
    });

    const leftLeg = new THREE.Mesh(legGeo, pantsMat);
    leftLeg.position.set(-0.1, 0.55, 0.0);
    leftLeg.rotation.x = Math.PI / 2.2;
    this.characterGroup.add(leftLeg);

    const rightLeg = new THREE.Mesh(legGeo, pantsMat);
    rightLeg.position.set(0.1, 0.55, 0.0);
    rightLeg.rotation.x = Math.PI / 2.2;
    this.characterGroup.add(rightLeg);

    // Shoes
    const shoeGeo = new THREE.BoxGeometry(0.08, 0.05, 0.14);
    const leftShoe = new THREE.Mesh(shoeGeo, shoesMat);
    leftShoe.position.set(-0.1, 0.48, -0.4);
    this.characterGroup.add(leftShoe);
    const rightShoe = new THREE.Mesh(shoeGeo, shoesMat);
    rightShoe.position.set(0.1, 0.48, -0.4);
    this.characterGroup.add(rightShoe);

    this.group.add(this.characterGroup);
  }

  _getHairColor() {
    const colors = [0x1a1a1a, 0x3a2010, 0x6b4226, 0x8b6914, 0xc4944a, 0x2a1a0a, 0x4a2a1a];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  _buildLaptop() {
    const laptopGroup = new THREE.Group();
    laptopGroup.position.set(0, 0.8, -0.1);

    // Base
    const baseMat = new THREE.MeshStandardMaterial({ color: 0x444450, roughness: 0.3, metalness: 0.5 });
    const baseGeo = new THREE.BoxGeometry(0.5, 0.02, 0.35);
    const base = new THREE.Mesh(baseGeo, baseMat);
    laptopGroup.add(base);

    // Screen (angled)
    const screenGroup = new THREE.Group();
    screenGroup.position.set(0, 0.01, -0.17);
    screenGroup.rotation.x = -0.25;

    const lidGeo = new THREE.BoxGeometry(0.5, 0.35, 0.015);
    const lid = new THREE.Mesh(lidGeo, baseMat);
    lid.position.y = 0.175;
    screenGroup.add(lid);

    this.screenFace = new THREE.Mesh(
      new THREE.PlaneGeometry(0.44, 0.29),
      new THREE.MeshStandardMaterial({
        color: SCREEN_COLOR,
        emissive: new THREE.Color(0x112244),
        emissiveIntensity: 0.8,
        roughness: 0.1,
      })
    );
    this.screenFace.position.set(0, 0.175, 0.009);
    screenGroup.add(this.screenFace);

    laptopGroup.add(screenGroup);

    // Keyboard area glow
    const kbGlow = new THREE.Mesh(
      new THREE.PlaneGeometry(0.4, 0.25),
      new THREE.MeshStandardMaterial({
        color: 0x111118,
        emissive: new THREE.Color(0x080810),
        emissiveIntensity: 0.3,
        roughness: 0.2,
      })
    );
    kbGlow.rotation.x = -Math.PI / 2;
    kbGlow.position.set(0, 0.012, 0.02);
    laptopGroup.add(kbGlow);

    this.group.add(laptopGroup);
  }

  _buildDeskProps() {
    // Coffee mug
    const mugMat = new THREE.MeshStandardMaterial({ color: 0xddddee, roughness: 0.4, metalness: 0.1 });
    const mugBody = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.045, 0.1, 8), mugMat);
    mugBody.position.set(0.9, 0.86, 0.2);
    mugBody.castShadow = true;
    this.group.add(mugBody);

    // Mug handle
    const handleGeo = new THREE.TorusGeometry(0.03, 0.008, 6, 8, Math.PI);
    const handle = new THREE.Mesh(handleGeo, mugMat);
    handle.position.set(0.95, 0.86, 0.2);
    handle.rotation.y = Math.PI / 2;
    this.group.add(handle);

    // Coffee surface
    const coffee = new THREE.Mesh(
      new THREE.CircleGeometry(0.04, 8),
      new THREE.MeshStandardMaterial({ color: 0x3a2010, roughness: 0.9 })
    );
    coffee.position.set(0.9, 0.91, 0.2);
    coffee.rotation.x = -Math.PI / 2;
    this.group.add(coffee);

    // Notepad
    const padGeo = new THREE.BoxGeometry(0.25, 0.01, 0.18);
    const padMat = new THREE.MeshStandardMaterial({ color: 0xf5f0d8, roughness: 0.95 });
    const pad = new THREE.Mesh(padGeo, padMat);
    pad.position.set(-0.85, 0.81, 0.15);
    pad.rotation.y = 0.15;
    pad.castShadow = true;
    this.group.add(pad);

    // Pen
    const penGeo = new THREE.CylinderGeometry(0.008, 0.008, 0.18, 4);
    const penMat = new THREE.MeshStandardMaterial({ color: 0x2244aa, roughness: 0.3, metalness: 0.4 });
    const pen = new THREE.Mesh(penGeo, penMat);
    pen.position.set(-0.75, 0.82, 0.2);
    pen.rotation.z = Math.PI / 2;
    pen.rotation.y = 0.3;
    this.group.add(pen);
  }

  _buildAccentLight() {
    this.accentLight = new THREE.PointLight(this.accent, 0.8, 6);
    this.accentLight.position.set(0, 2.2, 0.5);
    this.group.add(this.accentLight);

    // Under-desk ambient glow
    const underglow = new THREE.PointLight(this.accent, 0.15, 3);
    underglow.position.set(0, 0.1, 0.5);
    this.group.add(underglow);
  }

  _buildFloorMat() {
    // Small floor mat under the desk area
    const matGeo = new THREE.PlaneGeometry(3.2, 2.8);
    const matMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color(this.accent).multiplyScalar(0.1),
      roughness: 0.95,
      metalness: 0.0,
      transparent: true,
      opacity: 0.3,
    });
    const floorMat = new THREE.Mesh(matGeo, matMaterial);
    floorMat.rotation.x = -Math.PI / 2;
    floorMat.position.set(0, 0.006, 0.5);
    floorMat.receiveShadow = true;
    this.group.add(floorMat);
  }

  _buildLabel() {
    const el = document.createElement('div');
    el.style.cssText = `
      background: rgba(0,0,0,0.8);
      backdrop-filter: blur(10px);
      padding: 8px 12px;
      border-radius: 8px;
      border: 1px solid rgba(255,255,255,0.1);
      font-family: 'Inter', sans-serif;
      text-align: center;
      pointer-events: none;
      min-width: 110px;
    `;
    this._labelName = document.createElement('div');
    this._labelName.style.cssText = 'font-size:10px;font-weight:700;color:#eee;letter-spacing:0.5px;';
    el.appendChild(this._labelName);

    this._labelMeta = document.createElement('div');
    this._labelMeta.style.cssText = 'font-size:9px;color:#888;margin-top:2px;';
    el.appendChild(this._labelMeta);

    this._labelVal = document.createElement('div');
    this._labelVal.style.cssText = 'font-size:12px;font-weight:800;color:#F0B429;margin-top:4px;';
    el.appendChild(this._labelVal);

    this.label = new CSS2DObject(el);
    this.label.position.set(0, 2.8, 0.5);
    this.group.add(this.label);
  }

  _buildMetricBars() {
    const container = document.createElement('div');
    container.style.cssText = `
      display: flex; gap: 3px; width: 90px; margin-top: 5px;
    `;

    this._bars = {};
    const metrics = [
      { key: 'product_quality', color: '#3B82F6', label: 'P' },
      { key: 'morale', color: '#22C55E', label: 'M' },
      { key: 'brand', color: '#F0B429', label: 'B' },
    ];

    for (const m of metrics) {
      const bar = document.createElement('div');
      bar.style.cssText = `
        flex: 1; height: 4px; background: rgba(255,255,255,0.1);
        border-radius: 2px; overflow: hidden;
      `;
      const fill = document.createElement('div');
      fill.style.cssText = `
        height: 100%; border-radius: 2px;
        background: ${m.color}; width: 0%;
        transition: width 0.5s ease;
      `;
      bar.appendChild(fill);
      container.appendChild(bar);
      this._bars[m.key] = fill;
    }

    this.label.element.appendChild(container);
  }

  update(data, isSelected) {
    if (!data) return;

    this._alive = data.alive !== false;
    this._labelName.textContent = data.startup_name || 'Unknown';
    this._labelMeta.textContent = `${data.agent_name || ''} | ${data.sector || ''}`;
    this._labelVal.textContent = formatMoney(data.valuation);

    // Update bars
    if (this._bars.product_quality) {
      this._bars.product_quality.style.width = `${data.product_quality || 0}%`;
    }
    if (this._bars.morale) {
      this._bars.morale.style.width = `${data.morale || 0}%`;
    }
    if (this._bars.brand) {
      this._bars.brand.style.width = `${data.brand || 0}%`;
    }

    // Alive/dead visual
    if (!this._alive) {
      this.body.material.color.setHex(0x444444);
      this.body.material.emissive = new THREE.Color(0x000000);
      this.accentLight.intensity = 0.1;
      this.screenFace.material.emissive.setHex(0x110000);
      this.screenFace.material.emissiveIntensity = 0.2;
    } else {
      this.body.material.color.copy(this.accent);
      this.accentLight.intensity = isSelected ? 1.4 : 0.8;
      this.screenFace.material.emissive.setHex(0x112244);
      this.screenFace.material.emissiveIntensity = 0.8;
    }

    // Screen glow reflects runway health
    if (this._alive) {
      const runway = data.runway || 0;
      if (runway < 3) {
        this.screenFace.material.emissive.setHex(0x441111);
      } else if (runway < 6) {
        this.screenFace.material.emissive.setHex(0x443311);
      } else {
        this.screenFace.material.emissive.setHex(0x112244);
      }
    }

    this.setHighlight(isSelected);
  }

  setHighlight(on) {
    this._highlighted = on;
    if (on) {
      this.deskTop.material.emissive = this.accent.clone().multiplyScalar(0.2);
      this.accentLight.intensity = 1.4;
    } else {
      this.deskTop.material.emissive = new THREE.Color(0x000000);
      if (this._alive) this.accentLight.intensity = 0.8;
    }
  }

  animate(elapsed, dt) {
    if (!this._alive) return;

    // Gentle character breathing bob
    const bobY = Math.sin(elapsed * 1.2 + this._bobOffset) * 0.015;
    this.characterGroup.position.y = bobY;

    // Subtle head turn (looking at screen)
    this.head.rotation.y = Math.sin(elapsed * 0.4 + this._bobOffset) * 0.08;

    // Typing animation - slight arm movement
    const typePhase = Math.sin(elapsed * 6 + this._bobOffset);
    if (this.leftArm) {
      this.leftArm.rotation.x = -0.5 + typePhase * 0.03;
    }
    if (this.rightArm) {
      this.rightArm.rotation.x = -0.5 - typePhase * 0.03;
    }

    // Highlighted pulse
    if (this._highlighted) {
      const pulse = 0.9 + Math.sin(elapsed * 3) * 0.5;
      this.accentLight.intensity = pulse;
    }
  }

  dispose() {
    if (this.label && this.label.element && this.label.element.parentNode) {
      this.label.element.parentNode.removeChild(this.label.element);
    }
  }
}
