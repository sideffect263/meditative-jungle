import React, { useEffect } from 'react';
import jungleSound from '../sounds/natural-ambience-jungle.wav';

const SoundManager = () => {
  useEffect(() => {
    const handleUserInteraction = () => {
      const audio = new Audio(jungleSound);
      audio.loop = true;
      audio.volume = 0.3;
      audio.play().catch(error => {
        console.error("Audio failed to play: ", error);
      });
    };

    window.addEventListener('click', handleUserInteraction);

    return () => {
      window.removeEventListener('click', handleUserInteraction);
    };
  }, []);

  return null;
};

export default SoundManager;
