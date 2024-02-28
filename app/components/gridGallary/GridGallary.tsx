import React from 'react'
import GridGallaryDataApi from "./gridGallaryApi"
import { GridGallaryDataType } from './GridGallaryDataTypes';
import "./GridGallaryCSS.css"

export default function GridGallary () {
    const gridGallaryData: GridGallaryDataType[] = GridGallaryDataApi;
  return (
    <>
        <section className="bottom-sectional-padding" id="section-social">
            <div className="desktops">
                <p className="big-text font-bold">Work and some fun <span className="text-heading-hover">together</span>.</p>
            </div>
            <div className="grid-gallary-container">
            {gridGallaryData && gridGallaryData.map((currentElement) => {  
                return (  
                // <div className="grid-gallary-container">
                    <div className="gallary-item" key={currentElement.id}>
                        { currentElement.imgSrc && <img src={currentElement.imgSrc} loading="lazy" alt="gallary-image" />}
                        { currentElement.videoUrl &&
                            <video style={{ margin: 0 }} controls autoPlay muted playsInline>
                                <source src={currentElement.videoUrl} type="video/mp4" />
                            </video>
                        }
                    </div>
                // </div>
                );
            })}
            </div>
        </section>

    </>
  )
}