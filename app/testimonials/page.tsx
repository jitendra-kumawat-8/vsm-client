"use client";

import classNames from "classnames";
import React, { useState } from "react";

const testimonials = [
  {
    text: "I had a very positive experience with Navneet sir. During the video consultation, sir was patient and asked detailed questions to get a real understanding of my preferences and expectations. His advice was practical, and surprisingly aligned with what I was experiencing in my relationship. I was impressed by how accurate his advice was.",
    author: "Pranay Sarepaka",
    location: "Delhi",
    image: "/testimonial1.svg",
  },
  {
    text: "I was a bit skeptical about online matchmaking consultations, but Navneet guruji changed my mind. The video consultation was easy-going, and Guruji made me feel comfortable from the start. He listened carefully, understood my situation, and gave realistic inputs. His suggestions were really thoughtful and practical. I feel much more condent and secure of the relationship with my partner now.",
    author: "Santosh Kale",
    location: "Pune",
    image: "/testimonial2.svg",
  },
  {
    text: "My experience with Navneet ji was fantastic. The session felt very personal—Navneetji really listened to my concerns and expectations. His insights were spot-on, and I could tell he had a deep understanding of astrology. He gave me clear, actionable advice, and his suggestions were genuinely helpful. The whole process felt natural, and I left the call feeling reassured about my journey to get married with my partner.",
    author: "Aarav Mehta",
    location: "Mumbai",
    image: "/person1.jpg",
  },
  {
    text: "Consulting with Navneet sir was a refreshing experience for me. The consultation went smoothly, and sir took the time to understand my personality, lifestyle, and what guidance I was looking for in my relationship. His feedback and suggestions were not only accurate but also practical. He was able to give me a clear direction and some very valuable remedies as i approached my marriage. I was impressed with his professionalism and the personal care he brings to his work.",
    author: "Rohit Sharma",
    location: "Bangalore",
    image: "/person2.jpg",
  },
  {
    text: "I wasn’t sure what to expect from a matchmaking service, but Navneet Chitkara’s consultation really surprised me. The session was very relaxed, and he was easy to talk to. He asked the right questions and gave me personalized suggestions that were on point. His understanding of the subject and his ability to guide me made it feel much less overwhelming. I’m really grateful for the thoughtful and accurate advice he provided.",
    author: "Virat Gupta",
    location: "Chennai",
    image: "/person3.jpg",
  },
];

const TestimonialsPage = () => {
  const [visibleTestimonials, setVisibleTestimonials] = useState(1);

  const loadMoreTestimonials = () => {
    setVisibleTestimonials((prev) => prev + 1);
  };

  return (
    <div className="min-h-full bg-[url('/testimonial-bg.png')] bg-fixed bg-cover bg-center text-[#EEC575] font-vietnam py-16 ">
      <h1 className="text-[1.5rem] font-semibold text-center mb-10">
        TESTIMONIALS
      </h1>
      <div className="flex flex-col items-center px-40 gap-10">
        {testimonials
          .slice(0, visibleTestimonials)
          .map((testimonial, index) => (
            <div
              key={index}
              className={classNames({
                "flex gap-10": index % 2 === 0,
                "flex gap-10 flex-row-reverse text-right": index % 2 !== 0,
              })}
            >
              <div className="h-fit w-fit flex flex-col items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="min-w-40 h-40 rounded-full mb-4 object-cover border-4 border-[#C19A4C] rounded-full"
                />
                <p className="text-[1.2rem] font-semibold font-vietnam whitespace-nowrap">
                  {testimonial.author}
                </p>
                <p className="text-[1.2rem] font-semibold font-vietnam">
                  {testimonial.location}
                </p>
              </div>
              <p className="text-[1.2rem] leading-relaxed font-vietnam ">
                {testimonial.text}
              </p>
            </div>
          ))}
        {visibleTestimonials < testimonials.length && (
          <button
            onClick={loadMoreTestimonials}
            className="mt-4 px-4 py-2 bg-[#EEC575] text-[#45133C] rounded"
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default TestimonialsPage;
