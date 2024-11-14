"use client"
// TabComponent.js
import { useState } from 'react';
import { motion } from "framer-motion";


export default function ExpertTab() {
  const [activeTab, setActiveTab] = useState("findExpert");

  return (
    <div className="flex flex-col items-center justify-center font-euclid ">
      {/* Tab Buttons */}
      <div className="flex rounded-full overflow-hidden bg-yellow-400 max-w-xs lg:max-w-lg w-full  px-2 py-2 mb-6 justify-center ">
        <button
          className={`py-2 px-4 rounded-full text-darkslategray font-semibold transition-colors relative w-full`}
          onClick={() => setActiveTab("findExpert")}
        >
        {activeTab === 'findExpert' && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 bg-white"
              style={{ borderRadius: 9999 }}
              transition={{ type: "spring", stiffness: 100,
                damping: 15, bounce: 0.2, duration: .6 }}
            />
          )}
           <span className="relative z-10 font-semibold d leading-[31.03px] text-left ">Find Expert</span>
        </button>
        <button
          className={`py-2 px-4 rounded-full text-darkslategray font-semibold transition-colors relative w-full `}
          onClick={() => setActiveTab("becomeExpert")}
        >
        {activeTab === "becomeExpert" && (
            <motion.span
              layoutId="bubble"
              className=" z-10 absolute inset-0  bg-white  text-darkslategray"
              style={{ borderRadius: 9999 }}
              transition={{ type: "spring", stiffness: 100,
                damping: 15, bounce: 0.2, duration: .6}}
            />
          )}
             <span className="relative z-10 font-semibold leading-[31.03px] text-left ">Become Expert</span>
        </button>
      </div>

      {/* Tab Content */}
      <div className="w-full px-4">
        {activeTab === "findExpert" && (
          <div className="w-full bg-gray-100 p-6 rounded-lg">
            <h2 className="text-2xl font-bold">Find Expert</h2>
            <p>Here you can find the best experts for your needs.</p>
          </div>
        )}
        {activeTab === "becomeExpert" && (
          <div className="w-full bg-gray-100 p-6 rounded-lg">
            <h2 className="text-2xl font-bold">Become Expert</h2>
            <p>Join us to become an expert and share your knowledge.</p>
          </div>
        )}
      </div>
    </div>
  );
}
