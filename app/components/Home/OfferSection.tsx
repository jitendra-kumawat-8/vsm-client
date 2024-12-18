import { useRef } from "react";
import { useInView } from "react-intersection-observer";

const OfferSection = () => {
  const { ref: refSilver, inView: inViewSilver } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const { ref: refGold, inView: inViewGold } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <div className="my-20 bg-[url('/offer.svg')] bg-cover bg-center p-20 w-screen h-fit relative ">
      <div
        className={`absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-0 `}
      ></div>
      <div className={`flex gap-10 items-center justify-center relative z-10}`}>
        <img
          ref={refSilver}
          src="/silver.svg"
          className={`w-[35%] cursor-pointer ${inViewSilver ? "animate-fadeIn" : ""}  `}
        />
        <img
          ref={refGold}
          src="/gold.svg"
          className={`w-[35%] cursor-pointer ${inViewGold ? "animate-fadeIn" : ""}`}
        />
      </div>
    </div>
  );
};

export default OfferSection;
