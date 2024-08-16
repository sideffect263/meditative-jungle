import React, { useEffect, useRef } from 'react';
import { useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const CameraControls = ({ targetPosition }) => {
  const controlsRef = useRef();
  const { camera } = useThree();

  useEffect(() => {
    if (targetPosition) {
      controlsRef.current.target.set(...targetPosition);
      camera.position.lerp(
        {
          x: targetPosition[0],
          y: targetPosition[1] + 2,
          z: targetPosition[2] + 5,
        },
        0.1
      );
    }
  }, [targetPosition, camera]);

  return (
    <OrbitControls
      ref={controlsRef}
      enableZoom={true}
      minDistance={2}
      maxDistance={10}
    />
  );
};

export default CameraControls;
