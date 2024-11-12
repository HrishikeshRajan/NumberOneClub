"use client"
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useState } from 'react'

export default function AuthButtons() {
  const [activeButton, setActiveButton] = useState('login')

  return (
    <div className='hidden lg:flex items-center space-x-4'>
      <Button 
        variant={'ghost'} 
        className={`border-2 rounded-3xl text-Skobeloff border-Skobeloff nav-btn hover:bg-Skobeloff hover:text-white
          ${activeButton === 'signup' ? 'bg-Skobeloff text-white' : 'hover:bg-Skobeloff hover:text-white'} hover:text-white`}
        asChild
        onClick={() => setActiveButton('signup')}
      >
        <Link href="#">Sign Up</Link>
      </Button>

      <Button 
        variant={'ghost'} 
        className={`border-2 rounded-3xl text-Skobeloff border-Skobeloff nav-btn hover:bg-Skobeloff hover:text-white
          ${activeButton === 'login' ? 'bg-Skobeloff text-white' : 'hover:bg-Skobeloff hover:text-white'} hover:text-white`}
        asChild
        onClick={() => setActiveButton('login')}
      >
        <Link href="#" className='rounded-3xl'>Login</Link>
      </Button>
    </div>
  )
}