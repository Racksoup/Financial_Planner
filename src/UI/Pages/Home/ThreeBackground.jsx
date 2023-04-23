import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';

function ThreeBackground() {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const requestRef = useRef(null);
  const previousTimeRef = useRef(null);
  const pointsRef = useRef([]);
  const spheresRef = useRef([]);

  useEffect(() => {
    // Initialize Three.js scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Initialize camera
    const camera = new THREE.PerspectiveCamera(
      75,
      Math.min(window.screen.width, window.innerWidth) / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 2.7;
    camera.position.y = -6.9;
    camera.position.x = 4.8;
    camera.rotation.y = 0.14;
    camera.rotation.x = 0.55;
    cameraRef.current = camera;

    // Initialize renderer
    const renderer = new THREE.WebGLRenderer({ powerPreference: 'high-performance' });
    renderer.setSize(Math.min(window.screen.width, window.innerWidth), window.innerHeight);
    renderer.setClearColor('#141414');
    rendererRef.current = renderer;

    // Add renderer to the container
    containerRef.current.appendChild(renderer.domElement);

    // Create square mesh with points
    const geometry = new THREE.PlaneGeometry(21, 21, 28, 28);
    const material = new THREE.MeshStandardMaterial({
      color: '#fff',
      wireframe: true,
      visible: false,
    });
    const object = new THREE.Mesh(geometry, material);
    object.rotation.z = Math.PI / -2;
    scene.add(object);

    // Create points array
    const points = [];
    const vertices = geometry.attributes.position.array;
    for (let i = 0; i < vertices.length; i += 3) {
      const point = new THREE.Vector3(vertices[i], vertices[i + 1], vertices[i + 2]);
      points.push(point);
    }

    // Create sqheres
    const spheres = [];
    for (let i = 0; i < vertices.length; i += 3) {
      const sphereGeometry = new THREE.SphereGeometry(0.11, 32, 32);
      const sphereMaterial = new THREE.MeshBasicMaterial({ color: '#003c64' });
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      scene.add(sphere);
      spheres.push(sphere);
    }

    // Modify geometry attributes to use points
    geometry.setAttribute(
      'position',
      new THREE.BufferAttribute(new Float32Array(points.length * 3), 3)
    );
    for (let i = 0; i < points.length; i++) {
      geometry.attributes.position.setXYZ(i, points[i].x, points[i].y, points[i].z);
    }

    // Save reference
    pointsRef.current = points;
    spheresRef.current = spheres;

    // Set fps
    let clock = new THREE.Clock();
    let delta = 0;
    let interval = 1 / 45;

    // Animation loop function
    function animate(time) {
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        // Calculate rotation of the mesh
        const rotation = object.rotation;

        // Update object position based on time and rotation
        if (previousTimeRef.current !== undefined) {
          // Apply fps limit
          delta += clock.getDelta();
          if (delta > interval) {
            delta = delta % interval;

            // sd
            for (let i = 0; i < pointsRef.current.length; i++) {
              const point = pointsRef.current[i];

              // Apply rotation to point
              point.applyEuler(rotation);

              // Calculate z position based on diagonal wave
              const distance = Math.sqrt(point.x ** 2 + point.y ** 2);
              const offset = distance * 0.3 - time * 0.005;
              const topLeftDistance = Math.sqrt(
                (geometry.parameters.width / 2 - point.x) ** 2 +
                  (geometry.parameters.height / 2 - point.y) ** 2
              );
              const diagonalOffset = topLeftDistance * 1;
              const offsetTime = (time / 1000) * 2;
              const waveOffset = Math.sin(diagonalOffset - offsetTime);
              point.z = waveOffset * 0.15;

              // Apply rotation to sphere position
              const sphere = spheresRef.current[i];
              const spherePosition = new THREE.Vector3(point.x, point.y, point.z);
              spherePosition.applyEuler(rotation);
              sphere.position.set(spherePosition.x, spherePosition.y, spherePosition.z);

              // Update point position on plane
              geometry.attributes.position.setXYZ(i, point.x, point.y, point.z);
            }
            geometry.attributes.position.needsUpdate = true;
          }
          previousTimeRef.current = time;

          // Render scene
          rendererRef.current.render(sceneRef.current, cameraRef.current);
        }
      }

      // Call next animation frame
      requestRef.current = requestAnimationFrame(animate);
    }

    // Start animation loop
    requestRef.current = requestAnimationFrame(animate);

    // Clean up function
    return () => {
      cancelAnimationFrame(requestRef.current);
      renderer.dispose();
    };
  }, []);

  const handleWindowSizeChange = () => {
    rendererRef.current.setSize(
      Math.min(window.screen.width, window.innerWidth),
      window.innerHeight
    );
  };

  window.addEventListener('resize', handleWindowSizeChange, false);

  // useEffect(() => {
  //   // Update camera position based on scroll position
  //   function handleScroll() {
  //     if (cameraRef.current) {
  //       const scrollY = window.scrollY / window.innerHeight;
  //       cameraRef.current.position.z = scrollY * 10;
  //     }
  //   }
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [cameraRef.current]);

  return <div ref={containerRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }} />;
}

export default ThreeBackground;
