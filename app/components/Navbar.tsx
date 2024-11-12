
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { NavLinks } from './NavLinks'

function Navbar() {
    return (
        <header className='w-full  text-white px-4 py-4'>
            <nav className='max-w-7xl mx-auto flex items-center justify-center lg:justify-between text-Skobeloff'  aria-label="Main navigation">
                {/* Logo Section */}
                <div className='flex-shrink-0'>
                    <Link href="/">
                        <Image
                            src="/logo.svg"
                            alt="Logo"
                            width={520}
                            height={520}
                            className=' w-20 h-20 lg:w-auto transition-all duration-300'
                            priority />
                    </Link>
                </div>

                {/* Navigation Links - Hidden on Mobile */}
                <div className={`hidden lg:flex items-center space-x-6 font-euclid font-bold`}>
                    <NavLinks className={`hidden md:flex items-center space-x-6 font-euclid`} />
                </div>

                {/* Auth Buttons - Hidden on Mobile */}
                <div className='hidden lg:flex items-center space-x-4'>
                    <Button variant={'ghost'}  className='border-2 rounded-3xl hover:bg-Skobeloff text-Skobeloff border-Skobeloff nav-btn hover:text-white' asChild>
                        <Link href="#" >Sign Up</Link>
                    </Button>

                    <Button variant={'ghost'} className='border-2 rounded-3xl hover:bg-Skobeloff text text-Skobeloff border-Skobeloff nav-btn hover:text-white'  asChild>
                        <Link href="#" className='rounded-3xl'>Login</Link>
                    </Button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar