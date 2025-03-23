import React from "react";
import Image from "next/image";

import catalog from "../../../public/catalog.jpg";
import circooles from "../../../public/circooles.jpg";
import layers from "../../../public/layers.jpg";
import quetie from "../../../public/quetie.jpg";
import sisyphus from "../../../public/sisyphus.jpg";
import AIModals from "./AIModals";

const Features = () => {
  const companiesLogo = [layers, sisyphus, circooles, catalog, quetie];

  return (
    <section className="w-full py-4 bg-transparent">
      <p className="text-center text-[#667085] text-lg font-medium">
        Join 4,000+ companies already growing
      </p>

      {/* Logos container */}
      <div className="flex justify-between items-center w-full mt-6 px-8">
        {companiesLogo.map((logo, index) => (
          <div key={index} className="h-[48px] flex items-center">
            <Image
              src={logo}
              alt={`Company ${index + 1}`}
              width={120}
              height={60}
              className="object-contain"
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col justify-center items-center text-center w-full mt-8">
        <h1 className="text-[#22263F] text-[50px] font-bold">
          AI Models tailored for <br /> your business needs
        </h1>

        <p className="text-[#828282] mt-4">
          Leverage the power of AI to automate, analyze, and optimize your
          workflows. Our <br /> specialized models are designed to fit different
          business needs.
        </p>

        {/* AI Modal */}
        <AIModals />
      </div>
    </section>
  );
};

export default Features;
