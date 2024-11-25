import { InputOTPFields } from '@/app/components/auth/Otp'
import { Input } from 'postcss'
import React from 'react'

function page() {
  return (
    <div className='flex flex-col gap-4 items-center justify-center h-screen p-2'>
        <InputOTPFields 
         PhoneNumber='+2348123456789'
        />
    </div>
 )
}

export default page