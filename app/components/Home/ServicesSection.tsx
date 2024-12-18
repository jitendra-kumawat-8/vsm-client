"use client";

import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ServicesSection = () => {
  const router = useRouter();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.6,
  });

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <div
      ref={ref}
      className="relative bg-[url('/services-bg.svg')] bg-cover bg-right-top w-screen h-fit p-20 flex flex-col  items-center"
    >
      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r z-10"
        style={{
          background:
            "linear-gradient(to right, #45133C 40%, rgba(69, 19, 60, 0) 100%)",
        }}
      ></div>

      {/* Content */}
      <motion.div
        className="relative z-20 w-[70%] mr-auto flex flex-col gap-8 items-start"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        <h2 className="text-[2rem] text-[#B99651] font-vietnam font-[500]">
          Our Services
        </h2>

        <div className="w-full max-w-[1200px] flex flex-col gap-6">
          {/* Service Card 1 */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-[1.5rem] font-vietnam  text-[#F7E7CE] mb-2">
              Your Astro Marriage Profile
            </h3>
            <p className="text-[#B99651] text-[1.2rem] font-vietnam">
              Your astrology profile will  help you deeply understand your
              mindset, attitude and personality and know what kind of a partner
              would ideally complement you. 
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h3 className="text-[1.5rem] font-vietnam  text-[#F7E7CE] mb-2">
              Database Of Verified Profiles
            </h3>
            <p className="text-[#B99651] text-[1.2rem] font-vietnam">
              We follow a stringent screening and KYC process to ensure only
              authentic and verified profiles, are shared with you to select and
              shortlist from.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h3 className="text-[1.5rem] font-vietnam  text-[#F7E7CE] mb-2">
              Customised Search
            </h3>
            <p className="text-[#B99651] text-[1.2rem] font-vietnam">
              You can customise your search based on your location, professional
              status, hobbies, interests, outlook towards the future and 40
              other relevant filters. Based on your preferences, our AI
              recommendation engine will also share profile suggestions, for you
              to further explore compatible matches.
            </p>
          </motion.div>
        </div>
        <Button
          variant="outlined"
          className=" !font-vietnam !px-10 !py-2 !text-secondaryLight !border-secondaryLight !rounded-lg"
          onClick={() => router.push("/services")}
        >
          View All
        </Button>
      </motion.div>
    </div>
  );
};

export default ServicesSection;
