import * as THREE from "three";

declare global {
  interface Window {
    renderer: THREE.WebGLRenderer;

    opera?: any;
    MSStream?: any;
  }
}
