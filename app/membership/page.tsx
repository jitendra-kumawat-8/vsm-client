const MembershipPage = () => {
  return (
    <div className="relative w-full h-full bg-[url('/membership-background.svg')] bg-center bg-contain -mt-6 px-32 py-24 flex flex-col gap-24 font-vietnam">
      <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-0"></div>
      <h1 className="text-[2.2rem] font-semibold uppercase text-secondaryLight text-center z-10 ">
        Membership Plans
      </h1>
      <div className="flex gap-10 items-center justify-center relative z-10">
        <img src="/silver.svg" className="w-[40%] cursor-pointer" />
        <img src="/gold.svg" className="w-[40%] cursor-pointer" />
      </div>
    </div>
  );
};

export default MembershipPage;
