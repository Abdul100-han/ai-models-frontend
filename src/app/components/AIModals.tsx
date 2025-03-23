"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Import AI model images
import marketprediction from "../../../public/marketprediction.jpg";
import finance from "../../../public/finance.jpg";
import analysis from "../../../public/analytics.jpg";
import content from "../../../public/content.jpg";
import customer from "../../../public/customer.jpg";

const aiModels = [
  {
    id: "model1",
    name: "Market Prediction",
    description: "Use AI insights for smarter business decisions and stay competitive.",
    image: marketprediction,
  },
  {
    id: "model2",
    name: "Finance",
    description: "Our AI models analyze financial data for confident investments.",
    image: finance,
  },
  {
    id: "model3",
    name: "Data Analytics",
    description: "Transform data into insights with AI analytics that enhance decisions.",
    image: analysis,
  },
  {
    id: "model4",
    name: "Content Generation",
    description: "Create quality content easily with AI that knows your brand and audience.",
    image: content,
  },
  {
    id: "model5",
    name: "Customer Support",
    description: "Use AI chatbots for instant, personalized customer support.",
    image: customer,
  },
];

const AIModals = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full mt-10 flex flex-col items-center">
      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-4 border-2 border-[#E4E4E7] rounded-xl mb-6 p-2">
        {aiModels.map((model, index) => (
          <button
            key={model.id}
            onClick={() => setActiveIndex(index)}
            className={`px-4 py-2 font-semibold transition-all duration-300 rounded-[8px] ${
              activeIndex === index ? "bg-[#03217F] text-[#FFFFFF]" : "text-[#A7A7A7]"
            }`}
          >
            {model.name}
          </button>
        ))}
      </div>

      {/* Modal Display with Animation */}
      <div className="relative w-full max-w-[1042px] h-auto flex justify-center items-center">
        <AnimatePresence mode="wait">
          {aiModels[activeIndex] && (
            <motion.div
              key={activeIndex} // Ensures animations trigger when index changes
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="relative w-full bg-[#F6FAF3] shadow-lg rounded-lg p-6 flex flex-col md:flex-row items-center gap-6"
            >
              {/* Left Text Content */}
              <div className="w-full md:w-[345px] text-center md:text-start">
                <h3 className="text-2xl font-bold text-[#828282]">{aiModels[activeIndex].name}</h3>
                <p className="text-[#22263F] font-semibold text-[24px] md:text-[42px] tracking-[-2px]">
                  {aiModels[activeIndex].description}
                </p>
              </div>

              {/* Right Image */}
              <div className="w-full md:w-[520px]">
                <Image
                  src={aiModels[activeIndex].image}
                  alt={aiModels[activeIndex].name}
                  width={520}
                  height={400}
                  className="object-cover rounded-md"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AIModals;
