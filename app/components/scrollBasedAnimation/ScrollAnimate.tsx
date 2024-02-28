'use client'

import './scrollBasedAnimationCSS.css';
import React, { useEffect } from 'react';
import heroImage from "../../../public/assets/images/hero-image.png"

const ScrollAnimate: React.FC = () => {
  useEffect(() => {
    const container = document.querySelector(".scroll-animate-container") as HTMLElement;

    const rotateElement = (event: MouseEvent, element: HTMLElement | null) => {
      if (element) {
        const x = event.clientX;
        const y = event.clientY;

        const middleX = window.innerWidth / 2;
        const middleY = window.innerHeight / 2;

        const offsetX = ((x - middleX) / middleX) * 45;
        const offsetY = ((y - middleY) / middleY) * 45;

        element.style.setProperty("--rotateX", `${offsetX}deg`);
        element.style.setProperty("--rotateY", `${-offsetY}deg`);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      rotateElement(e, container);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      // Cleanup event listener when the component is unmounted
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div className="scroll-animate-container rounded-lg w-full h-full relative" tabIndex={0}>
      {/* <div className="grid items-center justify-center absolute">
        <span className="font-bold text-6xl">Hire Harpreet Today!</span>
      </div> */}
      <img src={heroImage.src}></img>
    </div>
  );
};

export default ScrollAnimate;
