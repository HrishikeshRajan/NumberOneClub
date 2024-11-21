"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import CustomButton from "../theme/CustomButton";
import { ShowInCarousel } from "../Carousel";

type CategorySeed = {
  id: number;
  name: string;
};

function InstructorSortTab({ seed }: { seed: Array<CategorySeed> }) {
  const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tab: number) => {
      setActiveTab(tab);
    };

    if(! (Array.isArray(seed) &&
    seed.length)
    ) return


  const tabs:React.ReactNode[] =  seed.map((item, index) => (
      <div key={index} className="flex items-center gap-2 relative ">
        <CustomButton
          variant={"ghost"}
          onClick={() => handleTabClick(item.id)}
          className={`p-5 text-Skobeloff  relative hover:bg-sunglow hover:border-sunglow hover:text-Skobeloff text-sm font-semibold shadow-none rounded-full border-Skobeloff border-2 ${
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

    ))



  return (
    <div className="mt-1 justify-center gap-10 w-full flex items-center relative">
        <ShowInCarousel 
            items={tabs}
            autoplay={false}
            loop={false}
            className=' max-w-md sm:max-w-6xl md:max-w-full lg:max-w-full m-auto '
            itemClassName=' pl-4  basis-auto md:pl-5 md:basis-auto  lg:pl-5 lg:basis-auto  xl:pl-10  xl:basis-auto'  
            />
    </div>
  );

}
export default InstructorSortTab;
