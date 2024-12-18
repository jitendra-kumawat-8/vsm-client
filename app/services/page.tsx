import React from "react";

const OurServices = () => {
  return (
    <div className="min-h-screen bg-primary py-16 font-vietnam text-secondaryLight border-b-4 border-secondaryLight">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-[1.5rem] font-[500]  text-center mb-12 ">
          OUR SERVICES
        </h1>

        <div className="space-y-10 font-[300]">
          <div className="bg-[#45133C] rounded-lg ">
            <h2 className="text-[1.2rem] font-[500]  mb-4 pl-3 leading-[3.2rem] w-full pr-[200px] bg-gradient-to-r from-[#290523] to-[#45133C]">
              Your Astro Marriage Profile
            </h2>
            <p className="text-[1.2rem] text-secondaryLight">
              Your astrology profile will help you deeply understand your
              mindset, attitude and personality and know what kind of a partner
              would ideally complement you.
            </p>
          </div>

          <div className="bg-[#45133C] rounded-lg ">
            <h2 className="text-[1.2rem] font-[500]  mb-4 pl-3 leading-[3.2rem] w-full pr-[200px] bg-gradient-to-r from-[#290523] to-[#45133C]">
              Database of Verified profiles
            </h2>
            <p className="text-[1.2rem] text-secondaryLight">
              We follow a stringent screening and KYC process to ensure only
              authentic and verified profiles, are shared with you to select and
              shortlist from.
            </p>
          </div>

          <div className="bg-[#45133C] rounded-lg ">
            <h2 className="text-[1.2rem] font-[500]  mb-4 pl-3 leading-[3.2rem] w-full pr-[200px] bg-gradient-to-r from-[#290523] to-[#45133C]">
              Customized Search
            </h2>
            <p className="text-[1.2rem] text-secondaryLight">
              You can customize your search based on your location, professional
              status, hobbies, interests, outlook towards the future and 40
              other relevant filters. Based on your preferences, our AI
              recommendation engine will also share profile suggestions, for you
              to further explore compatible matches.
            </p>
          </div>

          <div className="bg-[#45133C] rounded-lg ">
            <h2 className="text-[1.2rem] font-[500]  mb-4 pl-3 leading-[3.2rem] w-full pr-[200px] bg-gradient-to-r from-[#290523] to-[#45133C]">
              Connect with prospective matches the way you like
            </h2>
            <ul className="text-[1.2rem] text-secondaryLight space-y-2">
              <li className="flex items-center">
                <span className=" mr-2 text-[2rem] leading-[2rem]">•</span>
                Voice call: Talk to matches directly through voice calls
              </li>
              <li className="flex items-center">
                <span className=" mr-2 text-[2rem] leading-[2rem]">•</span>
                Message: Connect with matches instantly through messaging
              </li>
              <li className="flex items-center">
                <span className=" mr-2 text-[2rem] leading-[2rem]">•</span>
                Video call: Meet your matches virtually with video calls
              </li>
            </ul>
          </div>

          <div className="bg-[#45133C] rounded-lg ">
            <h2 className="text-[1.2rem] font-[500]  mb-4 pl-3 leading-[3.2rem] w-full pr-[100px] bg-gradient-to-r from-[#290523] to-[#45133C]">
              Vedic Matchmaking: Traditional Approach to Matchmaking in the
              Modern Context
            </h2>
            <p className="text-[1.2rem] text-secondaryLight">
              Horoscope Matching with prospective matches to better the
              understand the overall marriage compatibility with that individual
            </p>
          </div>

          <div className="bg-[#45133C] rounded-lg ">
            <h2 className="text-[1.2rem] font-[500]  mb-4 pl-3 leading-[3.2rem] w-full pr-[200px] bg-gradient-to-r from-[#290523] to-[#45133C]">
              Member Resources
            </h2>
            <p className="text-[1.2rem] text-secondaryLight">
              Videos and Workshops that help you prepare for marriage, adapt to
              married life, knowing your rights in a marriage and many more
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
