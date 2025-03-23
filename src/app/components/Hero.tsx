import React from "react";
import Navbar from "./Navbar";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-auto min-h-screen flex flex-col items-center justify-center text-white px-4 sm:px-6 text-center"
      style={{ backgroundImage: "url('/hero-bg.png')" }}
    >
      <Navbar />
      <div className="max-w-3xl mt-10 sm:mt-20">
        <p className="font-bold text-base sm:text-lg text-[#7191FF]">
          Leverage on Automation
        </p>
        <h1 className="text-[32px] sm:text-[48px] md:text-[64px] font-semibold tracking-tight leading-tight mt-4">
          AI Models for <br className="hidden sm:block" /> Business Solutions
        </h1>
        <p className="text-base sm:text-lg md:text-xl mt-4 sm:mt-6 mb-6 sm:mb-10 text-[#DDDDDD]">
          Leverage the power of AI to automate, analyze, and optimize your workflows. <br className="hidden sm:block" />
          Our specialized models are designed to fit different business needs.
        </p>
        <Link
          href="/get-started"
          className="bg-white text-[#05152C] px-5 sm:px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Get Started Now
        </Link>
      </div>
    </section>
  );
};

export default Hero;
