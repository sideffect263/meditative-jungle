import React, { useRef } from 'react';
import { useFrame, extend } from '@react-three/fiber';
import { SphereGeometry } from 'three'; // Import SphereGeometry from THREE

// Extend the THREE namespace with the SphereGeometry
extend({ SphereGeometry });

const BreathingGuide = () => {
  const breathingOrb = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    breathingOrb.current.scale.set(1 + Math.sin(t * 2) * 0.1, 1 + Math.sin(t * 2) * 0.1, 1 + Math.sin(t * 2) * 0.1);
  });

  return (
    <mesh ref={breathingOrb} position={[0, 0, -1]}>
      <sphereGeometry args={[0.5, 32, 32]} /> {/* Use sphereGeometry here */}
      <meshStandardMaterial color="lightblue" />
    </mesh>
  );
};

export default BreathingGuide;
