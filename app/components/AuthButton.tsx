"use client"
import Link from 'next/link'
import { useState } from 'react'
import CustomButton from './theme/CustomButton'
import EnableClickAnimation from './animation/EnableClickAnimation'

export default function AuthButtons() {
  const [activeButton, setActiveButton] = useState('login')

  return (
    <div className='hidden lg:flex items-center space-x-4'>

     <EnableClickAnimation>
        <CustomButton
              variant={'ghost'}
              customStyle={`border-2 rounded-3xl text-Skobeloff border-Skobeloff nav-btn hover:bg-Skobeloff hover:text-white
              ${activeButton === 'signup' ? 'bg-Skobeloff text-white' : 'hover:bg-Skobeloff hover:text-white'} hover:text-white`} 
              asChild
              onClick={() => setActiveButton('signup')}
          >
          <Link href="#">Sign Up</Link>
          </CustomButton>
     </EnableClickAnimation>
     <EnableClickAnimation>
        <CustomButton
              variant={'ghost'}
              customStyle={`border-2 rounded-3xl text-Skobeloff border-Skobeloff nav-btn hover:bg-Skobeloff hover:text-white
              ${activeButton === 'login' ? 'bg-Skobeloff text-white' : 'hover:bg-Skobeloff hover:text-white'} hover:text-white`} 
              asChild
              onClick={() => setActiveButton('login')}
          >
          <Link href="#">Login</Link>
          </CustomButton>
     </EnableClickAnimation>

    </div>
  )
}