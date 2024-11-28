"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import CustomButton from "../ui/theme/CustomButton";
import { ShowInCarousel } from "../ui/sliders/Carousel";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type CategorySeed = {
  id: number;
  name: string;
};

function InstructorSortTab({ seed }: { seed: Array<CategorySeed> }) {

  const searchParams = useSearchParams()

  const pathname = usePathname()
   const  {replace} = useRouter()

 
  const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tab: number, term:string) => {
      setActiveTab(tab);
      const params = new URLSearchParams(searchParams);

      if(term){
        params.set('tag', term)
      }else{
        params.delete('tag')
      }
      replace(`${pathname}?${params.toString()}`);
    };

    if(! (Array.isArray(seed) &&
    seed.length)
    ) return


  const tabs:React.ReactNode[] =  seed.map((item, index) => (
      <div key={index} className="flex items-center gap-2 relative ">
        <CustomButton
          variant={"ghost"}
          onClick={() => handleTabClick(item.id, item.name)}
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
    <div className="my-8 justify-center  w-full flex items-center relative ">
        <ShowInCarousel 
            items={tabs}
            autoplay={false}
            loop={false}
            className='max-w-full sm:max-w-full md:max-w-full lg:max-w-full'
            itemClassName='pl-5  basis-auto md:pl-5 md:basis-auto  lg:pl-5 lg:basis-auto  xl:pl-10  xl:basis-auto'
            contentClassName="pl-5"  
            />
    </div>
  );

}
export default InstructorSortTab;
