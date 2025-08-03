'use client'

import { useFrame, useThree } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

export function Particles({ count = 1000 }) {
  const { viewport } = useThree();
  const particlesRef = useRef();

  // Initialize particles with positions, velocities, and sizes
  const [positions, particles] = useMemo(() => {
    const positions = new Float32Array(count * 3); // For x, y, z of each particle
    const particlesData = [];
    for (let i = 0; i < count; i++) {
      const x = Math.random() * viewport.width - viewport.width / 2;
      const y = Math.random() * viewport.height - viewport.height / 2;
      const z = Math.random() * 10 - 5;
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      const velocity = new THREE.Vector3(0, -0.5, 0);
      const size = Math.random() * 0.5 + 0.5;
      particlesData.push({ position: new THREE.Vector3(x, y, z), velocity, size });
    }
    return [positions, particlesData];
  }, [count, viewport]);

  // Update particle positions on each frame
  useFrame(() => {
    const positionsArray = particlesRef.current.geometry.attributes.position.array;

    particles.forEach((particle, i) => {
      particle.position.add(particle.velocity);
      if (particle.position.y < -viewport.height / 2) {
        particle.position.y = viewport.height / 2;
      }
      // Update positions array
      positionsArray[i * 3] = particle.position.x;
      positionsArray[i * 3 + 1] = particle.position.y;
      positionsArray[i * 3 + 2] = particle.position.z;
    });

    particlesRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        {/* Attach the positions array directly */}
        <bufferGeometry attach="attributes-position" array={positions} itemSize={3} count={count} />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#3B82F6"
        transparent
        opacity={0.6}
        sizeAttenuation={true}
      />
    </points>
  );
}