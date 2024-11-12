"use client"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function CreatorsNavMenu() {
  const pathname = usePathname()

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger 
            className={`relative nav-text after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-border-skobeloff after:origin-left after:transition-transform ${
              pathname === '/creators' ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100 hover:text-Skobeloff active:text-Skobeloff'
            } flex items-center gap-3 [&>svg]:w-10 [&>svg]:h-10 [&>svg]:text-sliversand [&>svg]:ml-1`}
          >
            Creators
          </NavigationMenuTrigger>
          
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 w-48 text-Skobeloff font-light">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="/creators/profile" className="block p-2 hover:bg-slate-100 rounded-md ">
                    Profile
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link href="/creators/dashboard" className="block p-2 hover:bg-slate-100 rounded-md">
                    Dashboard
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link href="/creators/settings" className="block p-2 hover:bg-slate-100 rounded-md">
                    Settings
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}