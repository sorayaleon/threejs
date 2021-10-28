var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
camera.position.set(0, 0, 900);
scene.add(camera);

var geometry = new THREE.SphereGeometry(200, 20, 20);
var texture = new THREE.TextureLoader().load('image.jpg');

var material = new THREE.MeshBasicMaterial({map: texture});

var mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor("black", 1);
document.body.appendChild(renderer.domElement);
animate();

function animate() {
    requestAnimationFrame(animate);
    render();
}

function render() {
    mesh.rotation.y = Date.now() * 0.0001;
    renderer.render(scene, camera);
}