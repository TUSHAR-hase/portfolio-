'use client';

import { useFrame, useThree } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

export function Particles({ count = 1000 }) {
    const { viewport } = useThree();
    const particlesRef = useRef();

    // Initialize particle data
    const particlesData = useMemo(() => {
        const data = [];
        for (let i = 0; i < count; i++) {
            const x = Math.random() * viewport.width - viewport.width / 2;
            const y = Math.random() * viewport.height - viewport.height / 2;
            const z = Math.random() * 10 - 5;
            const velocity = new THREE.Vector3(
                (Math.random() - 0.5) * 0.2, // slight horizontal drift
                (Math.random() - 0.5) * 0.4, // vertical drift
                0
            );
            const size = Math.random() * 0.5 + 0.3;
            data.push({ position: new THREE.Vector3(x, y, z), velocity, size });
        }
        return data;
    }, [count, viewport]);

    // Create positions array for the geometry
    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        particlesData.forEach((p, i) => {
            pos[i * 3] = p.position.x;
            pos[i * 3 + 1] = p.position.y;
            pos[i * 3 + 2] = p.position.z;
        });
        return pos;
    }, [particlesData, count]);

    // Reference to the geometry to update positions
    const geometryRef = useRef();

    // Update positions on each frame
    useFrame(() => {
        if (!geometryRef.current) return;
        const posArray = geometryRef.current.attributes.position.array;

        particlesData.forEach((p, i) => {
            // Update position
            p.position.x += p.velocity.x;
            p.position.y += p.velocity.y;
            p.position.z += p.velocity.z;

            // Wrap around boundaries
            if (p.position.y < -viewport.height / 2) p.position.y = viewport.height / 2;
            if (p.position.y > viewport.height / 2) p.position.y = -viewport.height / 2;
            if (p.position.x < -viewport.width / 2) p.position.x = viewport.width / 2;
            if (p.position.x > viewport.width / 2) p.position.x = -viewport.width / 2;

            // Update array
            posArray[i * 3] = p.position.x;
            posArray[i * 3 + 1] = p.position.y;
            posArray[i * 3 + 2] = p.position.z;
        });

        geometryRef.current.attributes.position.needsUpdate = true;
    });

    return (
        <points ref={particlesRef}>
            <bufferGeometry ref={geometryRef}>
                <bufferAttribute
                    attach="attributes-position"
                    array={positions}
                    itemSize={3}
                    count={count}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.06}
                color="#6366f1" // indigo-500
                transparent
                opacity={0.6}
                sizeAttenuation={true}
                blending={THREE.AdditiveBlending}
                depthWrite={false}
            />
        </points>
    );
}