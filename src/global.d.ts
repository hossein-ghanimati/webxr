import * as THREE from "three";

declare global {
  interface Window {
    renderer: THREE.WebGLRenderer;
  }
}