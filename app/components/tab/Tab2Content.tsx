"use client"
import React from 'react'
import { Heading } from '../Heading'
import CustomButton from '../ui/theme/CustomButton'
import EnableClickAnimation from '../ui/animation/EnableClickAnimation';

const Tab2Content = () => {
  return (
    <div className='flex justify-center flex-col items-center pb-20'>
    <Heading title='Are you an expert?' className=' yellow-green-gradient text-2xl md:text-4xl xl:text-6xl mt-10 font-extrabold font-euclid'  />
       
     <p className='mt-10 max-w-xs lg:max-w-4xl text-center font-normal text-xl text-dimgray  '>
     Manage and monetize every interaction, whether hosting 1:1 conversations, running webinars, answering questions, selling digital products, and more
     </p>

      <EnableClickAnimation>
          <CustomButton
          customStyle='bg-darkslategray rounded-3xl p-6 mt-10  hover:bg-darkslategray focus:bg-darkslategray active:bg-daarkslategray'
        >
          Start Now
          </CustomButton>
      </EnableClickAnimation>
    </div>
  )
}

export default Tab2Content