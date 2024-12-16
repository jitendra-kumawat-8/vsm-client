"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

const MediaDetailPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DetailContent />
    </Suspense>
  );
};

const DetailContent = () => {
  const searchParams = useSearchParams();
  const id = searchParams?.get("videoId");

  const content =
    "We help you to find your match with whom you can evolve together, both emotionally and spiritually, in a relationship filled with light and love. Our traditional Vedic approach to matchmaking through Kundali Milan, provides a sound scientific base to check the overall marriage compatibility of the couple. Our Vedic astrology based Resources will help you prepare for and adapt to life post marriage. We help you to find your match with whom you can evolve together, both emotionally and spiritually, in a relationship filled with light and love. Our traditional Vedic approach to matchmaking through Kundali Milan, provides a sound scientific base to check the overall marriage compatibility of the couple. Our Vedic astrology based Resources will help you prepare for and adapt to life post marriage.";

  const mediaItems = [
    {
      id: 1,
      image: "/media/media1.svg",
      title: "ANANT AMBANI & RADHIKA MERCHANT",
      subtitle: "WEDDING: INSIDE THE GRAND CELEBRATION | AMBANI WEDDING",
    },
    {
      id: 2,
      image: "/media/media2.svg",
      title: "ANANT AMBANI & RADHIKA MERCHANT",
      subtitle: "WEDDING: INSIDE THE GRAND CELEBRATION | AMBANI WEDDING",
    },
    {
      id: 3,
      image: "/media/media3.svg",
      title: "ANANT AMBANI & RADHIKA MERCHANT",
      subtitle: "WEDDING: INSIDE THE GRAND CELEBRATION | AMBANI WEDDING",
    },
    {
      id: 4,
      image: "/media/media4.svg",
      title: "ANANT AMBANI & RADHIKA MERCHANT",
      subtitle: "WEDDING: INSIDE THE GRAND CELEBRATION | AMBANI WEDDING",
    },
    {
      id: 5,
      image: "/media/media5.svg",
      title: "ANANT AMBANI & RADHIKA MERCHANT",
      subtitle: "WEDDING: INSIDE THE GRAND CELEBRATION | AMBANI WEDDING",
    },
    {
      id: 6,
      image: "/media/media6.svg",
      title: "ANANT AMBANI & RADHIKA MERCHANT",
      subtitle: "WEDDING: INSIDE THE GRAND CELEBRATION | AMBANI WEDDING",
    },
  ];

  const mediaItem = mediaItems.find((item) => item.id === Number(id));

  if (!mediaItem) {
    return <div>Media not found</div>;
  }

  return (
    <div className="h-full px-20 py-10 pb-16 border-b-8 border-secondaryLight">
      <h1 className="text-[2.2rem] font-semibold text-secondaryLight text-center mb-10 uppercase">
        {mediaItem.title}
      </h1>
      <div className="grid grid-cols-5 gap-10">
        <div className="col-span-2">
          <img
            src={mediaItem.image}
            alt={mediaItem.title}
            className="w-full h-auto mb-8"
          />
          <div>
            <h2 className="text-white font-vietnam text-xl font-semibold text-left uppercase">
              {mediaItem.title}
            </h2>
            <p className="text-white font-vietnam text-lg font-light text-left uppercase">
              {mediaItem.subtitle}
            </p>
          </div>
        </div>
        <p className="text-white text-2xl font-vietnam col-span-3">{content}</p>
      </div>
    </div>
  );
};

export default MediaDetailPage;
