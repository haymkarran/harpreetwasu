"use client"
import { useState } from "react";
import { Testimonial } from "./TestimonialTypes";

interface TestimonialCardProps {
  testimonialData: Testimonial[];
}

export default function TestimonialCard({ testimonialData }: TestimonialCardProps) {
  const [showToggle, setShowToggle] = useState<number | null>(null);

  function handleUpdate(id: number | null) {
    setShowToggle(id);
  }

  return (
    <>
      {testimonialData && testimonialData.map((currentElement) => {
        const isTestOpen = currentElement.id === showToggle;
        const shortText = currentElement.testimonialText.substring(0, 120) + "...";
        const fullText = currentElement.testimonialText;

        return (
          <div className="grid-child-container-experiences testimonial-container grid-child-uniform-padding box-shadow testimonial-wrapper" key={currentElement.id}>
            <a href={currentElement.linkAuthorProfile} className="no-text-decoration">
              <div className="people-container">
                <div className="avatar-container">
                  <img
                    className="avatar-image"
                    src={currentElement.imageAuthor}
                    width="100%"
                    height="100%"
                    loading="lazy"
                    alt=""
                  />
                </div>
                <div className="flex-col">
                  <p className="person-name">{currentElement.testimonialAuthor}</p>
                  <p className="company-name-text">{currentElement.testimonialAuthorRole}</p>
                </div>
              </div>
            </a>
            <p className="sub-text-description testimonial-content">
              {isTestOpen ? fullText : shortText}
            </p>
            {isTestOpen ? <div><button className="t-readmore" onClick={() => handleUpdate(null)}>Show Less</button></div> : <div><button className="t-readmore" onClick={() => handleUpdate(currentElement.id)}>Show More</button></div>}
            <div className="company-image-container">
              <img
                className="company-image"
                src={currentElement.imageCompany}
                loading="lazy"
                alt=""
              />
            </div>
          </div>
        );
      })}
    </>
  );
}
