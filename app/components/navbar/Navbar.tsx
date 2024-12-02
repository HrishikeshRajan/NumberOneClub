"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import RegularNavbar from './RegularNavbar'

function Navbar() {

    const pathname = usePathname();
    const isDashboardRoute = pathname.startsWith("/dashboard");

    return  (!isDashboardRoute ? <RegularNavbar /> : null);
}

export default Navbar