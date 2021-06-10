import * as THREE from '../../../node_modules/three/build/three.module.js';

function createRenderer() {
  const renderer = new THREE.WebGLRenderer();

  return renderer;
}

export { createRenderer };
