import * as THREE from 'three';

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );

let gemotery = new THREE.SphereBufferGeometry(5, 32, 32);
let material = new THREE.MeshBasicMaterial({ color: 0xfff00 });
let sphere = new THREE.Mesh(gemotery, material);
scene.add(sphere);

camera.position.z = 5;

let animate = function() {
  requestAnimationFrame( animate );
  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.01;
  renderer.render(scene, camera );
}

animate();