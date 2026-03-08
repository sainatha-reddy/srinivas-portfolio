import { useFrame, useThree } from '@react-three/fiber';
import { Physics, RigidBody, InstancedRigidBodies, RapierRigidBody } from '@react-three/rapier';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

const BALL_COUNT = 50;

function PointerBody() {
    const ref = useRef<RapierRigidBody>(null);
    const { viewport, mouse } = useThree();

    useFrame(({ mouse }) => {
        if (!ref.current) return;
        // Map mouse coordinates to world coordinates
        const x = (mouse.x * viewport.width) / 2;
        const y = (mouse.y * viewport.height) / 2;
        // Update the position of the pointer body
        ref.current.setNextKinematicTranslation({ x, y, z: 0 });
    });

    return (
        <RigidBody position={[0, 0, 0]} type="kinematicPosition" colliders="ball" ref={ref}>
            <mesh>
                <sphereGeometry args={[1, 32, 32]} />
                {/* Invisible collider trailing the mouse to knock balls around */}
                <meshBasicMaterial visible={false} />
            </mesh>
        </RigidBody>
    );
}

function Balls() {
    const instances = useRef(null);

    // Randomize initial positions and rotations
    const positions = useMemo(() => {
        const pos = new Float32Array(BALL_COUNT * 3);
        for (let i = 0; i < BALL_COUNT; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 5;     // x
            pos[i * 3 + 1] = 5 + Math.random() * 5;     // y (drop them from above)
            pos[i * 3 + 2] = (Math.random() - 0.5) * 5; // z
        }
        return pos;
    }, []);

    const rotations = useMemo(() => {
        const rot = new Float32Array(BALL_COUNT * 4);
        for (let i = 0; i < BALL_COUNT; i++) {
            const q = new THREE.Quaternion().random();
            rot[i * 4] = q.x;
            rot[i * 4 + 1] = q.y;
            rot[i * 4 + 2] = q.z;
            rot[i * 4 + 3] = q.w;
        }
        return rot;
    }, []);

    return (
        <InstancedRigidBodies
            positions={positions}
            rotations={rotations}
            colliders="ball"
            restitution={0.8}
            friction={0.2}
        >
            <instancedMesh ref={instances} args={[undefined, undefined, BALL_COUNT]}>
                <sphereGeometry args={[0.5, 32, 32]} />
                <meshStandardMaterial
                    color="#8b5cf6" // purple-500
                    roughness={0.1}
                    metalness={0.8}
                    envMapIntensity={2}
                />
            </instancedMesh>
        </InstancedRigidBodies>
    );
}

// Container walls to keep balls constrained
function Container() {
    const { viewport } = useThree();
    const width = viewport.width;
    const height = viewport.height;

    return (
        <>
            {/* Floor */}
            <RigidBody type="fixed" position={[0, -height / 2, 0]}>
                <mesh visible={false}>
                    <boxGeometry args={[width, 1, 10]} />
                    <meshBasicMaterial color="red" />
                </mesh>
            </RigidBody>

            {/* Walls */}
            <RigidBody type="fixed" position={[-width / 2 - 0.5, 0, 0]}>
                <mesh visible={false}>
                    <boxGeometry args={[1, height * 2, 10]} />
                </mesh>
            </RigidBody>
            <RigidBody type="fixed" position={[width / 2 + 0.5, 0, 0]}>
                <mesh visible={false}>
                    <boxGeometry args={[1, height * 2, 10]} />
                </mesh>
            </RigidBody>

            {/* Front and Back bounds */}
            <RigidBody type="fixed" position={[0, 0, -2]}>
                <mesh visible={false}>
                    <boxGeometry args={[width, height * 2, 1]} />
                </mesh>
            </RigidBody>
            <RigidBody type="fixed" position={[0, 0, 2]}>
                <mesh visible={false}>
                    <boxGeometry args={[width, height * 2, 1]} />
                </mesh>
            </RigidBody>
        </>
    );
}

export function Ballpit() {
    return (
        <Physics gravity={[0, -9.81, 0]}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 10]} intensity={1} castShadow />
            <PointerBody />
            <Balls />
            <Container />
        </Physics>
    );
}
