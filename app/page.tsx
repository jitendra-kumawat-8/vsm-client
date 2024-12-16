"use client";

import Header from "./components/Header/Header";
import HeroSection from "./components/Home/HeroSection";
import VideoSection from "./components/Home/VideoSection";
import ServicesSection from "./components/Home/ServicesSection";
import OfferSection from "./components/Home/OfferSection";
import TestimonialSection from "./components/Home/TestimonialSection";
const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow flex flex-col items-center justify-center bg-[#F7E7CE]">
        <HeroSection />
        <VideoSection />
        <ServicesSection />
        <OfferSection />
        <TestimonialSection />
      </main>
    </div>
  );
};

export default HomePage;
