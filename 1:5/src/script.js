import "./style.css";
import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Objects
 */
const capGroup = new THREE.Group();
scene.add(capGroup);

const geometry = new THREE.CapsuleGeometry(1, 2, 4, 8);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const capsule1 = new THREE.Mesh(geometry, material);

const capsule2 = new THREE.Mesh(geometry, material);
capsule2.rotation.z = Math.PI * 0.5;

capGroup.add(capsule1);
capGroup.add(capsule2);
capGroup.rotation.z = Math.PI * 0.25;

/**
 * Sizes
 */
const sizes = {
  width: 800,
  height: 600,
};

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 10;
scene.add(camera);
/**
 * Renderer
 */

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
