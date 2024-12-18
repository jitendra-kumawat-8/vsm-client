import { useRouter } from "next/navigation"; // Updated import for useRouter
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

const VideoSection = () => {
  const router = useRouter();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.6,
  });

  const handleVideoClick = (videoId: string) => {
    router.push(`/detailed-video?page=${videoId}`);
  };

  // Animation variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-[#F7E7CE] w-screen h-fit p-20 flex flex-col gap-10 items-center">
      <motion.p
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="text-[1.5rem] text-secondaryDark font-vietnam font-[500]"
      >
        How we make a difference
      </motion.p>
      <div className="flex items-center gap-4" ref={ref}>
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col gap-4"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -20, y: -20 },
              visible: {
                opacity: 1,
                x: 0,
                y: 0,
                transition: { duration: 0.5 },
              },
            }}
            className="flex flex-col relative cursor-pointer"
            onClick={() => handleVideoClick("video-1")}
          >
            <img src="/video1.png" alt="Video 1" className="w-full h-[200px]" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
              <img src="/play.svg" alt="Play" className="w-10 h-10" />
            </div>
            <div className="bg-white w-full p-2 pt-1">
              <p className="text-secondaryDark w-full text-center uppercase font-bold font-vietnam">
                Who is a vedic soulmate
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -20, y: 20 },
              visible: {
                opacity: 1,
                x: 0,
                y: 0,
                transition: { duration: 0.5 },
              },
            }}
            className="flex flex-col relative cursor-pointer"
            onClick={() => handleVideoClick("video-2")}
          >
            <img src="/video2.png" alt="Video 2" className="w-full h-[200px]" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
              <img src="/play.svg" alt="Play" className="w-12 h-12" />
            </div>
            <div className="bg-white w-full p-2 pt-1">
              <p className="text-secondaryDark w-full text-center uppercase font-bold font-vietnam">
                How to find a vedic soulmate
              </p>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="flex flex-col h-full relative cursor-pointer"
          onClick={() => handleVideoClick("video-3")}
        >
          <img src="/video3.png" alt="Video 3" className="w-full h-[450px]" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
            <img src="/play.svg" alt="Play" className="w-12 h-12" />
          </div>
          <div className="bg-white w-full p-2 pt-1">
            <p className="text-secondaryDark w-full text-center uppercase font-bold font-vietnam">
              Who is a vedic soulmate
            </p>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInRight}
          className="flex flex-col gap-4"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 20, y: -20 },
              visible: {
                opacity: 1,
                x: 0,
                y: 0,
                transition: { duration: 0.5 },
              },
            }}
            className="flex flex-col relative cursor-pointer"
            onClick={() => handleVideoClick("video-4")}
          >
            <img src="/video4.png" alt="Video 4" className="w-full h-[200px]" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
              <img src="/play.svg" alt="Play" className="w-12 h-12" />
            </div>
            <div className="bg-white w-full p-2 pt-1">
              <p className="text-secondaryDark w-full text-center uppercase font-bold font-vietnam">
                Who is a vedic soulmate
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 20, y: 20 },
              visible: {
                opacity: 1,
                x: 0,
                y: 0,
                transition: { duration: 0.5 },
              },
            }}
            className="flex flex-col relative cursor-pointer"
            onClick={() => handleVideoClick("video-5")}
          >
            <img src="/video5.png" alt="Video 5" className="w-full h-[200px]" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
              <img src="/play.svg" alt="Play" className="w-12 h-12" />
            </div>
            <div className="bg-white w-full p-2 pt-1">
              <p className="text-secondaryDark w-full text-center uppercase font-bold font-vietnam">
                How to find a vedic soulmate
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default VideoSection;
