//4 things to create scene
/**
 * Scene - Kinda Container
 * Object - putted into scene(Geometries,Import Models from 3d tools,Particles,Light)
 * Camera - Camera,Lights added
 * Renderer - renderer renders a scene
 */

//Scene
const scene = new THREE.Scene();

/**Create Object
 * Create Mesh - triangular Objects that combine to become Objects
 * Combination of Shape(Geopmetry) and Material(Looks)
 * Geometry ->BoxGeometry/BufferGeometry,Material - MeshBasicMaterial
 */

//(1,1,1)-Height,width,depth
const geometry = new THREE.BoxGeometry(1, 1, 1);
//Takes Object as a parameter
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
//Creta Mesh using Geometry,Material
const cubeMesh = new THREE.Mesh(geometry, material);
//Add Mesh to acene
scene.add(cubeMesh);

//Object Will Not be visible without
/**Camera
 * Can be multilpe and switch bw them
 */
const sizes = {
  width: 800,
  height: 800,
};
//Parameters - FOV in degrees (angle),Aspect Ratio-width of render/height of render
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
//add camera to scene
//If canvas becomes black that means we inside object, we need to position camera
camera.position.z = 3;
scene.add(camera);

//Renderer
//Canvas needs to created
const canvas = document.querySelector(".webGL");
//Renderer uses canvas to display objects
const renderer = new THREE.WebGLRenderer({
  canvas,
});
//Set size of renderer acc to camera
renderer.setSize(sizes.width, sizes.height);
//Finally render renderer with scene and camera
renderer.render(scene, camera);




