import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-section w-screen h-auto">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={true}
        loop={true}
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        className="w-screen h-auto"
      >
        <SwiperSlide>
          <div className="w-screen h-auto relative">
            <video
              src="https://media.gettyimages.com/id/140813416/video/groom-applying-sindoor-on-his-wife-forehead.mp4?s=mp4-640x640-gi&k=20&c=k0QVtI9wAoPFWN38MEiYd7J0MSxf-xy87jJOeZIcYkM="
              className="w-full h-full object-cover"
              autoPlay
              playsInline
              loop
              muted
            />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 bg-[#2D1313] bg-opacity-50 p-10 flex flex-col gap-16 w-[50%] text-secondaryLight font-vietnam">
              <p className="text-[2rem] font-[600]">Achieving Marital Bliss</p>
              <p className="text-[1.5rem] font-[400]">
                We help you to find your match with whom you can evolve
                together, both emotionally and spiritually, in a relationship
                filled with light and love. Our traditional Vedic approach to
                matchmaking through Kundali Milan, provides a sound scientific
                base to check the overall marriage compatibility of the couple.
                Our Vedic astrology based Resources will help you prepare for
                and adapt to life post marriage.
              </p>
              <p className="text-[2rem] font-[600] ml-auto uppercase">
                More...
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-screen h-auto relative">
            <video
              src="https://media.gettyimages.com/id/140813414/video/bride-and-groom-doing-varmala-in-the-marriage.mp4?s=mp4-640x640-gi&k=20&c=Fa2isL9VweF8V_hxQKcuBDpe6Y30EnYbGcw25e95Ko4="
              className="w-full h-full object-cover"
              autoPlay
              playsInline
              loop
              muted
            />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 bg-[#2D1313] bg-opacity-50 p-10 flex flex-col gap-16 w-[50%] text-secondaryLight font-vietnam">
              <p className="text-[2rem] font-[600]">
                Secrets of Successful Marriages
              </p>
              <p className="text-[1.5rem] font-[400]">
                Over the years through the numerous marriage consultation I’ve
                provided , I have observed 4 keys successful marriages  I
                believe that one of the most important things is that the couple
                always respect each other, even when they’re disagreeing or
                fighting about something they feel strongly about. They also
                seem to be very good at compromising; giving
              </p>
              <p className="text-[2rem] font-[600] ml-auto uppercase">
                More...
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-screen h-auto relative">
            <video
              src="https://media.gettyimages.com/id/140813411/video/groom-wearing-necklace-to-his-wife.mp4?s=mp4-640x640-gi&k=20&c=yQNgw39Do4UifFzRZkpbhnsiLBKYM5uuRXoK90xmpsc="
              className="w-full h-full object-cover"
              autoPlay
              playsInline
              loop
              muted
            />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 bg-[#2D1313] bg-opacity-50 p-10 flex flex-col gap-16 w-[50%] text-secondaryLight font-vietnam">
              <p className="text-[2rem] font-[600]">
                VEDIC MATCHMAKING - Traditional Approach to Matchmaking in the
                Modern Context
              </p>
              <p className="text-[1.5rem] font-[400]">
                Kundali Milan, or horoscope matching of two individuals, is the
                traditional approach to marriages in India, especially in Hindu
                society. It is considered as one of the most important aspects
                of marriages in our society where marriages are expected to last
                a lifetime.  
              </p>
              <p className="text-[2rem] font-[600] ml-auto uppercase">
                More...
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSection;
