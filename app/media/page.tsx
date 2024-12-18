"use client";

import Link from "next/link";

const MediaPage = () => {
  const mediaItems = [
    {
      id: 1,
      image: "/media/media1.svg",
      title: "Anant Ambani & Radhika Merchant",
      subtitle: "Wedding: Inside The Grand Celebration | Ambani Wedding",
    },
    {
      id: 2,
      image: "/media/media2.svg",
      title: "Anant Ambani & Radhika Merchant",
      subtitle: "Wedding: Inside The Grand Celebration | Ambani Wedding",
    },
    {
      id: 3,
      image: "/media/media3.svg",
      title: "Anant Ambani & Radhika Merchant",
      subtitle: "Wedding: Inside The Grand Celebration | Ambani Wedding",
    },
    {
      id: 4,
      image: "/media/media4.svg",
      title: "Anant Ambani & Radhika Merchant",
      subtitle: "Wedding: Inside The Grand Celebration | Ambani Wedding",
    },
    {
      id: 5,
      image: "/media/media5.svg",
      title: "Anant Ambani & Radhika Merchant",
      subtitle: "Wedding: Inside The Grand Celebration | Ambani Wedding",
    },
    {
      id: 6,
      image: "/media/media6.svg",
      title: "Anant Ambani & Radhika Merchant",
      subtitle: "Wedding: Inside The Grand Celebration | Ambani Wedding",
    },
  ];

  return (
    <div className="min-h-screen  px-28 py-10 pb-16 border-b-8 border-secondaryLight">
      <h1 className="text-[1.5rem] font-semibold text-secondaryLight text-center mb-10">
        MEDIA
      </h1>

      <div className="grid grid-cols-3 gap-12">
        {mediaItems.map((item) => (
          <Link key={item.id} href={`/detailed-media?videoId=${item.id}`}>
            <div className="flex flex-col gap-4 overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[250px] object-cover"
              />
              <div>
                <h2 className="text-white font-vietnam text-[1.2rem] font-semibold text-left normal-case">
                  {item.title}
                </h2>
                <p className="text-white font-vietnam text-base font-light text-left normal-case">
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
