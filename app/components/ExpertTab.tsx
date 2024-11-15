"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";


interface TabData {
    id: string;
    label: string;
    content?:  React.ReactNode;
  }
  
  interface ExpertTabProps {
    tabs: TabData[];
  }
export default function ExpertTab({ tabs }:ExpertTabProps) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);  

  return (
    <div className="flex flex-col items-center justify-center font-euclid">
      {/* Tab Buttons */}
      <div className="flex rounded-full overflow-hidden bg-sunglow max-w-xs lg:max-w-lg w-full px-2 py-2 mb-6 justify-center">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`py-2 px-4 rounded-full text-darkslategray font-semibold transition-colors relative w-full`}
            onClick={() => setActiveTab(tab.id)}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 z-10 bg-white"
                style={{ borderRadius: 9999 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  bounce: 0.2,
                  duration: 0.6,
                }}
              />
            )}
            <span className="relative z-10 font-semibold leading-[31.03px] text-left">
              {tab.label}
            </span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <>
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <div key={tab.id} className="w-full flex justify-center">
                <AnimatePresence mode="wait">
                    {tabs.map((tab) =>
                        activeTab === tab.id ? (
                        <motion.div
                            key={tab.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="w-full flex justify-center"
                        >
                            {tab.content}
                        </motion.div>
                        ) : null
                    )}
        </AnimatePresence>
              </div>
            )
        )}
      </>
    </div>
  );
}
