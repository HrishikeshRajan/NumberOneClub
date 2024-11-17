"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import CustomButton from './theme/CustomButton'

function VideoConference() {
    const [duration, setDuration] = useState(30); // Default duration
    const [price, setPrice] = useState(800); // Default price
  
    const handleIncrease = () => {
      setDuration((prev) => prev + 15);
      setPrice((prev) => prev + 400); // Increase price by ₹400 for every 15 mins
    };
  
    const handleDecrease = () => {
      if (duration > 15) {
        setDuration((prev) => prev - 15);
        setPrice((prev) => prev - 400); // Decrease price by ₹400 for every 15 mins
      }
    };
  
    return (
      <div className="flex items-center justify-between bg-whitesmoke px-4 py-2 my-10 rounded-lg  w-full max-w-md md:max-w-lg">
        {/* Icon and Label */}
        <div className="flex items-center gap-3">
          <div className="text-gray-500">
          <Image 
              src="/calander.svg"
              alt="calender"
              width={5}
              height={5}
              className="w-5"
             />
          </div>
          <span className="font-medium text-gray">Video Conference</span>
        </div>
  
        {/* Duration Selector */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleDecrease}
            className="w-8 h-8 rounded-full bg-transparent text-Skobeloff border-2 border-Skobeloff flex items-center justify-center hover:bg-gray-300 transition p-0"
            aria-label="Decrease duration"
          >
            -
          </button>
          <span className="font-semibold text-Skobeloff w-20 text-center">{duration} Mins</span>
          <CustomButton
            onClick={handleIncrease}
            className="w-8 h-8 rounded-full bg-transparent text-Skobeloff border-2 border-Skobeloff flex items-center justify-center hover:bg-gray-300 transition p-0"
            aria-label="Increase duration"
          >
            +
          </CustomButton>
        </div>
  
        {/* Price */}
        <div>
          <button
            className="px-6 py-1 rounded-full border-2 border-Skobeloff text-Skobeloff hover:bg-Skobeloff hover:text-white  transition font-semibold"
            aria-label="Price button"
          >
            ₹800
          </button>
        </div>
      </div>
    );
}

export default VideoConference