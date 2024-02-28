// ChildComponent.tsx
'use client'
import React, { useState, useRef, useEffect } from 'react';
// import './cardStackCSS.css'; // Directly import your CSS file
import GridChildApi from './gridChildApi';
import Link from 'next/link';
import "../cardStack/CardStackCSS.css"
import "./GridChildCSS.css"

interface ChildComponentProps {
  childId: number;
  childName?: string;
  chipsOrder?: number;
  vectorOrder?: number;
  tagsOrder?: number;
  h1Order?: number;
  h2Order?: number;
  h3Order?: number;
  h4Order?: number;
  paragraphOrder?: number;
  categoryOrder?: number;
  assetOrder?: number;
  buttonOrder?: number;
  customHeaderCss?: string;
  cardStack?: { id: string; imageUrl: string; alt: string }[];
}

const GridChild: React.FC<ChildComponentProps> = ({ childName, childId, chipsOrder, vectorOrder, tagsOrder, h1Order, h2Order, h3Order, h4Order, paragraphOrder, categoryOrder, assetOrder, buttonOrder, customHeaderCss, CardStack }) => {
  const gridChildData = GridChildApi;
  const [animate, setAnimate] = useState<string | null>(null);
  const cardStackRef = useRef(CardStack);

  useEffect(() => {
    cardStackRef.current = CardStack;
  }, [CardStack]);

  const swap = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, cardId: string) => {
  
    if (animate !== null) {
      console.log('Animation in progress, skipping swap');
      return;
    }
  
    setAnimate(cardId);
  
    setTimeout(() => {
      const updatedStack = [...(cardStackRef.current || [])];
      const cardIndex = updatedStack.findIndex((card) => card.id === cardId);
  
      if (cardIndex !== -1) {
        const lastCard = updatedStack.pop();
        updatedStack.splice(cardIndex, 0, lastCard!);
        console.log('Updated stack after swap:', updatedStack);
        // Use the setCardStack or any other method to update the cardStack state
        // Example: setCardStack(updatedStack);
      }
  
      setAnimate(null);
    }, 700); // Adjust the timeout based on your animation duration
  };
  

  

  return (
    <>
      {
          gridChildData && gridChildData.filter( currentElement => currentElement.id == childId ).map((currentElement) => {
            console.log('Index:', currentElement.id);
              return (
                  <div className={`${childName} flex flex-col gap-y-4 w-full justify-center gridChild`} key={currentElement.id}>
                        {currentElement.CardStack && (
                  <div className='stack w-full'>
                    {currentElement.CardStack.map((cardStackData) => (
                      <div
                        key={cardStackData.id}
                        data-id={cardStackData.id + 1}
                        className='card'
                        onClick={(event) => swap(event, cardStackData.id)}
                        style={{
                          animation: animate === cardStackData.id ? 'swap 700ms forwards' : 'none',
                          transition: 'transform 200ms',
                        }}
                      >
                        <img src={cardStackData.imageUrl} alt={cardStackData.alt} />
                      </div>
                    ))}
                  </div>
                )}
                  </div>
              );
          }, [])
      }
    </>
  );
};

export default GridChild;
