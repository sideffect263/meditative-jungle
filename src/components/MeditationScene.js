import React from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import meditating_figure_model from '../models/meditating-figure.glb';
import jungle_trees_model from '../models/jungle-trees.glb';
import HoverEffect from './HoverEffect'; // Import the new HoverEffect component

const MeditationFigure = () => {
  const gltf = useLoader(GLTFLoader, meditating_figure_model);
  const breathingLight = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    breathingLight.current.intensity = 1 + Math.sin(t * 2) * 0.5; // Simulates breathing effect
  });

  return (
    <>
      <primitive object={gltf.scene} scale={[0.5, 0.5, 0.5]} />
      <pointLight ref={breathingLight} color="white" intensity={1} position={[0, 2, 0]} />
    </>
  );
};

const JungleEnvironment = () => {
  const trees = useLoader(GLTFLoader, jungle_trees_model, (loader) => {
    console.log('Loading jungle model');
  }, undefined, (error) => {
    console.error('Error loading jungle model:', error);
  });

  return <primitive object={trees.scene} scale={[1, 1, 1]} position={[0,-0.6, 0]} />;
};

const MeditationScene = () => {
  return (
    <>
      <MeditationFigure />
      <HoverEffect /> {/* Add the HoverEffect below the model */}
      <JungleEnvironment />
    </>
  );
};

export default MeditationScene;
