// pages/stack.tsx
'use client'
import React, { useRef, useState } from 'react';
import classes from './stacks.module.css';
import CardsDataApi from './cardsDataApi';

interface CardData {
  id: number;
  value?: string;
  imageUrl?: string;
  imageAlt?: string;
}

const Stack: React.FC = () => {
  const [divData, setDivsData] = useState<CardData[]>(CardsDataApi);
  const [currentCard, setCurrentCard] = useState(0);
  const stackDiv = useRef<HTMLDivElement>(null);
  const cardDiv = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    const newData = [...divData];
    const deletedElement = newData.pop();

    if (stackDiv.current) {
      const lastElement = stackDiv.current.lastElementChild as HTMLElement | null;

      if (lastElement) {
        const screenWidth = window.innerWidth;
        let translateYValue = screenWidth > 1367 ? 500 : 350;

        // Apply the transition directly to the stackDiv
        stackDiv.current.style.transition = 'transform 700ms ease-in-out';

        // Create a style element
        const styleElement = document.createElement('style');
        document.head.appendChild(styleElement);

        // Define keyframes dynamically
        const keyframes = `
          @keyframes dynamicSwap {
            50% {
              transform: translate(-50%, calc(var(--y) - ${translateYValue}px)) scale(0.85) rotate(-10deg);
              -webkit-animation-timing-function: ease-in-out;
              animation-timing-function: ease-in-out;
            }
            100% {
              transform: translate(-50%, calc(var(--y) - 15px)) scale(0.85);
              z-index: -1;
            }
          }
        `;

        // Insert the keyframes into the style element
        styleElement.sheet?.insertRule(keyframes, styleElement.sheet.rules.length);

        // Apply the dynamic keyframes
        lastElement.style.animationName = 'dynamicSwap';
        lastElement.style.animationDuration = '900ms';
        lastElement.style.animationTimingFunction = 'ease-in-out';
        lastElement.style.animationFillMode = 'forwards';
      }
    }

    setTimeout(() => {
      setCurrentCard(currentCard === divData.length - 1 ? 0 : currentCard + 1);
      setDivsData([deletedElement as CardData, ...newData]);
    }, 700);

    if (stackDiv.current && stackDiv.current.firstElementChild) {
      (stackDiv.current.firstElementChild as HTMLElement).style.animation = '';
    }
  };

  return (
    <div className={classes.stack} ref={stackDiv} onClick={handleClick}>
      {divData.map((divs, index) => (
        <div
          key={divs.id}
          className={classes.card}
          ref={index === 0 ? cardDiv : null}
        >
          <img src={divs.imageUrl} alt={divs.imageAlt} />
        </div>
      ))}
    </div>
  );
};

export default Stack;
