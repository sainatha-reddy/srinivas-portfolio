import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { AsciiRenderer, Text3D, Center } from '@react-three/drei';
import * as THREE from 'three';

interface AsciiTextProps {
  text: string;
  fontUrl?: string;
}

export function AsciiText({ text, fontUrl = '/fonts/Inter_Bold.json' }: AsciiTextProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  return (
    <>
      <Center>
        <Text3D
          ref={meshRef}
          font={fontUrl}
          size={1.5}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          {text}
          <meshStandardMaterial color="white" />
        </Text3D>
      </Center>
      {/* 
        AsciiRenderer takes the scene and renders it as ASCII characters.
        fgColor and bgColor give it that terminal look.
      */}
      <AsciiRenderer 
        fgColor="#3b82f6" 
        bgColor="transparent" 
        characters=" .:-+*=%@#" 
        resolution={0.15} 
      />
    </>
  );
}
