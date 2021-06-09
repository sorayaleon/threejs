import * as THREE from "../../node_modules/three/build/three.module.js"

// Get a reference to the container element that will hold our scene
const container = document.querySelector('#scene-container');

// create a Scene
const scene = new THREE.Scene();

// Set the background color
scene.background = new THREE.Color('skyblue');

