'use client'; // Client-side component for Three.js

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current?.appendChild(renderer.domElement);

        // Dark theme: black background
        scene.background = new THREE.Color(0x000000);

        // Particle system
        const particleCount = 500;
        const particles = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 100; // Random positions in 3D space
        }
        particles.setAttribute(
            'position',
            new THREE.BufferAttribute(positions, 3)
        );

        const particleMaterial = new THREE.PointsMaterial({
            color: 0xffffff, // White particles
            size: 0.5,
            transparent: true,
            opacity: 0.8,
        });
        const particleSystem = new THREE.Points(particles, particleMaterial);
        scene.add(particleSystem);

        camera.position.z = 50;

        // Mouse interaction
        let mouseX = 0;
        let mouseY = 0;
        document.addEventListener('mousemove', (e) => {
            mouseX = (e.clientX / window.innerWidth - 0.5) * 50;
            mouseY = (e.clientY / window.innerHeight - 0.5) * 50;
        });

        // Animation
        const animate = () => {
            requestAnimationFrame(animate);
            particleSystem.rotation.y += 0.001; // Subtle rotation
            camera.position.x += (mouseX - camera.position.x) * 0.05; // Smooth follow
            camera.position.y += (-mouseY - camera.position.y) * 0.05;
            camera.lookAt(scene.position);
            renderer.render(scene, camera);
        };
        animate();

        // Resize handler
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            mountRef.current?.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mountRef} className="fixed inset-0 z-0" />;
}
