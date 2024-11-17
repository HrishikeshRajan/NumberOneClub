import Image from 'next/image'
import React from 'react'
import CustomButton from './theme/CustomButton'
import EnableClickAnimation from './animation/EnableClickAnimation'
export default function AskNoa() {
  return (
    <div className='bg-background-cornsilk w-full px-2 py-2 rounded-full flex items-center gap-2 justify-between text-Skobeloff '>
            <div className='flex items-center gap-1 lg:gap-2 ml-2'>
                <Image 
                        src="/spark.svg"
                        alt="company logo"
                        width={16}
                        height={16}
                        className="w-5 h-5"
                        />
                    
                    <p className='text-Skobeloff text-xs lg:text-md font-normal'>
                    Is this the right expert for me?
                    </p>
            </div>
            <div>

                <EnableClickAnimation>
                    <CustomButton className='px-4 py-2 text-Skobeloff text-xs lg:text-md font-semibold shadow-none  rounded-full bg-background-palegoldenrod active::bg-background-palegoldenrod hover:bg-background-palegoldenrod active:text-Skobeloff'> 
                    Ask Noa
                    </CustomButton>
                </EnableClickAnimation>
            </div>
        </div>
  )
}
