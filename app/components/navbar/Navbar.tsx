
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { NavLinks } from '../NavLinks'
import AuthButtons from '../AuthButton'
import { navItems } from '@/app/seed/navLinks'
import { CreatorsNavMenu } from '../CreatorsDropDown'

function Navbar() {
    return (
        <header className='w-full  text-white px-4 py-4'>
            <nav className='max-w-7xl  mx-auto flex items-center justify-center xl:justify-between text-Skobeloff'  aria-label="Main navigation">
                {/* Logo Section */}
                <div className=' flex items-center bg-dark lg:gap-10 xl:gap-20'>
                    <Link href="/" aria-label='company logo'>
                        <Image
                            src="/logo.svg"
                            alt="company logo"
                            width={500}
                            height={500}
                            className=' w-16 h-16 xl:w-auto transition-all duration-300'
                            priority />
                    </Link>
                    <div className={`hidden lg:flex items-center space-x-6 font-euclid font-bold`}>
                       <CreatorsNavMenu />
                        <NavLinks items={navItems}  className={`hidden xl:flex items-center space-x-6 font-euclid`} />
                    </div>
                </div>

                {/* Auth Buttons - Hidden on Mobile */}
                <div className='hidden xl:flex items-center space-x-4' aria-label="Login Section">
                   <AuthButtons />
                </div>
            </nav>
        </header>
    )
}

export default Navbar