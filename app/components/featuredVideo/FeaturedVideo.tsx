import React from 'react'
import FeaturedVideoApi from './featuredVideoApi';
import "./FeaturedVideoCSS.css"

interface FeaturedVideoProps {
    featuredVideoApiId: number;
}

export default function FeaturedVideo ({featuredVideoApiId}: FeaturedVideoProps) {
    const featuredVideo = FeaturedVideoApi;

  return (
    <>
        {
            featuredVideo && featuredVideo.filter( currentElement => currentElement.id == featuredVideoApiId ).map((currentElement) => {
                return (
                    <section className="" id="section-initiative" key={currentElement.id}>
                        <div className="big-text font-bold desktops">
                            { currentElement.headingTitle && <p>{currentElement.headingTitle}</p>}
                        </div>
                        <div className="text-center desktops">
                            { currentElement.subText && <p>{currentElement.subText}</p>}
                        </div>
                        {   currentElement.videoURL &&
                                <div className="video-container span-4 border-radius-20 desktops">
                                {/* <!--<video controls autoplay muted>--> */}
                                <video autoPlay controls muted className="border-radius-20 video-player">
                                    <source src={currentElement.videoURL} type="video/mp4"></source>
                                </video>
                            </div>
                        }
                        {   currentElement.videoURLYouTube &&
                                <div className="video-container-youtube desktops">
                                    <iframe
                                    width="560"
                                    height="315"
                                    src={currentElement.videoURLYouTube}
                                    title="An initiative to help"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    loading="lazy"
                                    ></iframe>
                                </div>
                        }
                </section>
                );
            }, [])
        }
    </>
  )
}
