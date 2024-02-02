"use client";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Particles = () => {
 const particles = useRef<THREE.Points | null>(null);

  const particlesCount = 500;
  const particlesGeometry = new THREE.BufferGeometry();
  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.01,
    color: new THREE.Color("#0a30f2"),
    transparent: true,
    blending: THREE.AdditiveBlending,
  });
   const particlesPositions = new Float32Array(particlesCount * 3);

  for (let i = 0; i < particlesCount * 3; i++) {
    particlesPositions[i] = (Math.random() - 0.5) * 10; // Random initial positions
  }

  particlesGeometry.setAttribute("position", new THREE.BufferAttribute(particlesPositions, 3));

  useFrame(() => {
    if (particles.current) {
      particles.current.rotation.y += 0.002; // Rotate the particles slowly
    }
  });
  return <points ref={particles} geometry={particlesGeometry} material={particlesMaterial} />;
};

const BackgroundParticles: React.FC = () => {
  return (
    <div className="w-full h-screen absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <directionalLight intensity={0.5} position={[0, 10, 0]} />
        <Particles />
      </Canvas>
    </div>
  );
};

export default BackgroundParticles;

