"use client";

import {
  Environment,
  Float,
  MeshDistortMaterial,
  PointMaterial,
  Points,
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import type * as THREE from "three";

const RobotBrain = () => {
  const { mouse } = useThree();
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  // In a real scenario, we'd load a 3D model.
  // Here we simulate a "complex AI core" using high-detail geometry and textures.

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // Aggressive mouse reaction
    const targetRotationX = mouse.y * 1.5;
    const targetRotationY = mouse.x * 1.5;

    groupRef.current.rotation.x +=
      (targetRotationX - groupRef.current.rotation.x) * 0.1;
    groupRef.current.rotation.y +=
      (targetRotationY - groupRef.current.rotation.y) * 0.1;

    // Dramatic floating
    groupRef.current.position.y = Math.sin(time * 0.5) * 0.3;
    groupRef.current.position.x = Math.cos(time * 0.3) * 0.2;
  });

  return (
    <group ref={groupRef}>
      {/* The "AI Core" - Simpler, more focused */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[2.5, 64, 64]} />
        <MeshDistortMaterial
          color="#ffffff"
          speed={1}
          distort={0.2}
          radius={1}
          roughness={0.2}
          metalness={0.5}
          emissive="#00b4d8"
          emissiveIntensity={0.05}
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* Faint, elegant wireframe */}
      <mesh scale={1.005}>
        <sphereGeometry args={[2.51, 32, 32]} />
        <meshBasicMaterial
          color="#00b4d8"
          wireframe
          transparent
          opacity={0.1}
        />
      </mesh>
    </group>
  );
};

const BackgroundParticles = () => {
  const count = 2000;
  const [positions] = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 20;
      p[i * 3 + 1] = (Math.random() - 0.5) * 20;
      p[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return [p];
  }, []);

  useFrame((state) => {
    state.camera.position.z =
      5 + Math.sin(state.clock.getElapsedTime() * 0.2) * 1;
  });

  return (
    <Points limit={count}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <PointMaterial
        transparent
        color="#00f2ff"
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.4}
      />
    </Points>
  );
};

const Hero3D = () => {
  return (
    <div className="fixed inset-0 -z-10 h-screen w-full bg-[#010305]">
      {/* Cinematic Overlay Gradients */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/10 via-transparent to-purple-900/10 z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_90%)] z-10" />

      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00f2ff" />
        <pointLight
          position={[-10, -10, -10]}
          intensity={0.5}
          color="#bc13fe"
        />

        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
          <RobotBrain />
        </Float>

        <BackgroundParticles />

        <Environment preset="city" />
        <fog attach="fog" args={["#010305", 2, 10]} />
      </Canvas>

      {/* Cinematic Scanline & Glitch Texture Overlay */}
      <div className="scanline" />
      <div className='absolute inset-0 pointer-events-none opacity-[0.03] bg-[url("https://grainy-gradients.vercel.app/noise.svg")] z-50' />
    </div>
  );
};

export default Hero3D;
