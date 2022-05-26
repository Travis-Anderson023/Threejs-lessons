import "./style.css";
import * as THREE from "three";
import gsap from "gsap";
console.log(gsap);

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

//clock
const clock = new THREE.Clock();

//actions
//spin
let spin = document.getElementById("spin");
let spinClock = new THREE.Clock();
let spinAnimation = () => {
  let elapsedTime = spinClock.getElapsedTime();
  if (elapsedTime < 1) {
    console.log(elapsedTime);
    mesh.rotation.x = elapsedTime;
    spinAnimation();
  } else {
    console.log("yes");
  }
};
spin.addEventListener("click", () => {
  spinClock = new THREE.Clock();
  spinAnimation();
});

const tick = () => {
  //clock
  const elapsedTime = clock.getElapsedTime();
  console.log(elapsedTime);
  //time

  //render
  renderer.render(scene, camera);
  //animation
  window.requestAnimationFrame(tick);
};
tick();
