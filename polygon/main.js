var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
camera.position.set(0, 0, 10);
scene.add(camera);

var geometry = new THREE.BufferGeometry();
var vertices = new Float32Array( [
    -1.0, -1.0,  1.0,
    1.0, -1.0,  1.0,
    1.0,  1.0,  1.0,
]);
geometry.setAttribute('position', new THREE.BufferAttribute( vertices, 3 ));

var material = new THREE.MeshBasicMaterial({color: 0xff00ff});

var mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor("skyblue", 1);
document.body.appendChild(renderer.domElement);
animate();

function animate() {
    requestAnimationFrame(animate);
    render();
}

function render() {
    mesh.rotation.z = Date.now() / 5000;
    renderer.render(scene, camera);
}