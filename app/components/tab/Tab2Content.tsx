import React from 'react'
import { Heading } from '../Heading'
import CustomButton from '../UseOneButton'

const Tab2Content = () => {
  return (
    <div className='flex justify-center flex-col items-center pb-20'>
    <Heading title='Are you an expert?' className=' yellow-green-gradient text-2xl md:text-4xl xl:text-6xl mt-20 font-extrabold font-euclid'  />
       
     <p className='mt-10 max-w-xs lg:max-w-4xl text-center font-normal text-xl text-dimgray  '>
     Manage and monetize every interaction, whether hosting 1:1 conversations, running webinars, answering questions, selling digital products, and more
     </p>

     <CustomButton
      customStyle='bg-darkslategray rounded-3xl p-6 mt-10'
     >
      Start Now
      </CustomButton>
    </div>
  )
}

export default Tab2Content