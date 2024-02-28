import React from 'react'
import FeatureCardsApi from "./featureCardsApi";
import "./FeatureCardsCSS.css"

interface FeatureGridCardsProps {
    featureCardsApiId: number;
  }

  export default function FeatureGridCards({ featureCardsApiId }: FeatureGridCardsProps) {
    const featureCardsData = FeatureCardsApi;
  return (
    <>
            {
                featureCardsData && featureCardsData.filter( currentElement => currentElement.id == featureCardsApiId ).map((currentElement) => {
                    return (
                        <section className="grid-parent-container-experiences feature-cards grid-parent-container-span-3 accountable-love grid-parent-container-experiences-hor-scroll desktops hor-sectional-padding" id="section-accountability" key={currentElement.id}>
                            { currentElement.description && currentElement.description.map(descriptionData => (    
                                <div className="grid-child-container-experiences grid-child-uniform-padding box-shadow grid-component-image" key={descriptionData.id}>
                                    {descriptionData.heading && <p className="grid-data-heading">{descriptionData.heading}</p>}
                                    {descriptionData.subText && <p className="sub-text-description">{descriptionData.subText}</p>}
                                    {descriptionData.btnLink && <a href={descriptionData.btnLink} target="_blank"><button className="grid-item-button">{descriptionData.btnText}</button></a>}
                                </div>
                            ), [])}
                        </section> 
                    );
                }, [])
            }
    </>
  )
}