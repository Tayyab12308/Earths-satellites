import * as THREE from 'three';

const threejsSphere = () => {

  let scene = new THREE.Scene();
  let camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.01, 1000);

  let renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild( renderer.domElement );

  let geometry = new THREE.SphereBufferGeometry(0.3, 32, 32);
  let texture = new THREE.TextureLoader().load('../../images/earth_surface.jpg')
  let material = new THREE.MeshPhongMaterial({ map: texture })
  let sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);

  let starGeometry = new THREE.SphereGeometry(5, 84, 64);
  let starTexture = new THREE.TextureLoader().load('../../images/starfield.png');
  let starMaterial = new THREE.MeshBasicMaterial({ map: starTexture, side: THREE.BackSide })
  let stars = new THREE.Mesh(starGeometry, starMaterial);
  scene.add(stars)

  scene.add(new THREE.AmbientLight(0x333333));
  let light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(5, 3, 5)
  scene.add(light);

  camera.position.z = 1.5;

  let animate = function() {
    requestAnimationFrame( animate );
    sphere.rotation.x += 0.005;
    sphere.rotation.y += 0.005;
    renderer.render(scene, camera );
  }

  window.scene = scene;
  window.camera = camera;
  window.geometry = geometry;
  animate();
}

export default threejsSphere;