import React from "react";
import NavBar from "../components/landing/NavBar";
import HeroSection from "../components/landing/HeroSection";

const LandingPage = () => {
  return (
    <div className="h-screen w-screen bg-[#0A0C10] flex flex-col">
      <NavBar />
      <HeroSection />
    </div>
  );
};

export default LandingPage;
