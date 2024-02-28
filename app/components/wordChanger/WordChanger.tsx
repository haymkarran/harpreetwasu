'use client'
import React, { useState, useEffect } from 'react';
import styles from './WordChanger.module.css';

const words = ['Migrations', 'Cloud', 'Microsoft 365', 'Active Directory'];

const WordChanger: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [animationProgress, setAnimationProgress] = useState(0);

useEffect(() => {
    const intervalId = setInterval(() => {
      setAnimationProgress(0);
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);
  
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, []);
  
  useEffect(() => {
    let animationInterval: NodeJS.Timeout | undefined;
  
    if (animationProgress < words[currentWordIndex].length) {
      animationInterval = setInterval(() => {
        setAnimationProgress((prevProgress) => prevProgress + 1);
      }, 100);
    }
  
    return () => {
      if (animationInterval) {
        clearInterval(animationInterval);
      }
    };
  }, [animationProgress, currentWordIndex]);
  

  return (
    <mark className={styles.mark}>
      {words[currentWordIndex].slice(0, animationProgress)}
      <span className={styles.blinker}>|</span>
    </mark>
  );
};

export default WordChanger;
