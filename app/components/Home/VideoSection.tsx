import { useRouter } from "next/navigation";

const VideoSection = () => {
  const router = useRouter();

  const handleVideoClick = (videoId: string) => {
    router.push(`/detailed-video?page=${videoId}`);
  };
  return (
    <div className="bg-[#F7E7CE] w-screen h-fit p-20 flex flex-col gap-20 items-center">
      <p className="text-[2.5rem] text-secondaryDark font-vietnam font-[500]">
        How we make a difference
      </p>
      <div className="flex items-center gap-4">
        <div className="flex flex-col gap-4">
          <div
            className="flex flex-col relative cursor-pointer"
            onClick={() => handleVideoClick("video-1")}
          >
            <img src="/video1.png" alt="Video 1" className="w-full h-[200px]" />
            <div className="mb-10 absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
              <img src="/play.svg" alt="Play" className="w-10 h-10" />
            </div>
            <div className="bg-white w-full p-2 pt-1">
              <p className="text-secondaryDark w-full text-center uppercase font-bold font-vietnam">
                Who is a vedic soulmate
              </p>
            </div>
          </div>
          <div
            className="flex flex-col relative cursor-pointer"
            onClick={() => handleVideoClick("video-1")}
          >
            <img src="/video2.png" alt="Video 2" className="w-full h-[200px]" />
            <div className="mb-10 absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
              <img src="/play.svg" alt="Play" className="w-12 h-12" />
            </div>
            <div className="bg-white w-full p-2 pt-1">
              <p className="text-secondaryDark w-full text-center uppercase font-bold font-vietnam">
                How to find a vedic soulmate
              </p>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col h-full relative cursor-pointer"
          onClick={() => handleVideoClick("video-1")}
        >
          <img src="/video3.png" alt="Video 3" className="w-full h-[450px]" />
          <div className="mb-10 absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
            <img src="/play.svg" alt="Play" className="w-12 h-12" />
          </div>
          <div className="bg-white w-full p-2 pt-1">
            <p className="text-secondaryDark w-full text-center uppercase font-bold font-vietnam">
              Who is a vedic soulmate
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div
            className="flex flex-col relative cursor-pointer"
            onClick={() => handleVideoClick("video-1")}
          >
            <img src="/video4.png" alt="Video 4" className="w-full h-[200px]" />
            <div className="mb-10 absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
              <img src="/play.svg" alt="Play" className="w-12 h-12" />
            </div>
            <div className="bg-white w-full p-2 pt-1">
              <p className="text-secondaryDark w-full text-center uppercase font-bold font-vietnam">
                Who is a vedic soulmate
              </p>
            </div>
          </div>
          <div
            className="flex flex-col relative cursor-pointer"
            onClick={() => handleVideoClick("video-1")}
          >
            <img src="/video5.png" alt="Video 5" className="w-full h-[200px]" />
            <div className="mb-10 absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
              <img src="/play.svg" alt="Play" className="w-12 h-12" />
            </div>
            <div className="bg-white w-full p-2 pt-1">
              <p className="text-secondaryDark w-full text-center uppercase font-bold font-vietnam">
                How to find a vedic soulmate
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
