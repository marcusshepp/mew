'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
    const mountRef = useRef<HTMLDivElement>(null);
    const [error, setError] = useState<string | null>(null);
    const [status, setStatus] = useState<string>('Initializing...');

    useEffect(() => {
        try {
            setStatus('Component mounted');
            console.log('ThreeBackground mounting...', mountRef.current);

            if (!mountRef.current) {
                setError('Mount ref is null');
                return;
            }

            // Check if WebGL is supported
            if (!THREE.WebGLRenderer.isWebGLAvailable()) {
                const warning = THREE.WebGLRenderer.getWebGLErrorMessage();
                setError('WebGL not available: ' + warning.textContent);
                return;
            }

            setStatus('WebGL supported, creating scene');

            // Scene setup with a very basic scene
            const scene = new THREE.Scene();
            scene.background = new THREE.Color(0x440044); // Purple background so it's obviously different

            const camera = new THREE.PerspectiveCamera(
                75,
                window.innerWidth / window.innerHeight,
                0.1,
                1000
            );

            setStatus('Creating renderer');

            // Create renderer with debug settings
            const renderer = new THREE.WebGLRenderer({
                antialias: true,
                powerPreference: 'high-performance',
            });

            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setClearColor(0xff00ff); // Bright pink for debugging
            renderer.setPixelRatio(1); // Lower setting for performance

            setStatus('Adding renderer to DOM');

            // Create a DOM element for the canvas and explicitly set ID and style
            const canvas = renderer.domElement;
            canvas.id = 'three-canvas';
            canvas.style.position = 'absolute';
            canvas.style.top = '0';
            canvas.style.left = '0';
            canvas.style.zIndex = '-1';
            canvas.style.width = '100%';
            canvas.style.height = '100%';

            // Clear the mount point and add the canvas
            while (mountRef.current.firstChild) {
                mountRef.current.removeChild(mountRef.current.firstChild);
            }
            mountRef.current.appendChild(canvas);

            setStatus('Adding test objects');

            // Add a huge colorful cube that should be impossible to miss
            const geometry = new THREE.BoxGeometry(200, 200, 200);
            const material = new THREE.MeshBasicMaterial({
                color: 0x00ff00,
                wireframe: true,
            });
            const cube = new THREE.Mesh(geometry, material);
            scene.add(cube);

            // Position camera
            camera.position.z = 500;

            setStatus('Starting animation loop');

            // Animation loop
            const animate = () => {
                const animationId = requestAnimationFrame(animate);

                // Spin the cube
                cube.rotation.x += 0.01;
                cube.rotation.y += 0.01;

                renderer.render(scene, camera);
            };

            animate();

            // Cleanup
            return () => {
                setStatus('Cleaning up');
                console.log('ThreeBackground unmounting...');

                if (mountRef.current && mountRef.current.contains(canvas)) {
                    mountRef.current.removeChild(canvas);
                }

                scene.remove(cube);
                geometry.dispose();
                material.dispose();
                renderer.dispose();
            };
        } catch (err) {
            console.error('Error in ThreeBackground:', err);
            setError(err instanceof Error ? err.message : String(err));
        }
    }, []);

    return (
        <>
            <div
                ref={mountRef}
                className="fixed inset-0 -z-10"
                style={{
                    width: '100vw',
                    height: '100vh',
                    background: '#222',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                }}
            />

            {/* Debug overlay - visible during development */}
            {(error || status) && (
                <div className="fixed bottom-0 left-0 bg-black bg-opacity-70 text-white p-4 z-50">
                    {error && <p className="text-red-400">Error: {error}</p>}
                    <p>Status: {status}</p>
                </div>
            )}
        </>
    );
}
