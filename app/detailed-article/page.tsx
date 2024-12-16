"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

const ArticleDetailPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DetailContent />
    </Suspense>
  );
};

const DetailContent = () => {
  const searchParams = useSearchParams();
  const id = searchParams?.get("videoId");

  const content = (
    <>
      <h3 className="text-secondaryLight text-2xl mb-4">
        What is the Haldi Ceremony?
      </h3>
      <p className="mb-6">
        Haldi (Turmeric) is a traditional paste made from turmeric, sandalwood,
        rose water, and sometimes other ingredients like mustard oil or milk.
        This paste is applied to the bride and groom's bodies by their family
        and friends.
      </p>
      <h3 className="text-secondaryLight text-2xl mb-4">Significance:</h3>
      <ul className="list-disc pl-6 space-y-4">
        <li>
          <span className="font-semibold">Purification:</span> Turmeric is
          believed to purify the skin, body, and soul. It is known for its
          antiseptic properties and is thought to cleanse the couple, making
          them ready for the sacred wedding ceremony.
        </li>
        <li>
          <span className="font-semibold">Auspiciousness:</span> The yellow
          color of Haldi is considered auspicious and symbolizes prosperity,
          happiness, and positive energy. It is believed to ward off evil
          spirits and bring good luck to the couple.
        </li>
      </ul>
    </>
  );

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
        <div className="text-secondaryLight font-light text-2xl font-vietnam col-span-3">
          {content}
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailPage;
