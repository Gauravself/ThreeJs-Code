import "./style.css";
import * as THREE from "three";

//Create Scene
const scene = new THREE.Scene();

//Create Geometry,Material

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
//Create Mesh and add above to mesh
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

//Create Camera
const sizes = {
  width: 800,
  height: 800,
};
const camera = new THREE.PerspectiveCamera(75, sizes.height / sizes.width);
camera.position.z = 3;
scene.add(camera);

//Renderer
let canvas = document.querySelector(".webGL");
const renderer = new THREE.WebGLRenderer({
  canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
