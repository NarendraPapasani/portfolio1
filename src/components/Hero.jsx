import React, { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const Hero = () => {
  useEffect(() => {
    const canvas = document.getElementById("heroCanvas");
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = true;
    controls.enablePan = false;

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <canvas id="heroCanvas" className="absolute top-0 left-0 w-full h-full" />
      <div className="relative z-10 text-center text-white flex flex-col items-center justify-center h-full">
        <h1 className="text-5xl font-extrabold mb-4">Narendra Sai</h1>
        <p className="text-2xl mb-6">Web Developer</p>
        <button className="px-6 py-3 bg-white text-blue-500 font-bold rounded-lg shadow-lg hover:bg-gray-200">
          View My Work
        </button>
      </div>
    </div>
  );
};

export default Hero;
