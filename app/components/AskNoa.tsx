import Image from 'next/image'
import React from 'react'
import CustomButton from './ui/theme/CustomButton'
import EnableClickAnimation from './ui/animation/EnableClickAnimation'
import ThemedButton from './ui/theme/button/ThemedButton'
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
                
                    <ThemedButton
                      colorTheme='skobeloff'
                        className='px-4 py-2 text-Skobeloff text-xs lg:text-md font-semibold shadow-none border-none  rounded-full bg-background-palegoldenrod active:bg-background-palegoldenrod hover:bg-background-palegoldenrod  hover:text-Skobeloff active:text-Skobeloff'
                    >
                       Ask Noa
                    </ThemedButton>
                </EnableClickAnimation>
            </div>
        </div>
  )
}
