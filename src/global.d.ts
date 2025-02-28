import * as THREE from "three";

declare global {
  interface Window {
    renderer: THREE.WebGLRenderer;
    safari?: any
    opera?: any;
    MSStream?: any;
  }
}
