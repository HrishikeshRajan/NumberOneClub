"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import CustomButton from "../theme/CustomButton";

type CategorySeed = {
  id: number;
  name: string;
};

function InstructorSortTab({ seed }: { seed: Array<CategorySeed> }) {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tab: number) => {
    setActiveTab(tab);
  };

  return (
    <div className="mt-10 justify-center gap-10 w-full flex items-center relative">
      {Array.isArray(seed) &&
        seed.length &&
        seed.map((item, index) => (
          <div key={index} className="flex items-center gap-2 relative">
            <CustomButton
              variant={"ghost"}
              onClick={() => handleTabClick(item.id)}
              className={`p-5 text-Skobeloff relative hover:bg-sunglow hover:border-sunglow hover:text-Skobeloff text-sm font-semibold shadow-none rounded-full border-Skobeloff border-2 ${
                activeTab === item.id
                  ? "bg-background-sunglow text-Skobeloff border-sunglow"
                  : ""
              }`}
            >
             <span className="relative z-10 font-semibold leading-[31.03px] text-left">
              {item.name}
            </span>
            </CustomButton>
            {activeTab === item.id && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 -z-10 bg-sunglow"
                style={{
                  borderRadius: 9999,
                  background: "#FFCA2C"
                }}
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
              />
            )}
          </div>
        ))}
    </div>
  );
}

export default InstructorSortTab;
