let camera, scene, renderer, geometry, material, mesh;

init();
animate();

function init() {
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.set(0, 0, 500);
    scene = new THREE.Scene();
    scene.add(camera);

    geometry = new THREE.IcosahedronGeometry(200, 1);
    material = new THREE.MeshNormalMaterial();

    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor("skyblue", 1);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
}

function animate() {
    requestAnimationFrame(animate);
    mesh.rotation.x = Date.now() * 0.00005;
    mesh.rotation.y = Date.now() * 0.0001;
    renderer.render(scene, camera);
}