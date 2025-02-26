'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function MinimalThreeBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        console.log('Canvas mounted, initializing THREE.js...');

        // Create renderer directly using the provided canvas
        const renderer = new THREE.WebGLRenderer({
            canvas: canvasRef.current,
            alpha: false,
            antialias: true,
        });

        // Set renderer properties
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x0a0a0a); // Match --background from globals.css

        // Create scene
        const scene = new THREE.Scene();

        // Create camera
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 200;

        // Create a simple star field
        const starGeometry = new THREE.BufferGeometry();
        const starMaterial = new THREE.PointsMaterial({
            color: 0xffffff,
            size: 2,
            sizeAttenuation: true,
        });

        // Create 1000 stars
        const starVertices = [];
        for (let i = 0; i < 1000; i++) {
            const x = (Math.random() - 0.5) * 2000;
            const y = (Math.random() - 0.5) * 2000;
            const z = (Math.random() - 0.5) * 2000;
            starVertices.push(x, y, z);
        }

        starGeometry.setAttribute(
            'position',
            new THREE.Float32BufferAttribute(starVertices, 3)
        );

        const stars = new THREE.Points(starGeometry, starMaterial);
        scene.add(stars);

        // Create a blue nebula-like effect
        const nebulaGeometry = new THREE.PlaneGeometry(2000, 2000);
        const nebulaMaterial = new THREE.MeshBasicMaterial({
            color: 0x1e3a8a, // var(--primary) from globals.css
            transparent: true,
            opacity: 0.1,
            side: THREE.DoubleSide,
        });

        const nebula = new THREE.Mesh(nebulaGeometry, nebulaMaterial);
        nebula.position.z = -500;
        scene.add(nebula);

        // Handle window resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);

            // Slowly rotate the stars
            stars.rotation.y += 0.0005;
            stars.rotation.x += 0.0002;

            renderer.render(scene, camera);
        };

        // Run the animation
        animate();

        // Cleanup
        return () => {
            console.log('Cleaning up THREE.js resources');
            window.removeEventListener('resize', handleResize);

            // Dispose resources
            starGeometry.dispose();
            starMaterial.dispose();
            nebulaGeometry.dispose();
            nebulaMaterial.dispose();
            renderer.dispose();

            // Remove any listeners
            stars.removeFromParent();
            nebula.removeFromParent();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                display: 'block',
                background: '#0a0a0a', // Match --background from globals.css
            }}
        />
    );
}
