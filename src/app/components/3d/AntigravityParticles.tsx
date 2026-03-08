import { useRef, useMemo, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const PARTICLE_COUNT = 3000;

export function AntigravityParticles() {
    const meshRef = useRef<THREE.InstancedMesh>(null);
    const { mouse, viewport } = useThree();

    // Create base geometry and material
    const geometry = useMemo(() => new THREE.SphereGeometry(0.015, 8, 8), []);
    const material = useMemo(
        () =>
            new THREE.MeshStandardMaterial({
                color: '#60a5fa', // blue-400
                emissive: '#3b82f6', // blue-500
                emissiveIntensity: 0.5,
                roughness: 0.2,
                metalness: 0.8,
            }),
        []
    );

    // Initialize particle positions, velocities, and original positions
    const { positions, velocities, originalPositions } = useMemo(() => {
        const pos = new Float32Array(PARTICLE_COUNT * 3);
        const vel = new Float32Array(PARTICLE_COUNT * 3);
        const orig = new Float32Array(PARTICLE_COUNT * 3);

        for (let i = 0; i < PARTICLE_COUNT; i++) {
            // Golden ratio spiral for a "magnetic ring" or "neural core" look
            const phi = Math.acos(-1 + (2 * i) / PARTICLE_COUNT);
            const theta = Math.sqrt(PARTICLE_COUNT * Math.PI) * phi;

            const r = 2 + (Math.random() - 0.5) * 0.5; // Radius with some fuzziness

            const x = r * Math.cos(theta) * Math.sin(phi);
            const y = r * Math.sin(theta) * Math.sin(phi);
            const z = r * Math.cos(phi);

            pos[i * 3] = x;
            pos[i * 3 + 1] = y;
            pos[i * 3 + 2] = z;

            orig[i * 3] = x;
            orig[i * 3 + 1] = y;
            orig[i * 3 + 2] = z;

            vel[i * 3] = 0;
            vel[i * 3 + 1] = 0;
            vel[i * 3 + 2] = 0;
        }
        return { positions: pos, velocities: vel, originalPositions: orig };
    }, []);

    const dummy = useMemo(() => new THREE.Object3D(), []);

    useFrame((state, delta) => {
        if (!meshRef.current) return;

        // Convert mouse to world coordinates relative to camera distance
        const mouseX = (mouse.x * viewport.width) / 2;
        const mouseY = (mouse.y * viewport.height) / 2;

        for (let i = 0; i < PARTICLE_COUNT; i++) {
            const idx3 = i * 3;

            let x = positions[idx3];
            let y = positions[idx3 + 1];
            let z = positions[idx3 + 2];

            const origX = originalPositions[idx3];
            const origY = originalPositions[idx3 + 1];
            const origZ = originalPositions[idx3 + 2];

            // Mouse repulsion
            const dx = mouseX - x;
            const dy = mouseY - y;
            const distanceToMouse = Math.sqrt(dx * dx + dy * dy);

            // Force calculation (repel from mouse)
            const maxDistance = 2.0;
            if (distanceToMouse < maxDistance) {
                const force = (maxDistance - distanceToMouse) * 5.0; // Str of repulsion
                velocities[idx3] -= (dx / distanceToMouse) * force * delta;
                velocities[idx3 + 1] -= (dy / distanceToMouse) * force * delta;
                // subtle z push
                velocities[idx3 + 2] -= force * delta * 0.5;
            }

            // Return to original position (spring force)
            velocities[idx3] += (origX - x) * 2.0 * delta;
            velocities[idx3 + 1] += (origY - y) * 2.0 * delta;
            velocities[idx3 + 2] += (origZ - z) * 2.0 * delta;

            // Apply friction
            velocities[idx3] *= 0.95;
            velocities[idx3 + 1] *= 0.95;
            velocities[idx3 + 2] *= 0.95;

            // Update positions
            positions[idx3] += velocities[idx3];
            positions[idx3 + 1] += velocities[idx3 + 1];
            positions[idx3 + 2] += velocities[idx3 + 2];

            // Slow global rotation
            const time = state.clock.elapsedTime;
            const currentRadius = Math.sqrt(x * x + z * z);
            const angle = Math.atan2(z, x) + delta * 0.1;

            dummy.position.set(
                currentRadius * Math.cos(angle),
                y,
                currentRadius * Math.sin(angle)
            );

            // Update the instance matrix
            dummy.updateMatrix();
            meshRef.current.setMatrixAt(i, dummy.matrix);
        }

        meshRef.current.instanceMatrix.needsUpdate = true;
    });

    // Pre-calculate initial matrices
    useEffect(() => {
        if (!meshRef.current) return;
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            dummy.position.set(positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2]);
            dummy.updateMatrix();
            meshRef.current.setMatrixAt(i, dummy.matrix);
        }
        meshRef.current.instanceMatrix.needsUpdate = true;
    }, [positions, dummy]);

    return (
        <instancedMesh
            ref={meshRef}
            args={[geometry, material, PARTICLE_COUNT]}
        />
    );
}
