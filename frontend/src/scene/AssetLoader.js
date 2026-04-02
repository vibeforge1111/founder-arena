import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';

/**
 * Centralized asset loader with caching for GLTF/GLB models and textures.
 * Singleton pattern — import and use the shared instance.
 */
class AssetLoaderClass {
  constructor() {
    this._gltfLoader = new GLTFLoader();
    this._textureLoader = new THREE.TextureLoader();
    this._modelCache = new Map();
    this._textureCache = new Map();
    this._loadingManager = new THREE.LoadingManager();
    this._pendingLoads = new Map();

    // Setup DRACO decoder for compressed models
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.7/');
    dracoLoader.setDecoderConfig({ type: 'js' });
    this._gltfLoader.setDRACOLoader(dracoLoader);

    this._gltfLoader.manager = this._loadingManager;
    this._textureLoader.manager = this._loadingManager;

    this.ready = false;
    this._preloadPromise = null;
  }

  /**
   * Load a GLTF/GLB model. Returns a clone of the cached scene.
   * @param {string} path - Path relative to public/ (e.g. 'models/desk.glb')
   * @returns {Promise<THREE.Group>} Cloned scene group
   */
  async loadModel(path) {
    // Return from cache
    if (this._modelCache.has(path)) {
      return this._cloneModel(this._modelCache.get(path));
    }

    // Deduplicate concurrent loads of the same path
    if (this._pendingLoads.has(path)) {
      await this._pendingLoads.get(path);
      return this._cloneModel(this._modelCache.get(path));
    }

    const promise = new Promise((resolve, reject) => {
      this._gltfLoader.load(
        path,
        (gltf) => {
          this._modelCache.set(path, gltf.scene);
          resolve(gltf.scene);
        },
        undefined,
        (err) => {
          console.error(`[AssetLoader] Failed to load model: ${path}`, err);
          reject(err);
        }
      );
    });

    this._pendingLoads.set(path, promise);
    try {
      await promise;
    } finally {
      this._pendingLoads.delete(path);
    }

    return this._cloneModel(this._modelCache.get(path));
  }

  /**
   * Load a texture with caching.
   * @param {string} path
   * @returns {Promise<THREE.Texture>}
   */
  async loadTexture(path) {
    if (this._textureCache.has(path)) {
      return this._textureCache.get(path);
    }

    return new Promise((resolve, reject) => {
      this._textureLoader.load(
        path,
        (texture) => {
          this._textureCache.set(path, texture);
          resolve(texture);
        },
        undefined,
        (err) => {
          console.error(`[AssetLoader] Failed to load texture: ${path}`, err);
          reject(err);
        }
      );
    });
  }

  /**
   * Preload a list of model paths. Call early to warm the cache.
   * @param {string[]} paths
   * @returns {Promise<void>}
   */
  async preload(paths) {
    const results = await Promise.allSettled(
      paths.map(p => this.loadModel(p))
    );
    const failed = results.filter(r => r.status === 'rejected');
    if (failed.length > 0) {
      console.warn(`[AssetLoader] ${failed.length}/${paths.length} models failed to preload`);
    }
    this.ready = true;
  }

  /**
   * Deep clone a GLTF scene so each instance is independent.
   */
  _cloneModel(scene) {
    const clone = scene.clone(true);
    // Clone materials so instances can be colored independently
    clone.traverse((child) => {
      if (child.isMesh) {
        child.material = child.material.clone();
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    return clone;
  }

  /**
   * Dispose all cached assets — call on app teardown.
   */
  dispose() {
    for (const [, scene] of this._modelCache) {
      scene.traverse((child) => {
        if (child.isMesh) {
          child.geometry.dispose();
          if (child.material.map) child.material.map.dispose();
          child.material.dispose();
        }
      });
    }
    this._modelCache.clear();

    for (const [, tex] of this._textureCache) {
      tex.dispose();
    }
    this._textureCache.clear();
  }
}

// Singleton
export const AssetLoader = new AssetLoaderClass();
