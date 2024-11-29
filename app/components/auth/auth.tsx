"use client"
// import React, { useState } from 'react'
// import PhoneNumber from './PhoneNumber'
import { OTPInput } from './otp/Otp'

function Auth() {
  
    // const [loginState] = useState<'input' | 'opt' | 'failed'| 'success'>('input')

    return (
    <div className='flex w-full  max-w-md items-center justify-center'>

        {/* {loginState === 'input' ? <PhoneNumber /> : <InputOTPFields />} */}
        <OTPInput onVerify={(e) => alert(e)} />
    </div>
  )
}

export default Auth