"use client"
import React, { useState } from 'react'
import PhoneNumber from './PhoneNumber'
import { InputOTPFields } from './Otp'

function Auth() {
  
    const [loginState, setLoginState] = useState<'input' | 'opt' | 'failed'| 'success'>('input')

    return (
    <div className='flex w-full  max-w-md items-center justify-center'>

        {loginState === 'input' ? <PhoneNumber /> : <InputOTPFields />}
        
    </div>
  )
}

export default Auth