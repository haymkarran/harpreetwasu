'use client'

// components/ImageWithHoverVideo.tsx

import React, { useState, useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';
import styles from './ImageWithHoverVideoCSS.module.css';
import videoHarpreet from '../../../public/assets/videos/videoHarpreet.mp4'

const ImageWithHoverVideo: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      setMousePosition({ x, y });
    }
  };

  useEffect(() => {
    if (isHovered) {
      document.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isHovered]);

  return (
    <>
        <div
        ref={containerRef}
        className={styles.ImageContainer}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
        >
        <img src="/assets/images/HarpreetPodcastsTitle.svg" alt="Image" />

                {isHovered && (
                    // <div className={styles.VideoContainer}>
                    // <ReactPlayer
                    //     url="https://www.youtube.com/watch?v=O_5goaab_1Q"
                    //     // url="https://www.youtube.com/watch?v=O_5goaab_1Q"
                    //     playing={true}
                    //     loop={true}
                    //     muted={true}
                    //     width="100%"
                    //     height="100%"
                    //     style={{
                    //         position: 'absolute',
                    //         top: 0,
                    //         left: 0,
                    //         borderRadius: '50%',
                    //         clipPath: `circle(150px at ${mousePosition.x}px ${mousePosition.y}px)`,
                    //     }}
                    //     />
                        

                    // </div>
                    <video width="100%" height="100%"><source src={videoHarpreet} type="video/mp4" /></video>
                )}
        </div>
    </>
  );
};

export default ImageWithHoverVideo;