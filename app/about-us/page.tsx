"use client";

import { Button } from "@mui/material";
import React, { useState } from "react";
import TestimonialSection from "../components/Home/TestimonialSection";

const AboutUs = () => {
  const [viewMore, setViewMore] = useState(false);

  return (
    <div className="min-h-screen bg-[#45133C] text-secondaryLight font-vietnam pt-16">
      <div className=" w-full">
        <section className="mb-16 border-b-8 border-secondaryLight pb-16 px-20">
          <h1 className="text-3xl font-semibold text-left mb-4 mr-auto">
            ABOUT US
          </h1>
          <p className="text-2xl leading-relaxed">
            "I Have Been Doing Astrology Consultations For Over 15 Years And
            Have Looked At Over 20,000 Charts. Over 50% Of My Consultations Are
            Regarding Marital Problems - Be Finding The Right Partner, Delays In
            Marriages Or Dealing With Post Marital Problems."
          </p>
          <p className="text-2xl leading-relaxed mt-4">
            Horoscope Matching Of Different Houses With Marriages Fail, And
            Realized That The Youth Of Our Country Need A Lot Of Guidance In
            Finding A Compatible Life Partner. The 3rd House - Your
            Communication, 7th House - Your Relationships, 11th House - Your
            Friendships And 12th House - Your Bed Pleasures. The Emotions, And
            The Psychology. So Many Variables, Which Cannot Simply Be Entered
            Into A Software Application And Expect To Find Your Match. Kundali
            Matching Is Important.
          </p>
          <p className="text-2xl leading-relaxed mt-4">
            Through Matchmaking In The Vedic Tradition, We Will Help You Find
            Your Soulmate - That Person With Whom You Evolve And Mature
            Together, Emotionally, And Spiritually, In A Relationship Filled
            With Light And Love.
          </p>
        </section>

        <section className=" border-b-8 border-secondaryLight pb-16 px-20">
          <div className="grid grid-cols-5 items-start gap-20">
            <div className="col-span-2 flex flex-col items-center">
              <img
                src="about-us/founder.svg"
                alt="Founder"
                className="w-full h-full mb-4 mt-20"
              />
              <p className="text-2xl leading-relaxed text-center  font-vietnam font-semibold">
                Mr. Satish Roy
              </p>
              <p className="text-xl leading-relaxed text-center  font-vietnam ">
                Founder
              </p>
            </div>
            <div className="col-span-3">
              <h2 className="text-3xl font-semibold text-center mx-auto mb-10">
                OUR FOUNDER
              </h2>
              <p className="text-2xl  ">
                “I have been doing astrology consultations for Over 15 Years and
                have looked at over 20,000 charts. Over 50% of my consultations
                are regarding marital problems - be finding the right partner,
                delays in marriage  or dealing with post marital problems.
              </p>
              <p className="text-2xl  mt-4">
                I have identified 100 different reasons why marriages fail, and
                I’ve realized that the youth of our country need a lot of
                guidance in finding a compatible life partner- their soulmate”
                Marriage is not that simple. It involves two people and
                especially in India, their families as well. It involves their
                personalities, their desires, their emotions, and their
                psychology- so many  variables, which cannot simply formulate
                all  into a cannot simply formulate all  into a software
                application and expect to find your match. Kundali matching is
                important.
              </p>
              <p className="text-2xl  mt-4">
                Through matchmaking in the Vedic tradition, we will help you
                find your soulmate- that person with whom you evolve and mature
                together, emotionally, and spiritually, in a relationship filled
                with light and love
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16 border-b-8 border-secondaryLight py-16 px-20 bg-[#F7E7CE] text-[#45133C] flex flex-col ">
          <div className="flex gap-8 items-center justify-end">
            <p className="text-2xl leading-relaxed text-right w-4/5 font-vietnam">
              "To Be The No.1 In Our Niche And Introduce New Features Beneficial
              To Members. To Continue To Grow With A Loyal And Increasing
              Customer Network Across The Globe."
            </p>
            <div className="flex flex-col items-center gap-6">
              <img src="about-us/vision.svg" alt="vision" />
              <h2 className="text-5xl  text-center mb-8">VISION</h2>
            </div>
          </div>

          <div className="flex gap-8 items-center justify-start">
            <div className="flex flex-col items-center gap-6">
              <img src="about-us/mission.svg" alt="mission" />
              <h2 className="text-5xl  text-center mb-8">MISSION</h2>
            </div>
            <p className="text-2xl leading-relaxed text-left w-4/5 -mt-14 font-vietnam">
              "To Help You Move Closer To The Desired Outcome With Convenience.
              To Provide A Safe Progressive Matchmaking Platform. Offer New
              Matchmaking Features To Meet Member Expectations. Continued Growth
              In Our Membership Base Around The World."
            </p>
          </div>
        </section>

        <section className=" border-b-8 border-secondaryLight pb-16 px-20 flex flex-col items-center">
          <h2 className="text-3xl font-semibold text-center">OUR TEAM</h2>
          <div className="grid grid-cols-3 gap-x-36 mt-20 px-10 ">
            <div className="flex flex-col items-center">
              <img
                src="about-us/team1.svg"
                alt="Priti Sarepaka"
                className="w-full h-full mb-4"
              />
              <p className="text-2xl font-semibold font-vietnam text-center">
                Priti Sarepaka
              </p>
              <p className="text-xl font-vietnam text-center">Marketing Head</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="about-us/team2.svg"
                alt="Naman Jain"
                className="w-full h-full mb-4"
              />
              <p className="text-2xl font-semibold font-vietnam text-center">
                Naman Jain
              </p>
              <p className="text-xl font-vietnam text-center">
                Technology Head
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="about-us/team3.svg"
                alt="Santosh Kelkar"
                className="w-full h-full mb-4"
              />
              <p className="text-2xl font-semibold font-vietnam text-center">
                Santosh Kelkar
              </p>
              <p className="text-xl font-vietnam text-center">
                Customer Support
              </p>
            </div>
          </div>
          {viewMore && (
            <div className="grid grid-cols-3 gap-x-36 mt-20 px-10 ">
              <div className="flex flex-col items-center">
                <img
                  src="about-us/team1.svg"
                  alt="Priti Sarepaka"
                  className="w-full h-full mb-4"
                />
                <p className="text-2xl font-semibold font-vietnam text-center">
                  Priti Sarepaka
                </p>
                <p className="text-xl font-vietnam text-center">
                  Marketing Head
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="about-us/team2.svg"
                  alt="Naman Jain"
                  className="w-full h-full mb-4"
                />
                <p className="text-2xl font-semibold font-vietnam text-center">
                  Naman Jain
                </p>
                <p className="text-xl font-vietnam text-center">
                  Technology Head
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="about-us/team3.svg"
                  alt="Santosh Kelkar"
                  className="w-full h-full mb-4"
                />
                <p className="text-2xl font-semibold font-vietnam text-center">
                  Santosh Kelkar
                </p>
                <p className="text-xl font-vietnam text-center">
                  Customer Support
                </p>
              </div>
            </div>
          )}
          <Button
            variant="outlined"
            className="!border-secondaryLight !text-secondaryLight  !px-10 !py-2 !rounded-lg !mx-auto !mt-10"
            onClick={() => setViewMore(!viewMore)}
          >
            {viewMore ? "View Less" : "View More"}
          </Button>
        </section>
        <TestimonialSection />
      </div>
    </div>
  );
};

export default AboutUs;
