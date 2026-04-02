import * as THREE from 'three';
import { CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';
import { formatMoney, formatNumber } from '../utils/formatters.js';

const DESK_COLOR = 0x5a422e;
const CHAIR_COLOR = 0x1e1e2e;
const SCREEN_COLOR = 0x060e1a;
const SKIN_TONES = [0xf5d0a9, 0xe8b88a, 0xd4956b, 0xc68642, 0x8d5524, 0xf0c8a0];
const HAIR_COLORS = [0x1a1a1a, 0x3a2010, 0x6b4226, 0x8b6914, 0xc4944a, 0x2a1a0a, 0x4a2a1a, 0x8b1a1a, 0x1a2a3a];
const SHIRT_STYLES = ['tshirt', 'hoodie', 'blazer', 'polo'];
const HAIR_STYLES = ['short', 'medium', 'buzz', 'pompadour', 'bun', 'sidePart'];

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
    // Seeded random for consistent character appearance per startup
    this._seed = this._hashCode(startupId);
    this._rng = this._makeRng(this._seed);

    this._skinTone = SKIN_TONES[this._rngInt(SKIN_TONES.length)];
    this._hairColor = HAIR_COLORS[this._rngInt(HAIR_COLORS.length)];
    this._hairStyle = HAIR_STYLES[this._rngInt(HAIR_STYLES.length)];
    this._shirtStyle = SHIRT_STYLES[this._rngInt(SHIRT_STYLES.length)];
    this._hasGlasses = this._rng() > 0.65;
    this._hasHeadphones = !this._hasGlasses && this._rng() > 0.75;
    this._hasBeard = this._rng() > 0.7;
    this._bodyScale = 0.9 + this._rng() * 0.2; // slight size variation

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
      color: DESK_COLOR, roughness: 0.35, metalness: 0.08,
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
    // Gaming/ergonomic chair — mesh fabric look
    const chairMat = new THREE.MeshStandardMaterial({
      color: CHAIR_COLOR, roughness: 0.7, metalness: 0.0,
    });
    // Accent stripe color on chair matches startup accent
    const chairAccentMat = new THREE.MeshStandardMaterial({
      color: this.accent, roughness: 0.6, metalness: 0.1,
    });
    const chairGroup = new THREE.Group();
    chairGroup.position.set(0, 0, 1.1);

    // Seat cushion
    const seatGeo = new THREE.BoxGeometry(0.55, 0.08, 0.55);
    const seat = new THREE.Mesh(seatGeo, chairMat);
    seat.position.y = 0.48;
    seat.castShadow = true;
    chairGroup.add(seat);

    // Backrest (taller, with accent stripe)
    const backGeo = new THREE.BoxGeometry(0.55, 0.65, 0.06);
    const back = new THREE.Mesh(backGeo, chairMat);
    back.position.set(0, 0.83, 0.26);
    back.castShadow = true;
    chairGroup.add(back);

    // Accent stripe on backrest
    const stripeGeo = new THREE.BoxGeometry(0.08, 0.5, 0.005);
    const stripe = new THREE.Mesh(stripeGeo, chairAccentMat);
    stripe.position.set(0, 0.85, 0.228);
    chairGroup.add(stripe);

    // Armrests — with soft-touch pads
    const armGeo = new THREE.BoxGeometry(0.06, 0.04, 0.35);
    const armMat = new THREE.MeshStandardMaterial({ color: 0x2a2a38, roughness: 0.4, metalness: 0.3 });
    const padMat = new THREE.MeshStandardMaterial({ color: 0x333342, roughness: 0.8 });
    for (const side of [-1, 1]) {
      const arm = new THREE.Mesh(armGeo, armMat);
      arm.position.set(side * 0.28, 0.62, 0.08);
      chairGroup.add(arm);
      // Soft pad on top
      const pad = new THREE.Mesh(new THREE.BoxGeometry(0.065, 0.015, 0.15), padMat);
      pad.position.set(side * 0.28, 0.645, 0.0);
      chairGroup.add(pad);
    }

    // Chrome base
    const baseMat = new THREE.MeshStandardMaterial({ color: 0x666670, metalness: 0.8, roughness: 0.15 });
    const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.04, 0.35, 8), baseMat);
    stem.position.y = 0.28;
    chairGroup.add(stem);

    // Star legs — chrome
    for (let i = 0; i < 5; i++) {
      const angle = (i / 5) * Math.PI * 2;
      const legGeo = new THREE.BoxGeometry(0.025, 0.025, 0.25);
      const leg = new THREE.Mesh(legGeo, baseMat);
      leg.position.set(Math.cos(angle) * 0.12, 0.08, Math.sin(angle) * 0.12);
      leg.rotation.y = angle;
      chairGroup.add(leg);

      // Wheel — rubber + chrome
      const wheel = new THREE.Mesh(
        new THREE.SphereGeometry(0.035, 8, 6),
        new THREE.MeshStandardMaterial({ color: 0x222228, roughness: 0.9 })
      );
      wheel.position.set(Math.cos(angle) * 0.22, 0.035, Math.sin(angle) * 0.22);
      chairGroup.add(wheel);
    }

    this.group.add(chairGroup);
  }

  _buildCharacter() {
    // ============================================
    // STYLIZED FOUNDER CHARACTER
    // Clean, geometric "boardroom meets indie game" aesthetic.
    // Big head, simple body, expressive face, low poly count.
    // ============================================
    this.characterGroup = new THREE.Group();
    this.characterGroup.position.set(0, 0, 1.1);

    const scale = this._bodyScale;
    this.characterGroup.scale.setScalar(scale);

    const skinMat = new THREE.MeshStandardMaterial({
      color: this._skinTone, roughness: 0.55, metalness: 0.0,
    });

    const clothesMat = new THREE.MeshStandardMaterial({
      color: this.accent, roughness: 0.4, metalness: 0.05,
    });
    this._clothesMat = clothesMat;

    const darkClothes = new THREE.MeshStandardMaterial({
      color: new THREE.Color(this.accent).clone().multiplyScalar(0.3).offsetHSL(0, -0.2, 0),
      roughness: 0.6,
    });

    // === BODY (rounded box torso — cleaner than cylinder) ===
    const torsoGeo = new THREE.BoxGeometry(0.4, 0.5, 0.25, 2, 2, 2);
    this._roundifyGeometry(torsoGeo, 0.06);
    this.body = new THREE.Mesh(torsoGeo, clothesMat);
    this.body.position.y = 1.0;
    this.body.castShadow = true;
    this.body.userData.startupId = this.startupId;
    this.clickTargets.push(this.body);
    this.characterGroup.add(this.body);

    // Shirt detail based on style
    if (this._shirtStyle === 'hoodie') {
      const hoodGeo = new THREE.SphereGeometry(0.14, 8, 6, 0, Math.PI * 2, 0, Math.PI * 0.45);
      const hood = new THREE.Mesh(hoodGeo, clothesMat);
      hood.position.set(0, 1.28, 0.06);
      hood.rotation.x = 0.4;
      this.characterGroup.add(hood);
    } else if (this._shirtStyle === 'blazer') {
      // Lapel lines
      const lapelMat = new THREE.MeshStandardMaterial({
        color: new THREE.Color(this.accent).clone().multiplyScalar(0.65), roughness: 0.4,
      });
      for (const side of [-1, 1]) {
        const lapel = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.16, 0.01), lapelMat);
        lapel.position.set(side * 0.07, 1.13, -0.13);
        lapel.rotation.z = side * 0.15;
        this.characterGroup.add(lapel);
      }
    }

    // === NECK ===
    const neck = new THREE.Mesh(
      new THREE.CylinderGeometry(0.06, 0.08, 0.1, 8),
      skinMat
    );
    neck.position.y = 1.29;
    this.characterGroup.add(neck);

    // === HEAD (composite: cranium + jaw for proper shape) ===
    this.head = new THREE.Group();
    this.head.position.y = 1.58;
    this.characterGroup.add(this.head);

    // Cranium — upper part of head, slightly wider
    const craniumGeo = new THREE.SphereGeometry(0.24, 20, 14, 0, Math.PI * 2, 0, Math.PI * 0.65);
    const cranium = new THREE.Mesh(craniumGeo, skinMat);
    cranium.position.y = 0.02;
    cranium.scale.set(1, 1.0, 0.93);
    cranium.castShadow = true;
    this.head.add(cranium);

    // Jaw / lower face — gives the head a proper chin shape instead of a sphere
    const jawGeo = new THREE.BoxGeometry(0.36, 0.18, 0.32, 2, 2, 2);
    this._roundifyGeometry(jawGeo, 0.06);
    const jaw = new THREE.Mesh(jawGeo, skinMat);
    jaw.position.set(0, -0.08, -0.02);
    jaw.scale.set(1, 0.85, 0.8);
    this.head.add(jaw);

    // Cheeks — subtle volume
    for (const side of [-1, 1]) {
      const cheek = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 6), skinMat);
      cheek.position.set(side * 0.15, -0.04, -0.12);
      cheek.scale.set(0.8, 0.7, 0.5);
      this.head.add(cheek);
    }

    // Ears — flat discs on the sides
    for (const side of [-1, 1]) {
      const earGeo = new THREE.CylinderGeometry(0.04, 0.035, 0.02, 8);
      const ear = new THREE.Mesh(earGeo, skinMat);
      ear.position.set(side * 0.23, 0, 0);
      ear.rotation.z = side * Math.PI / 2;
      this.head.add(ear);
    }

    // === FACE FEATURES (positioned relative to head group) ===

    // Eyes — large, expressive, the heart of the character
    const whitesMat = new THREE.MeshStandardMaterial({
      color: 0xffffff, roughness: 0.15, metalness: 0.0,
    });
    const irisColors = [0x3a7a4a, 0x3a5a8b, 0x7a5a2a, 0x2a7a7a, 0x5a3a7a];
    const irisColor = irisColors[this._rngInt(irisColors.length)];

    for (const side of [-1, 1]) {
      // Eye socket — slight recess
      const socket = new THREE.Mesh(
        new THREE.SphereGeometry(0.055, 10, 8),
        new THREE.MeshStandardMaterial({
          color: new THREE.Color(this._skinTone).clone().multiplyScalar(0.85),
          roughness: 0.6,
        })
      );
      socket.position.set(side * 0.085, 0.01, -0.19);
      socket.scale.set(0.9, 0.75, 0.3);
      this.head.add(socket);

      // Eye white
      const white = new THREE.Mesh(new THREE.SphereGeometry(0.048, 12, 10), whitesMat);
      white.position.set(side * 0.085, 0.01, -0.2);
      white.scale.set(0.9, 0.7, 0.35);
      this.head.add(white);

      // Iris
      const irisMat = new THREE.MeshStandardMaterial({ color: irisColor, roughness: 0.2 });
      const iris = new THREE.Mesh(new THREE.SphereGeometry(0.03, 10, 8), irisMat);
      iris.position.set(side * 0.085, 0.01, -0.225);
      iris.scale.set(0.85, 0.7, 0.35);
      this.head.add(iris);

      // Pupil
      const pupilMat = new THREE.MeshStandardMaterial({ color: 0x060610, roughness: 0.1 });
      const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.016, 8, 6), pupilMat);
      pupil.position.set(side * 0.085, 0.01, -0.235);
      this.head.add(pupil);
      if (side === -1) this._leftPupil = pupil;
      else this._rightPupil = pupil;

      // Eye shine — two dots for liveliness
      const shineMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const shine = new THREE.Mesh(new THREE.SphereGeometry(0.007, 6, 4), shineMat);
      shine.position.set(side * 0.08 - 0.012, 0.025, -0.24);
      this.head.add(shine);
      const shine2 = new THREE.Mesh(new THREE.SphereGeometry(0.004, 4, 3), shineMat);
      shine2.position.set(side * 0.09 + 0.01, 0.0, -0.24);
      this.head.add(shine2);

      // Upper eyelid — gives expression (half-closed look vs wide open)
      const lidMat = new THREE.MeshStandardMaterial({
        color: new THREE.Color(this._skinTone).clone().multiplyScalar(0.9),
        roughness: 0.5,
      });
      const lid = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.012, 0.02), lidMat);
      lid.position.set(side * 0.085, 0.045, -0.22);
      this.head.add(lid);
    }

    // Eyebrows — thicker, more expressive
    const browMat = new THREE.MeshStandardMaterial({ color: this._hairColor, roughness: 0.7 });
    for (const side of [-1, 1]) {
      const browGeo = new THREE.BoxGeometry(0.065, 0.018, 0.022, 1, 1, 1);
      this._roundifyGeometry(browGeo, 0.004);
      const brow = new THREE.Mesh(browGeo, browMat);
      brow.position.set(side * 0.085, 0.075, -0.21);
      brow.rotation.z = side * 0.1;
      this.head.add(brow);
    }

    // Nose — blocky wedge with bridge
    const noseGeo = new THREE.BoxGeometry(0.04, 0.05, 0.04, 1, 1, 1);
    this._roundifyGeometry(noseGeo, 0.01);
    const nose = new THREE.Mesh(noseGeo, skinMat);
    nose.position.set(0, -0.04, -0.23);
    this.head.add(nose);
    // Nose tip
    const noseTip = new THREE.Mesh(new THREE.SphereGeometry(0.022, 6, 5), skinMat);
    noseTip.position.set(0, -0.055, -0.245);
    noseTip.scale.set(1, 0.7, 0.6);
    this.head.add(noseTip);

    // Mouth — slight smile curve
    const mouthMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(this._skinTone).clone().multiplyScalar(0.55),
      roughness: 0.5,
    });
    // Upper lip
    const upperLip = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.008, 0.012), mouthMat);
    upperLip.position.set(0, -0.1, -0.21);
    this.head.add(upperLip);
    // Lower lip — slightly fuller
    const lowerLipMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(this._skinTone).clone().multiplyScalar(0.65),
      roughness: 0.4,
    });
    const lowerLip = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.012, 0.01), lowerLipMat);
    lowerLip.position.set(0, -0.115, -0.21);
    this.head.add(lowerLip);

    // === HAIR ===
    this._buildHairStyled();

    // === ACCESSORIES ===
    if (this._hasGlasses) {
      const frameMat = new THREE.MeshStandardMaterial({ color: 0x222233, roughness: 0.2, metalness: 0.6 });
      const lensMat = new THREE.MeshStandardMaterial({
        color: 0xaaccee, roughness: 0.05, metalness: 0.2, transparent: true, opacity: 0.25,
      });
      for (const side of [-1, 1]) {
        const ring = new THREE.Mesh(new THREE.TorusGeometry(0.05, 0.006, 6, 16), frameMat);
        ring.position.set(side * 0.085, 0.01, -0.24);
        this.head.add(ring);
        const lens = new THREE.Mesh(new THREE.CircleGeometry(0.044, 12), lensMat);
        lens.position.set(side * 0.085, 0.01, -0.242);
        this.head.add(lens);
      }
      const bridge = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.006, 0.006), frameMat);
      bridge.position.set(0, 0.015, -0.24);
      this.head.add(bridge);
      // Temple arms
      for (const side of [-1, 1]) {
        const temple = new THREE.Mesh(new THREE.BoxGeometry(0.005, 0.006, 0.12), frameMat);
        temple.position.set(side * 0.13, 0.015, -0.18);
        this.head.add(temple);
      }
    }

    if (this._hasHeadphones) {
      const hpMat = new THREE.MeshStandardMaterial({ color: 0x2a2a35, roughness: 0.25, metalness: 0.6 });
      const band = new THREE.Mesh(new THREE.TorusGeometry(0.26, 0.016, 8, 16, Math.PI), hpMat);
      band.position.set(0, 0.2, 0);
      band.rotation.z = Math.PI;
      this.head.add(band);
      for (const side of [-1, 1]) {
        // Cup housing
        const cup = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.065, 0.04, 10), hpMat);
        cup.position.set(side * 0.26, -0.01, 0);
        cup.rotation.z = Math.PI / 2;
        this.head.add(cup);
        // Cushion pad
        const padMat = new THREE.MeshStandardMaterial({ color: 0x1a1a22, roughness: 0.9 });
        const pad = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.055, 0.015, 10), padMat);
        pad.position.set(side * 0.24, -0.01, 0);
        pad.rotation.z = Math.PI / 2;
        this.head.add(pad);
      }
    }

    if (this._hasBeard) {
      const beardMat = new THREE.MeshStandardMaterial({
        color: new THREE.Color(this._hairColor).clone().multiplyScalar(0.85), roughness: 0.8,
      });
      // Chin beard
      const chinGeo = new THREE.BoxGeometry(0.2, 0.1, 0.15, 2, 2, 2);
      this._roundifyGeometry(chinGeo, 0.03);
      const chin = new THREE.Mesh(chinGeo, beardMat);
      chin.position.set(0, -0.14, -0.1);
      this.head.add(chin);
      // Mustache
      const stache = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.015, 0.015), beardMat);
      stache.position.set(0, -0.085, -0.22);
      this.head.add(stache);
    }

    // === ARMS (proper shoulder -> upper arm -> elbow -> forearm -> hand) ===

    for (const side of [-1, 1]) {
      // === HIERARCHICAL ARM: shoulder → upperArm → forearmGroup → hand ===
      // Everything parents into the level above so rotations cascade properly.

      // Shoulder pivot — positioned at the shoulder joint in characterGroup space
      const shoulderPivot = new THREE.Group();
      shoulderPivot.position.set(side * 0.22, 1.18, 0);
      this.characterGroup.add(shoulderPivot);

      // Shoulder ball — visual joint
      const shoulderBall = new THREE.Mesh(
        new THREE.SphereGeometry(0.058, 10, 8),
        clothesMat
      );
      shoulderPivot.add(shoulderBall);

      // Upper arm — hangs down from shoulder pivot
      const upperGeo = new THREE.BoxGeometry(0.09, 0.24, 0.09, 2, 2, 2);
      this._roundifyGeometry(upperGeo, 0.018);
      const upper = new THREE.Mesh(upperGeo, clothesMat);
      upper.position.set(side * 0.04, -0.13, -0.02);
      upper.castShadow = true;
      shoulderPivot.add(upper);

      // Set shoulder rotation — arms angled slightly out and forward
      shoulderPivot.rotation.z = side * 0.2;
      shoulderPivot.rotation.x = -0.35;

      if (side === -1) this.leftUpperArm = shoulderPivot;
      else this.rightUpperArm = shoulderPivot;

      // Elbow pivot — at the bottom of the upper arm
      const elbowPivot = new THREE.Group();
      elbowPivot.position.set(side * 0.04, -0.26, -0.02);
      shoulderPivot.add(elbowPivot);

      // Elbow ball — visible skin-colored joint
      const elbowBall = new THREE.Mesh(
        new THREE.SphereGeometry(0.045, 10, 8),
        skinMat
      );
      elbowPivot.add(elbowBall);

      // Forearm — skin colored, extends from elbow
      const foreGeo = new THREE.BoxGeometry(0.08, 0.22, 0.08, 2, 2, 2);
      this._roundifyGeometry(foreGeo, 0.014);
      const fore = new THREE.Mesh(foreGeo, skinMat);
      fore.position.set(0, -0.12, 0);
      fore.castShadow = true;
      elbowPivot.add(fore);

      // Bend elbow so forearm reaches forward to desk
      elbowPivot.rotation.x = -1.15;
      elbowPivot.rotation.z = side * -0.08;

      if (side === -1) this.leftArm = elbowPivot;
      else this.rightArm = elbowPivot;

      // Wrist pivot — at end of forearm
      const wristPivot = new THREE.Group();
      wristPivot.position.set(0, -0.24, 0);
      elbowPivot.add(wristPivot);

      // Wrist ball — visible joint
      const wristBall = new THREE.Mesh(
        new THREE.SphereGeometry(0.032, 8, 6),
        skinMat
      );
      wristPivot.add(wristBall);

      // Hand — palm down, slightly flattened
      const palmGeo = new THREE.BoxGeometry(0.065, 0.022, 0.055, 2, 1, 1);
      this._roundifyGeometry(palmGeo, 0.005);
      const palm = new THREE.Mesh(palmGeo, skinMat);
      palm.position.set(0, -0.02, -0.015);
      wristPivot.add(palm);

      // Fingers — 4 small blocky nubs extending from palm
      for (let f = 0; f < 4; f++) {
        const fingerGeo = new THREE.BoxGeometry(0.012, 0.015, 0.032, 1, 1, 1);
        this._roundifyGeometry(fingerGeo, 0.003);
        const finger = new THREE.Mesh(fingerGeo, skinMat);
        const fx = -0.022 + f * 0.015;
        finger.position.set(fx, -0.025, -0.055);
        wristPivot.add(finger);
      }

      // Thumb — offset to side
      const thumbGeo = new THREE.BoxGeometry(0.015, 0.014, 0.025, 1, 1, 1);
      this._roundifyGeometry(thumbGeo, 0.003);
      const thumb = new THREE.Mesh(thumbGeo, skinMat);
      thumb.position.set(side * 0.035, -0.02, -0.03);
      thumb.rotation.z = side * 0.4;
      wristPivot.add(thumb);

      // Flatten wrist so hand is palm-down on desk
      wristPivot.rotation.x = 1.15;

      if (side === -1) this._leftHand = wristPivot;
      else this._rightHand = wristPivot;
    }

    // === LEGS (seated) — blocky ===
    const legGeo = new THREE.BoxGeometry(0.1, 0.35, 0.1, 1, 1, 1);
    this._roundifyGeometry(legGeo, 0.02);

    for (const side of [-1, 1]) {
      // Thigh (horizontal)
      const thigh = new THREE.Mesh(legGeo, darkClothes);
      thigh.position.set(side * 0.1, 0.55, -0.02);
      thigh.rotation.x = Math.PI / 2.1;
      this.characterGroup.add(thigh);

      // Shin (hanging)
      const shin = new THREE.Mesh(legGeo, darkClothes);
      shin.position.set(side * 0.1, 0.37, -0.33);
      shin.rotation.x = 0.08;
      this.characterGroup.add(shin);

      // Shoe — chunky sneaker
      const shoeMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5, metalness: 0.05 });
      const shoe = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.06, 0.17), shoeMat);
      shoe.position.set(side * 0.1, 0.2, -0.36);
      this.characterGroup.add(shoe);

      // Shoe sole — accent color
      const soleMat = new THREE.MeshStandardMaterial({ color: this.accent, roughness: 0.7 });
      const sole = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.025, 0.18), soleMat);
      sole.position.set(side * 0.1, 0.185, -0.36);
      this.characterGroup.add(sole);
    }

    this.group.add(this.characterGroup);
  }

  /** Softens box edges by pushing vertices toward a sphere — cheap roundedness. */
  _roundifyGeometry(geo, factor) {
    const pos = geo.attributes.position;
    const v = new THREE.Vector3();
    for (let i = 0; i < pos.count; i++) {
      v.fromBufferAttribute(pos, i);
      const len = v.length();
      if (len > 0) {
        v.normalize().multiplyScalar(len + factor);
        pos.setXYZ(i, v.x, v.y, v.z);
      }
    }
    pos.needsUpdate = true;
    geo.computeVertexNormals();
  }

  _buildHairStyled() {
    const hairMat = new THREE.MeshStandardMaterial({ color: this._hairColor, roughness: 0.65 });

    switch (this._hairStyle) {
      case 'short': {
        const geo = new THREE.SphereGeometry(0.245, 14, 12, 0, Math.PI * 2, 0, Math.PI * 0.52);
        const hair = new THREE.Mesh(geo, hairMat);
        hair.position.y = 1.63;
        hair.scale.set(1.0, 0.92, 0.98);
        this.characterGroup.add(hair);
        break;
      }
      case 'medium': {
        const geo = new THREE.SphereGeometry(0.26, 14, 12, 0, Math.PI * 2, 0, Math.PI * 0.58);
        const hair = new THREE.Mesh(geo, hairMat);
        hair.position.y = 1.62;
        hair.scale.set(1.04, 0.98, 1.08);
        this.characterGroup.add(hair);
        for (const side of [-1, 1]) {
          const s = new THREE.Mesh(new THREE.SphereGeometry(0.09, 8, 6), hairMat);
          s.position.set(side * 0.2, 1.56, 0.02);
          s.scale.set(0.6, 1.1, 0.9);
          this.characterGroup.add(s);
        }
        break;
      }
      case 'buzz': {
        const geo = new THREE.SphereGeometry(0.243, 12, 10, 0, Math.PI * 2, 0, Math.PI * 0.48);
        const buzz = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({
          color: this._hairColor, roughness: 0.9,
        }));
        buzz.position.y = 1.63;
        this.characterGroup.add(buzz);
        break;
      }
      case 'pompadour': {
        const back = new THREE.Mesh(
          new THREE.SphereGeometry(0.25, 14, 12, 0, Math.PI * 2, 0, Math.PI * 0.52),
          hairMat
        );
        back.position.y = 1.63;
        this.characterGroup.add(back);
        const front = new THREE.Mesh(new THREE.SphereGeometry(0.12, 10, 8), hairMat);
        front.position.set(0, 1.76, -0.12);
        front.scale.set(1.3, 0.7, 0.9);
        this.characterGroup.add(front);
        break;
      }
      case 'bun': {
        const base = new THREE.Mesh(
          new THREE.SphereGeometry(0.245, 12, 10, 0, Math.PI * 2, 0, Math.PI * 0.48),
          hairMat
        );
        base.position.y = 1.63;
        this.characterGroup.add(base);
        const bun = new THREE.Mesh(new THREE.SphereGeometry(0.09, 10, 8), hairMat);
        bun.position.set(0, 1.8, 0.06);
        this.characterGroup.add(bun);
        break;
      }
      case 'sidePart': {
        const geo = new THREE.SphereGeometry(0.255, 14, 12, 0, Math.PI * 2, 0, Math.PI * 0.55);
        const hair = new THREE.Mesh(geo, hairMat);
        hair.position.y = 1.62;
        hair.scale.set(1.02, 0.94, 1.03);
        this.characterGroup.add(hair);
        const swept = new THREE.Mesh(new THREE.SphereGeometry(0.08, 8, 6), hairMat);
        swept.position.set(-0.15, 1.66, -0.14);
        swept.scale.set(1.1, 0.5, 0.7);
        this.characterGroup.add(swept);
        break;
      }
    }
  }

  // --- Seeded RNG helpers ---
  _hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = ((hash << 5) - hash) + str.charCodeAt(i);
      hash |= 0;
    }
    return Math.abs(hash);
  }

  _makeRng(seed) {
    let s = seed;
    return () => {
      s = (s * 1664525 + 1013904223) & 0xffffffff;
      return (s >>> 0) / 0xffffffff;
    };
  }

  _rngInt(max) {
    return Math.floor(this._rng() * max);
  }

  _buildLaptop() {
    const laptopGroup = new THREE.Group();
    laptopGroup.position.set(0, 0.8, -0.1);

    // Base — premium aluminum feel
    const baseMat = new THREE.MeshStandardMaterial({
      color: 0x888892, roughness: 0.15, metalness: 0.7,
    });
    const baseGeo = new THREE.BoxGeometry(0.5, 0.015, 0.35);
    const base = new THREE.Mesh(baseGeo, baseMat);
    base.castShadow = true;
    laptopGroup.add(base);

    // Screen (angled)
    const screenGroup = new THREE.Group();
    screenGroup.position.set(0, 0.008, -0.17);
    screenGroup.rotation.x = -0.25;

    const lidGeo = new THREE.BoxGeometry(0.5, 0.35, 0.008);
    const lid = new THREE.Mesh(lidGeo, baseMat);
    lid.position.y = 0.175;
    screenGroup.add(lid);

    // Screen bezel
    const bezelMat = new THREE.MeshStandardMaterial({
      color: 0x111115, roughness: 0.3, metalness: 0.2,
    });
    const bezel = new THREE.Mesh(
      new THREE.BoxGeometry(0.48, 0.33, 0.003),
      bezelMat
    );
    bezel.position.set(0, 0.175, 0.006);
    screenGroup.add(bezel);

    this.screenFace = new THREE.Mesh(
      new THREE.PlaneGeometry(0.44, 0.29),
      new THREE.MeshStandardMaterial({
        color: SCREEN_COLOR,
        emissive: new THREE.Color(0x1a3366),
        emissiveIntensity: 1.2,
        roughness: 0.05,
      })
    );
    this.screenFace.position.set(0, 0.175, 0.0085);
    screenGroup.add(this.screenFace);

    // Screen light spill onto desk — the glow from the monitor
    const screenLight = new THREE.PointLight(0x334488, 0.3, 2);
    screenLight.position.set(0, 0.1, -0.1);
    screenGroup.add(screenLight);

    laptopGroup.add(screenGroup);

    // Keyboard area — backlit keys effect
    const kbGlow = new THREE.Mesh(
      new THREE.PlaneGeometry(0.4, 0.25),
      new THREE.MeshStandardMaterial({
        color: 0x0a0a12,
        emissive: new THREE.Color(0x111122),
        emissiveIntensity: 0.5,
        roughness: 0.15,
      })
    );
    kbGlow.rotation.x = -Math.PI / 2;
    kbGlow.position.set(0, 0.009, 0.02);
    laptopGroup.add(kbGlow);

    // Trackpad
    const trackpad = new THREE.Mesh(
      new THREE.PlaneGeometry(0.14, 0.1),
      new THREE.MeshStandardMaterial({
        color: 0x777780, roughness: 0.1, metalness: 0.6,
      })
    );
    trackpad.rotation.x = -Math.PI / 2;
    trackpad.position.set(0, 0.009, 0.12);
    laptopGroup.add(trackpad);

    this.group.add(laptopGroup);
  }

  _buildDeskProps() {
    // === External Monitor (behind laptop) ===
    const monitorMat = new THREE.MeshStandardMaterial({
      color: 0x222230, roughness: 0.25, metalness: 0.5,
    });

    // Monitor frame
    const monFrame = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.55, 0.025), monitorMat);
    monFrame.position.set(0, 1.2, -0.55);
    monFrame.castShadow = true;
    this.group.add(monFrame);

    // Monitor screen
    const monScreen = new THREE.Mesh(
      new THREE.PlaneGeometry(0.82, 0.47),
      new THREE.MeshStandardMaterial({
        color: 0x060e18,
        emissive: new THREE.Color(0x0e2244),
        emissiveIntensity: 0.9,
        roughness: 0.05,
      })
    );
    monScreen.position.set(0, 1.2, -0.536);
    this.group.add(monScreen);

    // Monitor stand
    const standPole = new THREE.Mesh(
      new THREE.CylinderGeometry(0.02, 0.025, 0.35, 8),
      monitorMat
    );
    standPole.position.set(0, 0.95, -0.55);
    this.group.add(standPole);
    const standBase = new THREE.Mesh(
      new THREE.CylinderGeometry(0.12, 0.12, 0.015, 10),
      new THREE.MeshStandardMaterial({ color: 0x333340, metalness: 0.7, roughness: 0.2 })
    );
    standBase.position.set(0, 0.79, -0.55);
    this.group.add(standBase);

    // === Coffee mug — ceramic with startup logo color ===
    const mugColor = new THREE.Color(this.accent).clone().lerp(new THREE.Color(0xffffff), 0.6);
    const mugMat = new THREE.MeshStandardMaterial({ color: mugColor, roughness: 0.45, metalness: 0.05 });
    const mugBody = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.04, 0.09, 10), mugMat);
    mugBody.position.set(0.9, 0.85, 0.2);
    mugBody.castShadow = true;
    this.group.add(mugBody);

    // Mug handle
    const handle = new THREE.Mesh(
      new THREE.TorusGeometry(0.025, 0.006, 6, 10, Math.PI),
      mugMat
    );
    handle.position.set(0.945, 0.85, 0.2);
    handle.rotation.y = Math.PI / 2;
    this.group.add(handle);

    // Coffee surface
    const coffee = new THREE.Mesh(
      new THREE.CircleGeometry(0.038, 10),
      new THREE.MeshStandardMaterial({ color: 0x3a2010, roughness: 0.9 })
    );
    coffee.position.set(0.9, 0.9, 0.2);
    coffee.rotation.x = -Math.PI / 2;
    this.group.add(coffee);

    // === Phone (lying on desk) ===
    const phoneMat = new THREE.MeshStandardMaterial({
      color: 0x111118, roughness: 0.15, metalness: 0.4,
    });
    const phone = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.008, 0.16), phoneMat);
    phone.position.set(-0.85, 0.81, 0.15);
    phone.rotation.y = 0.2;
    phone.castShadow = true;
    this.group.add(phone);

    // Phone screen (dim glow)
    const phoneScreen = new THREE.Mesh(
      new THREE.PlaneGeometry(0.065, 0.13),
      new THREE.MeshStandardMaterial({
        color: 0x0a0a15,
        emissive: new THREE.Color(0x111125),
        emissiveIntensity: 0.4,
        roughness: 0.1,
      })
    );
    phoneScreen.position.set(-0.85, 0.815, 0.15);
    phoneScreen.rotation.x = -Math.PI / 2;
    phoneScreen.rotation.z = 0.2;
    this.group.add(phoneScreen);

    // === Small succulent plant ===
    const potMat = new THREE.MeshStandardMaterial({ color: 0xcc8844, roughness: 0.7 });
    const pot = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.035, 0.05, 6), potMat);
    pot.position.set(1.05, 0.83, -0.3);
    this.group.add(pot);

    const plantMat = new THREE.MeshStandardMaterial({ color: 0x44aa55, roughness: 0.7 });
    for (let i = 0; i < 4; i++) {
      const leaf = new THREE.Mesh(new THREE.SphereGeometry(0.025, 6, 5), plantMat);
      leaf.position.set(
        1.05 + (Math.random() - 0.5) * 0.03,
        0.87 + Math.random() * 0.02,
        -0.3 + (Math.random() - 0.5) * 0.03
      );
      leaf.scale.set(1, 0.6, 1);
      this.group.add(leaf);
    }

    // === Energy drink can ===
    const canMat = new THREE.MeshStandardMaterial({
      color: this.accent, roughness: 0.3, metalness: 0.6,
    });
    const can = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.1, 8), canMat);
    can.position.set(-0.7, 0.85, -0.35);
    can.castShadow = true;
    this.group.add(can);

    // Can top
    const canTop = new THREE.Mesh(
      new THREE.CylinderGeometry(0.025, 0.025, 0.003, 8),
      new THREE.MeshStandardMaterial({ color: 0xaaaaaa, metalness: 0.8, roughness: 0.2 })
    );
    canTop.position.set(-0.7, 0.9, -0.35);
    this.group.add(canTop);
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

    // Subtle head movement - looks at screen, occasionally glances around
    const headBaseY = Math.sin(elapsed * 0.3 + this._bobOffset) * 0.1;
    const headBaseX = Math.sin(elapsed * 0.5 + this._bobOffset * 2) * 0.03;
    this.head.rotation.y = headBaseY;
    this.head.rotation.x = headBaseX;

    // Eye tracking (pupils follow head direction slightly)
    if (this._leftPupil && this._rightPupil) {
      const eyeShift = Math.sin(elapsed * 0.3 + this._bobOffset) * 0.005;
      this._leftPupil.position.x = -0.085 + eyeShift;
      this._rightPupil.position.x = 0.085 + eyeShift;
    }

    // Typing animation — elbow pivots oscillate, wrists bob slightly
    const typePhase = Math.sin(elapsed * 7 + this._bobOffset);
    const typePhase2 = Math.sin(elapsed * 7 + this._bobOffset + Math.PI * 0.7);
    if (this.leftArm) {
      this.leftArm.rotation.x = -1.15 + typePhase * 0.06;
    }
    if (this.rightArm) {
      this.rightArm.rotation.x = -1.15 + typePhase2 * 0.06;
    }
    if (this._leftHand) {
      this._leftHand.rotation.x = 1.15 + typePhase * 0.03;
    }
    if (this._rightHand) {
      this._rightHand.rotation.x = 1.15 + typePhase2 * 0.03;
    }

    // Subtle shoulder breathing — shoulder pivots sway gently
    const breathe = Math.sin(elapsed * 1.2 + this._bobOffset) * 0.01;
    if (this.leftUpperArm) {
      this.leftUpperArm.rotation.z = 0.2 + breathe;
      this.leftUpperArm.rotation.x = -0.35 + breathe * 0.5;
    }
    if (this.rightUpperArm) {
      this.rightUpperArm.rotation.z = -0.2 - breathe;
      this.rightUpperArm.rotation.x = -0.35 + breathe * 0.5;
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
