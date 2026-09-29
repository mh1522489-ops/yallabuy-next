'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export function HeroVisual() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const mount = mountRef.current;

    if (!mount || error) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    try {
      const width = mount.clientWidth;
      const height = mount.clientHeight;

      if (!width || !height) {
        return;
      }

      const scene = new THREE.Scene();

      const camera = new THREE.PerspectiveCamera(
        50,
        width / height,
        0.1,
        1000,
      );

      camera.position.z = 8;

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });

      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      mount.appendChild(renderer.domElement);

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
      directionalLight.position.set(5, 5, 5);
      scene.add(directionalLight);

      const inkMaterial = new THREE.MeshStandardMaterial({
        color: 0x17191c,
        roughness: 0.8,
        metalness: 0.1,
      });

      const peachMaterial = new THREE.MeshStandardMaterial({
        color: 0xfbe1d1,
        roughness: 0.5,
        metalness: 0.2,
      });

      const grayMaterial = new THREE.MeshStandardMaterial({
        color: 0xa3a6af,
        roughness: 0.6,
        metalness: 0.1,
      });

      const group = new THREE.Group();

      const mainGeometry = new THREE.BoxGeometry(2, 1.2, 0.2);
      const mainMesh = new THREE.Mesh(mainGeometry, inkMaterial);

      group.add(mainMesh);

      const fragment1 = new THREE.Mesh(
        new THREE.PlaneGeometry(1.5, 0.8),
        grayMaterial,
      );

      fragment1.position.set(1.5, 0.8, -0.5);
      group.add(fragment1);

      const fragment2 = new THREE.Mesh(
        new THREE.PlaneGeometry(0.8, 0.4),
        peachMaterial,
      );

      fragment2.position.set(-1.5, -0.5, 0.5);
      group.add(fragment2);

      const lineGeometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(-1.5, -0.5, 0.5),
        new THREE.Vector3(0, 0, 0.1),
        new THREE.Vector3(1.5, 0.8, -0.5),
      ]);

      const lineMaterial = new THREE.LineBasicMaterial({
        color: 0x979799,
      });

      const line = new THREE.Line(lineGeometry, lineMaterial);

      group.add(line);
      scene.add(group);

      let mouseX = 0;
      let mouseY = 0;

      const handleMouseMove = (event: MouseEvent) => {
        mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      };

      window.addEventListener('mousemove', handleMouseMove);

      let frameId = 0;

      const animate = () => {
        frameId = requestAnimationFrame(animate);

        if (!prefersReducedMotion) {
          group.rotation.y += 0.002;
          group.rotation.x += 0.001;
        }

        camera.position.x +=
          (mouseX * 0.5 - camera.position.x) * 0.05;

        camera.position.y +=
          (mouseY * 0.5 - camera.position.y) * 0.05;

        camera.lookAt(scene.position);

        renderer.render(scene, camera);
      };

      animate();

      const handleResize = () => {
        const newWidth = mount.clientWidth;
        const newHeight = mount.clientHeight;

        if (!newWidth || !newHeight) {
          return;
        }

        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(newWidth, newHeight);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', handleResize);

        cancelAnimationFrame(frameId);

        mainGeometry.dispose();
        inkMaterial.dispose();
        peachMaterial.dispose();
        grayMaterial.dispose();
        lineGeometry.dispose();
        lineMaterial.dispose();

        renderer.dispose();

        if (renderer.domElement.parentNode === mount) {
          mount.removeChild(renderer.domElement);
        }
      };
    } catch (webglError) {
      console.error('WebGL initialization failed:', webglError);
      setError(true);
    }
  }, [error]);

  if (error) {
    return (
      <div className="flex h-full w-full items-center justify-center rounded-24px bg-mist-gray">
        <div className="relative h-20 w-32 rounded-md bg-ink-black">
          <div className="absolute -right-8 -top-4 h-10 w-16 rounded-sm bg-blush-peach shadow-sm" />
          <div className="absolute -bottom-6 -left-10 h-12 w-20 rounded-sm border border-mist-gray bg-fog-white shadow-sm" />
        </div>
      </div>
    );
  }

  return <div ref={mountRef} className="h-full w-full" />;
}

