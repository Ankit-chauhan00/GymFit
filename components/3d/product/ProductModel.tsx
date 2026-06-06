"use client";
import { Environment, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

import * as THREE from "three";

interface Props {
  modelUrl: string;
}

function Model({ url }: { url: string }) {
  const gltf = useGLTF(url);
  const modelRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!modelRef.current) return;

    // Floating animation
    modelRef.current.position.y = Math.sin(state.clock.elapsedTime) * 3 - 10;

    // Mouse interaction
    modelRef.current.rotation.y = state.pointer.x * 2.5;

    modelRef.current.rotation.x = -state.pointer.y * 4.2;
  });

  return <primitive ref={modelRef} object={gltf.scene} scale={0.15} position={[0, -10, 0]} rotation={[0, 0, 0]} />;
}

const ProductModel = ({ modelUrl }: Props) => {
  return (
    <>
      <Canvas camera={{ position: [0, 20, 55], fov: 45 }}>
        <ambientLight />
        <Model url={modelUrl} />

        <Environment preset="sunset" environmentIntensity={0.5} />
      </Canvas>
    </>
  );
};

export default ProductModel;
