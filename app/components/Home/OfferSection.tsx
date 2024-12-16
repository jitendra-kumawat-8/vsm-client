const OfferSection = () => {
  return (
    <div className="my-20 bg-[url('/offer.svg')] bg-cover bg-center p-20 w-screen h-fit relative ">
      <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-0"></div>
      <div className="flex gap-10 items-center justify-center relative z-10">
        <img src="/silver.svg" className="w-[35%] cursor-pointer" />
        <img src="/gold.svg" className="w-[35%] cursor-pointer" />
      </div>
    </div>
  );
};

export default OfferSection;
