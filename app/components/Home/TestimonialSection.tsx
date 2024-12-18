import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../../globals.css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const TestimonialSection: React.FC = () => {
  const testimonials = [
    {
      text: "I had a very positive experience with Navneet sir. During the video consultation, sir was patient and asked detailed questions to get a real understanding of my preferences and expectations. His advice was practical, and surprisingly aligned with what I was experiencing in my relationship. I was impressed by how accurate his advice was.",
      author: "Pranay Sarepaka",
      location: "Delhi",
      image: "/person4.jpg",
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
  return (
    <div className="w-screen bg-[url('/testimonial-bg.svg')] bg-cover bg-center min-h-[calc(100vh-10rem)] p-28 flex items-center justify-center">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center relative pt-20">
              <div className="relative max-w-[80%] mx-auto flex flex-col items-center text-center justify-center px-24 py-16 border-4 bg-[#3F0C35] bg-opacity-60 bg-blur border-[#C19A4C] rounded-xl">
                <p className="mt-10 text-[1.2rem] text-[#EEC575]">
                  {testimonial.text}
                </p>

                <p className="mt-6 font-semibold text-[1.5rem] text-[#EEC575]">
                  {testimonial.author}, {testimonial.location}
                </p>
              </div>
              <img
                src={testimonial.image}
                alt={testimonial.author}
                className="w-40 h-40 absolute top-0 z-100 rounded-full object-cover border-4 border-[#C19A4C]"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSection;
