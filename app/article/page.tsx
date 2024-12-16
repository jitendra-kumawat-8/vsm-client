"use client";

import Link from "next/link";

const MediaPage = () => {
  const mediaItems = [
    {
      id: 1,
      image: "/article/article1.svg",
      title: "What is the Haldi Ceremony Wedding: ",
      subtitle: "Inside the Grand Celebration | Ambani Wedding",
    },
    {
      id: 2,
      image: "/article/article2.svg",
      title: "ANANT AMBANI & RADHIKA MERCHANT",
      subtitle: "WEDDING: INSIDE THE GRAND CELEBRATION | AMBANI WEDDING",
    },
    {
      id: 3,
      image: "/article/article3.svg",
      title: "Agni Haven",
      subtitle: "Wedding: Inside the Grand Celebration | Ambani Wedding",
    },
    {
      id: 4,
      image: "/article/article4.svg",
      title: "ANANT AMBANI & RADHIKA MERCHANT",
      subtitle: "WEDDING: INSIDE THE GRAND CELEBRATION | AMBANI WEDDING",
    },
    {
      id: 5,
      image: "/article/article5.svg",
      title: "ANANT AMBANI & RADHIKA MERCHANT",
      subtitle: "WEDDING: INSIDE THE GRAND CELEBRATION | AMBANI WEDDING",
    },
    {
      id: 6,
      image: "/article/article6.svg",
      title: "ANANT AMBANI & RADHIKA MERCHANT",
      subtitle: "WEDDING: INSIDE THE GRAND CELEBRATION | AMBANI WEDDING",
    },
  ];

  return (
    <div className="min-h-screen  px-28 py-10 pb-16 border-b-8 border-secondaryLight">
      <h1 className="text-[2.2rem] font-semibold text-secondaryLight text-center mb-10">
        ARTICLES
      </h1>

      <div className="grid grid-cols-3 gap-12">
        {mediaItems.map((item) => (
          <Link key={item.id} href={`/detailed-article?videoId=${item.id}`}>
            <div className="flex flex-col gap-4 overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[250px] object-cover"
              />
              <div>
                <h2 className="text-white font-vietnam text-lg font-semibold text-left uppercase">
                  {item.title}
                </h2>
                <p className="text-white font-vietnam text-base font-light text-left uppercase">
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
