// src/components/BreathingGuide.js
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const BreathingGuide = () => {
  const breathingOrb = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    breathingOrb.current.scale.set(1 + Math.sin(t * 2) * 0.1, 1 + Math.sin(t * 2) * 0.1, 1 + Math.sin(t * 2) * 0.1);
  });

  return (
    <mesh ref={breathingOrb} position={[0, 0, -1]}>
      <sphereBufferGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="lightblue" />
    </mesh>
  );
};

export default BreathingGuide;
