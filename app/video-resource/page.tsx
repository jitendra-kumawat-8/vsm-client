"use client";

import Link from "next/link";

const MediaPage = () => {
  const mediaItems = [
    {
      id: 1,
      image: "/media/media1.svg",
      title: "Anant Ambani & Radhika Merchant",
      subtitle: "WEDDING: INSIDE THE GRAND CELEBRATION | AMBANI WEDDING",
    },
    {
      id: 2,
      image: "/media/media2.svg",
      title: "Anant Ambani & Radhika Merchant",
      subtitle: "Wedding: Inside the Grand Celebration | Ambani Wedding",
    },
    {
      id: 3,
      image: "/media/media3.svg",
      title: "Anant Ambani & Radhika Merchant",
      subtitle: "Wedding: Inside the Grand Celebration | Ambani Wedding",
    },
    {
      id: 4,
      image: "/media/media4.svg",
      title: "Anant Ambani & Radhika Merchant",
      subtitle: "Wedding: Inside the Grand Celebration | Ambani Wedding",
    },
    {
      id: 5,
      image: "/media/media5.svg",
      title: "Anant Ambani & Radhika Merchant",
      subtitle: "Wedding: Inside the Grand Celebration | Ambani Wedding",
    },
    {
      id: 6,
      image: "/media/media6.svg",
      title: "Anant Ambani & Radhika Merchant",
      subtitle: "Wedding: Inside the Grand Celebration | Ambani Wedding",
    },
  ];

  return (
    <div className="min-h-screen  px-28 py-10 pb-16 border-b-8 border-secondaryLight">
      <h1 className="text-[1.5rem] font-semibold text-secondaryLight text-center mb-10">
        VIDEOS
      </h1>

      <div className="grid grid-cols-3 gap-12">
        {mediaItems.map((item) => (
          <Link
            key={item.id}
            href={`/detailed-video-resource?videoId=${item.id}`}
          >
            <div className="flex flex-col gap-4 overflow-hidden  transition-transform ">
              <div className="relative cursor-pointer">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <img src="/play.svg" alt="Play" className="w-10 h-10" />
                </div>
              </div>
              <div>
                <h2 className="text-white font-vietnam text-lg font-semibold text-left ">
                  {item.title}
                </h2>
                <p className="text-white font-vietnam text-base font-light text-left ">
                  {item.subtitle}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MediaPage;
