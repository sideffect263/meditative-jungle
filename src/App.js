// src/App.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import MeditationScene from './components/MeditationScene';
import CameraControls from './components/CameraControls';
import SoundManager from './components/SoundManager';

function App() {
  return (
    <div style={{ height: '100vh' }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <MeditationScene />
        <CameraControls />
      </Canvas>
      <SoundManager />
    </div>
  );
}

export default App;
