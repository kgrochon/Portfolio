import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

const ThreeLava: React.FC = () => {
  const mesh = useRef<Mesh>(null!);

  // Update the position of the vertices based on procedural noise
  const updateLava = (geometry: any) => {
    const position = geometry.attributes.position.array;

    for (let i = 0; i < position.length; i += 3) {
      const x = position[i];
      const y = position[i + 1];
      const z = position[i + 2];

      const noise = Math.sin(x * 0.1) * Math.sin(y * 0.1) * 0.5;
      position[i + 2] = z + noise;
    }

    geometry.attributes.position.needsUpdate = true;
  };

  // Update the lava lamp animation
  useFrame(() => {
    if (mesh.current) {
      updateLava(mesh.current.geometry);
    }
  });

  return (
    <mesh ref={mesh}>
      <planeGeometry args={[5, 5, 32, 32]} />
      <meshBasicMaterial color="#ff0000" />
    </mesh>
  );
};

export default ThreeLava;