import React, { useRef } from 'react';
import { useFrame, extend } from '@react-three/fiber';
import { RingGeometry } from 'three';

// Extend the THREE namespace with the RingGeometry
extend({ RingGeometry });

const HoverEffect = () => {
  const ringRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    ringRef.current.scale.set(1 + Math.sin(t * 2) * 0.1, 1, 1 + Math.sin(t * 2) * 0.1);
    ringRef.current.material.opacity = 0.5 + Math.sin(t * 3) * 0.3;
  });

  return (
    <mesh ref={ringRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.3, 0]}>
      <ringGeometry args={[0.5, 0.7, 32]} />
      <meshBasicMaterial color="lightblue" transparent opacity={0.7} />
    </mesh>
  );
};

export default HoverEffect;
