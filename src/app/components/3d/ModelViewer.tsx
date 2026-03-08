import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { PresentationControls, Environment, Float } from '@react-three/drei';
import * as THREE from 'three';

interface ModelViewerProps {
    modelUrl?: string; // Optional: To load a real .glb/.gltf later
}

// Placeholder: An abstract wireframe brain/node structure
function AbstractNode() {
    const meshRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
        }
    });

    return (
        <group ref={meshRef}>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                <mesh>
                    <icosahedronGeometry args={[1.5, 2]} />
                    <meshStandardMaterial
                        color="#3b82f6"
                        wireframe
                        emissive="#1e3a8a"
                        emissiveIntensity={0.5}
                    />
                </mesh>
                {/* Core */}
                <mesh>
                    <sphereGeometry args={[0.8, 32, 32]} />
                    <meshStandardMaterial
                        color="#60a5fa"
                        roughness={0.1}
                        metalness={0.8}
                        envMapIntensity={2}
                    />
                </mesh>
            </Float>
        </group>
    );
}

export function ModelViewer({ modelUrl }: ModelViewerProps) {
    // If modelUrl is provided, you would use useGLTF(modelUrl) here
    // const { scene } = useGLTF(modelUrl)

    return (
        <>
            <Environment preset="city" />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />

            <PresentationControls
                global={false} // Spin globally or by dragging
                cursor={true} // Whether to toggle cursor style on drag
                snap={true} // Snap-back to center (can also be a spring config)
                speed={1} // Speed factor
                zoom={1} // Zoom factor when half the polar-max is reached
                rotation={[0, 0, 0]} // Default rotation
                polar={[-Math.PI / 4, Math.PI / 4]} // Vertical limits
                azimuth={[-Math.PI / 4, Math.PI / 4]} // Horizontal limits
                config={{ mass: 1, tension: 170, friction: 26 }} // Spring config
            >
                {modelUrl ? (
                    // <primitive object={scene} scale={1.5} />
                    <AbstractNode /> // Fallback for now
                ) : (
                    <AbstractNode />
                )}
            </PresentationControls>
        </>
    );
}
