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
        <NavigationMenuItem className="w-fit">
          <NavigationMenuTrigger 
            className={`relative pl-2 text-sm xl:text-lg text-Skobeloff font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-border-skobeloff after:origin-left after:transition-transform ${
              pathname === '/creators' ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100 hover:text-Skobeloff active:text-Skobeloff'
            } flex items-center gap-0 [&>svg]:w-10 [&>svg]:h-5 md:[&>svg]:w-5 md:[&>svg]:h-10 [&>svg]:text-sliversand [&>svg]:ml-1 data-[state=open]:text-Skobeloff data-[state=closed]:text-Skobeloff bg-transparent visited:text-Skobeloff`}
          >
            Creators
          </NavigationMenuTrigger>
          
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 w-48 text-Skobeloff font-light">
              <li key={1}>
                <NavigationMenuLink asChild>
                  <Link href="/creators/profile" className="block p-2 hover:bg-slate-100 rounded-md ">
                    Profile
                  </Link>
                </NavigationMenuLink>
              </li>
              <li key={2}>
                <NavigationMenuLink asChild>
                  <Link href="/creators/dashboard" className="block p-2 hover:bg-slate-100 rounded-md">
                    Dashboard
                  </Link>
                </NavigationMenuLink>
              </li>
              <li key={3}>
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