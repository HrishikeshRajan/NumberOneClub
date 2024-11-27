"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import CustomButton from './ui/theme/CustomButton'
import EnableClickAnimation from './ui/animation/EnableClickAnimation';
import EnableTextEaseAnimation from './ui/animation/EnableTextEaseAnimation';

function VideoConference() {
    const [duration, setDuration] = useState(30);
    const [price, setPrice] = useState(800); 
  
    const handleIncrease = () => {
      setDuration((prev) => prev + 15);
      setPrice((prev) => prev + 400); 
    };
  
    const handleDecrease = () => {
      if (duration > 15) {
        setDuration((prev) => prev - 15);
        setPrice((prev) => prev - 400); 
      }
    };
  
    return (
      <div className="flex items-center justify-between bg-whitesmoke px-4 py-2 my-10 rounded-lg  w-full">
        {/* Icon and Label */}
        <div className="flex items-center gap-1 lg:gap-3">
          <div className="text-gray-500">
          <Image 
              src="/calander.svg"
              alt="calender"
              width={5}
              height={5}
              className="w-5"
             />
          </div>
          <span className=" text-xs hidden lg:flex font-medium text-gray">Video Conference</span>
        </div>
  
       <div className='flex gap-2'>
          {/* Duration Selector */}
          <div className="flex items-center justify-center gap-2">
          <EnableClickAnimation>
            <CustomButton
              onClick={handleDecrease}
              className="w-6 h-6 text-center lg:w-8 lg:h-8 rounded-full bg-transparent text-Skobeloff border-2 border-Skobeloff flex items-center justify-center hover:bg-gray-300 transition p-0 leading-none"
              aria-label="Decrease duration"
            >
              -
            </CustomButton>
          </EnableClickAnimation>
          <EnableTextEaseAnimation refer={duration}>
          <span className="font-semibold text-sm text-Skobeloff w-14 p-0 m-0 lg:w-20 text-center">{duration} Mins</span>
        
          </EnableTextEaseAnimation>
    
          <EnableClickAnimation>
          <CustomButton
                onClick={handleIncrease}
                className="w-6 h-6 text-center lg:w-8  lg:h-8 rounded-full bg-transparent text-Skobeloff border-2 border-Skobeloff flex items-center justify-center hover:bg-gray-300 transition p-0 leading-none"
                aria-label="Increase duration"
              >
                +
              </CustomButton>
          </EnableClickAnimation>
        </div>
  
        {/* Price */}
      
          <CustomButton
            className=" text-sm px-6 py-1 rounded-full border-2 border-Skobeloff bg-Skobeloff text-white hover:bg-Skobeloff hover:text-white  transition font-semibold"
            aria-label="Price button"
          >
            ₹{price}
          </CustomButton>
        
       </div>
      </div>
    );
}

export default VideoConference