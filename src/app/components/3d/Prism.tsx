import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { MeshTransmissionMaterial, Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

import { useMediaQuery } from '../../hooks/useMediaQuery';

export function Prism() {
    const meshRef = useRef<THREE.Mesh>(null);
    const { viewport, mouse } = useThree();
    const isTouch = useMediaQuery('(pointer: coarse)');

    useFrame((state, delta) => {
        if (meshRef.current) {
            // Base rotation
            meshRef.current.rotation.x += delta * 0.15;
            meshRef.current.rotation.y += delta * 0.2;

            // Smooth mouse tilt effect using damp for better performance and feel
            const targetX = (mouse.x * viewport.width) / 12;
            const targetY = (mouse.y * viewport.height) / 12;

            meshRef.current.rotation.x = THREE.MathUtils.damp(meshRef.current.rotation.x, targetY, 2, delta);
            meshRef.current.rotation.y = THREE.MathUtils.damp(meshRef.current.rotation.y, targetX, 2, delta);
        }
    });

    return (
        <>
            <Environment preset="apartment" /> {/* Lighter environment than city */}
            <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5}>
                <mesh ref={meshRef}>
                    <icosahedronGeometry args={[2, 0]} />
                    <MeshTransmissionMaterial
                        backside={false}
                        thickness={0.5} // Thinner for better clarity without blend
                        chromaticAberration={0.02}
                        anisotropy={0}
                        distortion={0} // Disable distortion for performance
                        distortionScale={0}
                        temporalDistortion={0}
                        ior={1.2} // Lower IOR for subtler look
                        color="#ffffff" // White for better natural blending
                        clearcoat={0.5}
                        roughness={0.1}
                        transmission={1}
                        samples={isTouch ? 1 : 2} // Minimal samples for peak performance
                        resolution={isTouch ? 128 : 256} // Minimal resolution
                    />
                </mesh>
            </Float>
        </>
    );
}
