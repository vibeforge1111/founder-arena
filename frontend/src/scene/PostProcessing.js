import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

/**
 * Post-processing pipeline: Bloom + Vignette + Color grading
 * Gives the scene a cinematic, polished look.
 */
export class PostProcessing {
  constructor(renderer, scene, camera) {
    this.renderer = renderer;
    this.scene = scene;
    this.camera = camera;

    const size = new THREE.Vector2();
    renderer.getSize(size);

    this.composer = new EffectComposer(renderer);

    // 1. Base render pass
    const renderPass = new RenderPass(scene, camera);
    this.composer.addPass(renderPass);

    // 2. Bloom — makes emissive surfaces (screens, lights) glow
    this.bloomPass = new UnrealBloomPass(
      new THREE.Vector2(size.x, size.y),
      0.4,   // strength — subtle, not overwhelming
      0.6,   // radius — spread of glow
      0.85   // threshold — only bright things bloom
    );
    this.composer.addPass(this.bloomPass);

    // 3. Vignette + Color grading shader
    const vignetteShader = {
      uniforms: {
        tDiffuse: { value: null },
        darkness: { value: 0.3 },
        offset: { value: 1.4 },
        // Color grading: slight warm tint for startup office vibe
        tintColor: { value: new THREE.Vector3(1.01, 0.99, 0.97) },
        contrast: { value: 1.05 },
        brightness: { value: 0.02 },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D tDiffuse;
        uniform float darkness;
        uniform float offset;
        uniform vec3 tintColor;
        uniform float contrast;
        uniform float brightness;
        varying vec2 vUv;

        void main() {
          vec4 texel = texture2D(tDiffuse, vUv);

          // Vignette
          vec2 uv = (vUv - vec2(0.5)) * vec2(offset);
          float vig = clamp(1.0 - dot(uv, uv), 0.0, 1.0);
          texel.rgb *= mix(1.0 - darkness, 1.0, vig);

          // Color grading
          texel.rgb = (texel.rgb - 0.5) * contrast + 0.5 + brightness;
          texel.rgb *= tintColor;

          gl_FragColor = texel;
        }
      `,
    };

    this.vignettePass = new ShaderPass(vignetteShader);
    this.composer.addPass(this.vignettePass);

    // 4. Output pass (tone mapping + color space)
    const outputPass = new OutputPass();
    this.composer.addPass(outputPass);
  }

  render() {
    this.composer.render();
  }

  setSize(width, height) {
    this.composer.setSize(width, height);
  }

  dispose() {
    this.composer.dispose();
  }
}
