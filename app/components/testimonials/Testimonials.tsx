import * as React from "react";
import TestimonialsApi from "./testimonialsApi";
import TestimonialCard from "./TestimonialCard";
import { Testimonial } from "./TestimonialTypes"
import "./Testimonial.css"

export default function Testimonials() {
  const testimonialData: Testimonial[] = TestimonialsApi;

  return (
    <>
      {/* <section id="section-horizontal-line">
        <hr className="sketch-rule" />
      </section> */}
      <section className="m-auto" id="section-celebration">
        <div className="celebration-background">
          <p className="text-center font-bold big-text">Celebrated for impact.</p>
        </div>
        <div className="grid-parent-container-experiences default-horizontal-scrolling section-testimonial">
          <div className="horizontal-track" id="testimonial_file">
            <TestimonialCard testimonialData={testimonialData} />
          </div>
        </div>
      </section>
    </>
  );
}
