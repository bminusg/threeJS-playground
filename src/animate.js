export default (renderer, cube, scene, camera) => {
  console.log("ANIMATION", renderer, cube, scene, camera);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
};
