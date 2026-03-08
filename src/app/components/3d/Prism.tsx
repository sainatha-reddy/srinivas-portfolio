import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { MeshTransmissionMaterial, Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

export function Prism() {
    const meshRef = useRef<THREE.Mesh>(null);
    const { viewport, mouse } = useThree();

    useFrame((state, delta) => {
        if (meshRef.current) {
            // Base rotation
            meshRef.current.rotation.x += delta * 0.2;
            meshRef.current.rotation.y += delta * 0.3;

            // Mouse tilt effect
            const targetX = (mouse.x * viewport.width) / 10;
            const targetY = (mouse.y * viewport.height) / 10;

            meshRef.current.rotation.x += (targetY - meshRef.current.rotation.x) * 0.1;
            meshRef.current.rotation.y += (targetX - meshRef.current.rotation.y) * 0.1;
        }
    });

    return (
        <>
            <Environment preset="city" />
            <Float speed={2} rotationIntensity={1} floatIntensity={2}>
                <mesh ref={meshRef}>
                    {/* A complex geometry like an Icosahedron looks great with transmission */}
                    <icosahedronGeometry args={[2, 0]} />

                    <MeshTransmissionMaterial
                        backside
                        backsideThickness={1}
                        thickness={2}
                        chromaticAberration={1}
                        anisotropy={0.5}
                        distortion={0.5}
                        distortionScale={0.5}
                        temporalDistortion={0.1}
                        ior={1.5}
                        color="#e0f2fe" // sky-100
                        clearcoat={1}
                    />
                </mesh>
            </Float>
        </>
    );
}
