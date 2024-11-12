"use client"
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { CreatorsNavMenu } from './CreatorsDropDown'

enum NavLinkPath {
    CREATORS = '/creators',
    BENEFITS = '/benefits',
    PRICING = '/pricing',
    CALCULATOR = '/calculator'
  };
export function NavLinks({ className }: { className: string }) {
  const pathname = usePathname()
  
  return (
    <div className={className}>
      <CreatorsNavMenu />
      <Link 
        href={NavLinkPath.BENEFITS} 
        className={`relative transition-colors nav-text after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-border-skobeloff after:origin-left after:transition-transform ${
            pathname === NavLinkPath.BENEFITS ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'
          }`}
       >
            Benefits
        </Link>

        <Link 
            href={NavLinkPath.PRICING} 
            className={`relative transition-colors nav-text after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-border-skobeloff after:origin-left after:transition-transform ${
                pathname === NavLinkPath.PRICING ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'
              }`}
       >
            Pricing
        </Link>
        <Link 
            href={NavLinkPath.CALCULATOR} 
            className={`relative transition-colors nav-text after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-border-skobeloff after:origin-left after:transition-transform ${
                pathname === NavLinkPath.CALCULATOR ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'
              }`}
        >
            Calculator
        </Link>

    </div>
  )
}