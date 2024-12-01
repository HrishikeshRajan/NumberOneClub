"use client"
import { Card } from '@/components/ui/card'
import React, { useState } from 'react'
import { Heading } from '../Heading'
import EnableClickAnimation from '../ui/animation/EnableClickAnimation'
import CustomButton from '../ui/theme/CustomButton'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Image from 'next/image'

function PhoneNumber({onSubmit}:{ onSubmit: (number: string) => void}) {
  const [selected, setSelected] = useState("");

  function handleChange(val: string) {
    const value = val.trim()
    if (!value.startsWith('+')) {
      setSelected(`+${value}`);
    } else {
      setSelected(value);
    }
  }


  // function submitPhoneNumber(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
  //   e.preventDefault()
  //   console.log(selected)
  // }



  return (
    <Card className="w-full h-auto pb-5 bg-white font-euclid rounded-3xl px-5 shadow-md">
    <Heading
        title="Sign in"
        className="text-darkslategray text-3xl md:text-3xl xl:text-3xl px-1 py-7 font-semibold text-left"
    />
    <div className="flex flex-col items-center justify-start text-left space-y-4 w-full">
        {/* Phone Number and Change Button */}
        <div className="flex flex-row  justify-between w-full ">
        <span className="text-darkslategray text-xs text-left  font-regular ">
          Your Whatsapp Number
        </span>

        </div>

        {/* OTP Input */}
         <div className='w-full relative'>
         <PhoneInput
          country={'in'}
          onChange={(e) => {
            console.log(e)
            handleChange(e);
          }}
          inputProps={{
            name: 'phone',
            required: true,
            autoFocus: true,

          }}
          prefix='+'
          containerClass='w-full'
          buttonStyle={{backgroundColor:'transparent', border:'none'}}
          inputStyle={{width:"100%", padding:'1.3rem', textIndent: '1.3rem', borderColor:'#00C294', borderRadius:'9px'}}
          inputClass='text-crystalsongblue'
          enableSearch={true}
        />

         <Image width={10} height={10} src="whatsapp.svg" alt="whatsapp" className="w-5 h-5 absolute  top-3 right-2 bottom-1" />
         </div>
  
        {/* Sign-in Button */}
        <EnableClickAnimation className='w-full' > 
        <CustomButton onClick={() => onSubmit(selected)} className="w-full max-w-full mt-4 text-white bg-mediumseagreen rounded-lg py-6  font-semibold text-sm md:text-base active:bg-mediumseagreen focus:outline-none focus-visible:ring-2 hover:bg-mediumseagreen ">
                Sign in
        </CustomButton>
        </EnableClickAnimation>
        {/* Terms & Conditions */}
        <p className="text-darkslategray mt-2 text-xs md:text-xs text-center">
        By proceeding, I agree to the{" "}
        <span className="text-mediumseagreen cursor-pointer text-xs">
            Terms & Conditions
        </span>
        </p>
    </div>

    </Card>
  )
}

export default PhoneNumber