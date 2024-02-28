import React from "react";

interface ClienteleScrollerChildContainerProps {
  clienteleScrollerData: Array<{
    id: number;
    itemData: Array<{
      id: number;
      clienteleText?: string;
      clienteleImage?: string;
      clienteleVideo?: string;
      clienteleYouTubeVideo?: string;
      // You can add other properties (clienteleImage, clienteleVideo, etc.) here if needed
    }>;
  }>;
  scrollerApiId: number;
}

const ClienteleScrollerChildContainer: React.FC<ClienteleScrollerChildContainerProps> = ({
  clienteleScrollerData,
  scrollerApiId,
}) => {
  return (
    <>
      {clienteleScrollerData &&
        clienteleScrollerData
          .filter((currentElement) => currentElement.id === scrollerApiId)
          .map((currentElement) => (
            <div
              className="clientele-scroller-item-data-container flex flex-row gap-y-2 gap-x-16 relative overflow-visible w-fit"
              key={currentElement.id}
            >
              {currentElement.itemData &&
                currentElement.itemData.map((itemData) => (
                  <React.Fragment key={itemData.id}>
                    
                    {itemData.clienteleImage && (
                      <div className="clientele-image-container">
                        <img
                          className="clientele-image"
                          src={itemData.clienteleImage}
                          alt="image"
                          width="100%"
                          height="100%"
                          loading="lazy"
                        />
                      </div>
                    )}


                        {   itemData.clienteleVideo &&
                                <div className="video-container w-full rounded-xl overflow-hidden relative">
                                {/* <!--<video controls autoplay muted>--> */}
                                <video autoPlay controls muted className="rounded-xl video-player w-full h-full object-cover">
                                    <source src={itemData.clienteleVideo} type="video/mp4"></source>
                                </video>
                            </div>
                        }
                        {   itemData.clienteleYouTubeVideo &&
                                <div className="video-container-youtube">
                                    <iframe
                                    width="100%"
                                    height="100%"
                                    src={itemData.clienteleYouTubeVideo}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    loading="lazy"
                                    ></iframe>
                                </div>
                        }

                    {itemData.clienteleText && (
                      <h4 className="text-h4 font-bold">
                        {itemData.clienteleText}
                      </h4>
                    )}
                  </React.Fragment>
                ))}
            </div>
          ))}
    </>
  );
};

export default ClienteleScrollerChildContainer;
