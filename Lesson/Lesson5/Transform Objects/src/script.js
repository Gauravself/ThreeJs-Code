import "./style.css";
import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
mesh.position.x = 0.6;
mesh.position.y = -0.7;
mesh.position.z = 1;
scene.add(mesh);

//Find distance bw center of scene and Object, AKA vector3
console.log(mesh.position.length());

//Distance bw camera and Object
console.log(mesh.position.distanceTo())


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
camera.position.z = 3;
scene.add(camera);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

//Transform Objects
/**
 * Rotate
 * Scale
 * Position
 * quaternion
 */

//Move Objects using Position on Mesh - Mesh inherits position from Object3D
/**
 * x-left,right
 * y-up/down
 * z-forwrd/backward
 */
