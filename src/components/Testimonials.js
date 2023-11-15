import React from "react";
import profile1 from "../images/profile-1.jpg";
import profile2 from "../images/profile-2.jpg";
import profile3 from "../images/profile-3.jpg";
import bgquotes from "../images/bg-quotes.png";

const testimonials = [
  {
    user: "Satish Patel",
    profile: profile1,
    position: "Founder & CEO, Huddle",
    testimonial:
      "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
  },
  {
    user: "Bruce McKenzie",
    profile: profile2,
    position: "Founder & CEO, Huddle",
    testimonial:
      "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
  },
  {
    user: "Iva Boyd",
    profile: profile3,
    position: "Founder & CEO, Huddle",
    testimonial:
      "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
  },
];

const Testimonials = () => {
  return (
    <>
      <img src={bgquotes} alt='quotes' className='testimonials-quotes' />
      <div className='testimonials'>
        {testimonials.map((testimonial) => (
          <div className='testimonials-card'>
            <p className='testimonials-main'>{testimonial.testimonial}</p>
            <div className='testimonials-user-info'>
              <img src={testimonial.profile} className='testimonials-profile' />
              <div>
                <p className='testimonials-user'>{testimonial.user}</p>
                <p className='testimonials-position'>{testimonial.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Testimonials;
