import React from "react";
import { assets, dummyTestimonial } from "../../assets/assets";

const TestimonialsSection = () => {
  return (
    <div className="pb-14 px-8 md:px-0">
      <h2 className="text-white text-3xl font-medium">Testimonials</h2>
      <p className="text-white md:text-base mt-3">
        Hear from our learners as they share their stories of growth and
        success, <br /> and how our platform helped them reach new milestones.
      </p>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-8 mt-14">
        {dummyTestimonial.map((Testimonial, index) => (
          <div
            key={index}
            className="text-sm text-left border border-gray-800 pb-6 rounded-lg bg-black shadow-[0px_4px_15px_0px] shadow-white/5 overflow-hidden"
          >
            <div
              className="flex items-center gap-4 px-5 py-4 bg-gray-900/90

"
            >
              {/* <img
                className="h-12 w-12 rounded-full"
                src={Testimonial.image}
                alt={Testimonial.name}
              /> */}
              <div>
                <h1 className="text-white text-lg font-medium">
                  {Testimonial.name}{" "}
                </h1>
                <p className="text-white">{Testimonial.role}</p>
              </div>
            </div>
            <div className="p-5 pb-7">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <img
                    className="h-5"
                    key={i}
                    src={
                      i < Math.floor(Testimonial.rating)
                        ? assets.star
                        : assets.star_blank
                    }
                    alt="star"
                  />
                ))}
              </div>
              <p className="text-white mt-5">{Testimonial.feedback} </p>
            </div>
            <a className="text-amber-500 underline px-5" href="#">
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
