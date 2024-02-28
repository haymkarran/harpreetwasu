// ChildComponent.tsx
'use client'
import React, { useState, useEffect } from 'react';

// import './cardStackCSS.css'; // Directly import your CSS file
import GridChildApi from './gridChildApi';
import Link from 'next/link';
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
  customParagraphCss?: string;
}

const GridChild: React.FC<ChildComponentProps> = ({ childName, childId, chipsOrder, vectorOrder, tagsOrder, h1Order, h2Order, h3Order, h4Order, paragraphOrder, categoryOrder, assetOrder, buttonOrder, customHeaderCss, customParagraphCss }) => {
  const gridChildData = GridChildApi;

  return (
    <>
      {
          gridChildData && gridChildData.filter( currentElement => currentElement.id == childId ).map((currentElement) => {  
            return (
                  <div className={`${childName} flex flex-col gap-y-4 w-full justify-center gridChild`} key={currentElement.id}>
                      {/* Vector Shape */}
                      {currentElement.vectorShape &&
                        currentElement.vectorShape.map((assetContentsData) => (
                          <div key={assetContentsData.id} className={`order-${vectorOrder}`}>
                            {assetContentsData.vectorImageLink ? (
                              <Link href={assetContentsData.vectorImageLink}>
                                <img className='vectorShape' src={assetContentsData.vectorImage} alt={assetContentsData.imageAlt} />
                              </Link>
                            ) : (
                              assetContentsData.vectorImage && <img className='vectorShape' src={assetContentsData.vectorImage} alt={assetContentsData.imageAlt} />
                            )}
                          </div>
                        ))}

                      {/* Chip - eg. Limited Access */}
                      {currentElement.Chips &&
                          currentElement.Chips.map((chipsContentData) => (
                            <div key={chipsContentData.id} className={`order-${chipsOrder}`}>
                                {chipsContentData.chipLink ? (
                                  <Link href={chipsContentData.chipLink}>
                                    <div className='border border-fuchsia-500 w-max px-4 py-2 rounded-full'>{chipsContentData.chipText}</div>
                                  </Link>
                                ) : ( chipsContentData.chipText &&
                                  <div className='border border-fuchsia-500 w-max px-4 py-2 rounded-full'>{chipsContentData.chipText}</div>
                                )}
                            </div>
                      ))}
                      
                      {/* H1 title */}
                      {currentElement.headingH1 &&
                          currentElement.headingH1.map((headingContentData) => (
                            <div key={headingContentData.id} className={`order-${h1Order}`}>
                                {headingContentData.headingLink ?(
                                  <Link href={headingContentData.headingLink}>
                                      <h1 className={`text-h1 ${customHeaderCss}`}>{headingContentData.headingText}</h1>
                                  </Link>
                                ) : ( headingContentData.headingText &&
                                  <h1 className={`text-h1 ${customHeaderCss}`}>{headingContentData.headingText}</h1>
                                )}
                            </div>
                      ))}

                      {/* H2 title */}
                      {currentElement.headingH2 && currentElement.headingH2.length > 0 && (
                        currentElement.headingH2.map((headingContentData) => (
                          headingContentData.headingText && (  // Check if headingText is not an empty number
                            <div key={headingContentData.id} className={`order-${h2Order}`}>
                              {headingContentData.headingLink ? (
                                <Link href={headingContentData.headingLink}>
                                  <h2 className={`text-h2 ${customHeaderCss}`}>{headingContentData.headingText}</h2>
                                </Link>
                              ) : (
                                <h2 className={`text-h2 ${customHeaderCss}`}>{headingContentData.headingText}</h2>
                              )}
                            </div>
                          )
                        ))
                      )}

                      {/* H3 title */}
                      {currentElement.headingH3 && currentElement.headingH3.map((headingContentData) => (
                        headingContentData.headingText && (  // Check if headingText is not an empty number
                          <div key={headingContentData.id} className={`order-${h3Order}`}>
                            {headingContentData.headingLink ? (
                              <Link href={headingContentData.headingLink}>
                                <h3 className={`text-h3 ${customHeaderCss}`}>{headingContentData.headingText}</h3>
                              </Link>
                            ) : (
                              <h3 className={`text-h3 ${customHeaderCss}`}>{headingContentData.headingText}</h3>
                            )}
                          </div>
                        )
                      ))}

                      {/* H4 title */}
                      {currentElement.headingH4 && currentElement.headingH4.map((headingContentData) => (
                        headingContentData.headingText && (  // Check if headingText is not an empty number
                          <div key={headingContentData.id} className={`order-${h4Order}`}>
                            {headingContentData.headingLink ? (
                              <Link href={headingContentData.headingLink}>
                                <h4 className={`text-h4 ${customHeaderCss}`}>{headingContentData.headingText}</h4>
                              </Link>
                            ) : (
                              <h4 className={`text-h4 ${customHeaderCss}`}>{headingContentData.headingText}</h4>
                            )}
                          </div>
                        )
                      ))}


                      {/* Category heading - eg. Cloud Computing in Blogs */}
                      {currentElement.Category &&
                        currentElement.Category.map((categoryContentData) => (
                          <div key={categoryContentData.id} className={`order-${categoryOrder}`}>
                            {categoryContentData.categoryLink ? (
                              <Link href={categoryContentData.categoryLink}>
                                <div>{categoryContentData.categoryText}</div>
                              </Link>
                            ) : ( categoryContentData.categoryText &&
                              <div>{categoryContentData.categoryText}</div>
                            )}
                          </div>
                        ))}
                      
                      
                      {/* Paragraph - I posess excellent communication skills... */}
                      {currentElement.Paragraph &&
                          currentElement.Paragraph.map((paraContentsData) => (
                            <div key={paraContentsData.id} className={`order-${paragraphOrder}`}>
                              {paraContentsData.paraLink ? (
                                <Link href={paraContentsData.paraLink}>
                                  <p className={`${customParagraphCss} text-paragraph opacity-80`}>{paraContentsData.paraData}</p>
                                </Link>
                              ) : ( paraContentsData.paraData &&
                                <p className={`${customParagraphCss} text-paragraph opacity-80`}>{paraContentsData.paraData}</p>
                              )}
                            </div>
                      ))}

                      {/* Asset - image or video */}
                      {currentElement.Asset &&
                        currentElement.Asset.map((assetContentsData) => (
                          <div key={assetContentsData.id} className={`order-${assetOrder} asset`}>
                            {assetContentsData.imageContainerLink ? (
                              <Link href={assetContentsData.imageContainerLink}>
                                <img className='w-full h-full object-contain' src={assetContentsData.imageSrc} alt={assetContentsData.imageAlt} />
                              </Link>
                            ) : (
                              assetContentsData.imageSrc && <img className='w-full h-full object-contain' src={assetContentsData.imageSrc} alt={assetContentsData.imageAlt} />
                            )}
                            {assetContentsData.videoContainerLink ? (
                                <Link href={assetContentsData.videoContainerLink}>
                                  <video autoPlay className='w-full h-full'>
                                    <source src={assetContentsData.videoSrc} type="video/mp4" />
                                    Your browser does not support the video tag.
                                  </video>
                                </Link>
                              ) : ( assetContentsData.videoSrc &&
                                <video autoPlay className='w-full h-full'>
                                  <source src={assetContentsData.videoSrc} type="video/mp4" />
                                  Your browser does not support the video tag.
                                </video>
                              )}
                          </div>
                        ))}

                        {/* Button - outline or filled */}
                        {currentElement.Button &&
                          currentElement.Button.map((buttonContentData) => (
                            <div key={buttonContentData.id} className={`order-${buttonOrder}`}>
                              {buttonContentData.buttonLink ? (
                                <Link href={buttonContentData.buttonLink}>
                                  <button className='filled-button py-4 px-8 my-4 rounded-full font-bold text-md'>{buttonContentData.buttonText}</button>
                                </Link>
                              ) : ( buttonContentData.buttonText &&
                                <button className='filled-button py-4 px-8 my-4 rounded-full font-bold text-md'>{buttonContentData.buttonText}</button>
                              )}
                            </div>
                          ))}
                  </div>
              );
          }, [])
      }
    </>
  );
};

export default GridChild;
