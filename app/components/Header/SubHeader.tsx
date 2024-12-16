"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const SubHeader = () => {
  const subHeaderHeadings = [
    "LIMITED OFFER: GET 20% OFF ON YOUR NEXT PURCHASE!",
    "FLAT 10% OFF ON YOUR FIRST SUBSCRIPTION. USE CODE: FIRST100",
  ];

  return (
    <div className="relative w-full bg-[#45133C] text-gold py-[0.6rem]">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="px-[2rem]"
      >
        {subHeaderHeadings.map((heading, index) => (
          <SwiperSlide key={index}>
            <p className="font-vietnam text-center text-[0.8rem] text-secondaryLight font-normal">
              <NavigateNextIcon className="text-[1rem] custom-prev z-10 cursor-pointer text-secondaryLight rotate-180 mr-4  hover:scale-110 transition-transform duration-300" />{" "}
              {heading}
              <NavigateNextIcon className="text-[1rem] custom-next z-10 cursor-pointer text-secondaryLight ml-4 hover:scale-110 transition-transform duration-300" />
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SubHeader;
