
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { NavLinks } from './NavLinks'
import AuthButtons from './AuthButton'
import SideSheet from './SideSheet'
function Navbar() {
    return (
        <header className='w-full  text-white px-4 py-4'>
            <nav className='max-w-7xl  mx-auto flex items-center justify-center lg:justify-between text-Skobeloff'  aria-label="Main navigation">
                {/* Logo Section */}
                <SideSheet />
                <div className=' flex items-center bg-dark lg:gap-10 xl:gap-20'>
                    <Link href="/">
                        <Image
                            src="/logo.svg"
                            alt="Logo"
                            width={520}
                            height={520}
                            className=' w-20 h-20 lg:w-auto transition-all duration-300'
                            priority />
                    </Link>
                    <div className={`hidden lg:flex items-center space-x-6 font-euclid font-bold`}>
                        <NavLinks className={`hidden md:flex items-center space-x-6 font-euclid`} />
                    </div>
                </div>

                {/* Auth Buttons - Hidden on Mobile */}
                <div className='hidden lg:flex items-center space-x-4'>
                   <AuthButtons />
                </div>
            </nav>
        </header>
    )
}

export default Navbar