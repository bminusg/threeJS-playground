import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  MeshNormalMaterial,
  Mesh,
} from "three";

const renderer = new WebGLRenderer({ antialias: true });
const scene = new Scene();
const camera = new PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const geometry = new BoxGeometry(1, 1, 1);
const material = new MeshNormalMaterial();
const cube = new Mesh(geometry, material);

scene.add(cube);
camera.position.z = 5;

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// ANIMATIONS

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();
