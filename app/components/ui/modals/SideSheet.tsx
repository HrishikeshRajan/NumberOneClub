
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image'
import Link from "next/link"
import * as VisuallyHidden from "@radix-ui/react-visually-hidden"
import { CustomDialog } from "./Modal"
import { CreatorsNavMenu } from "../../CreatorsDropDown"
import { navItems } from "@/app/seed/navLinks"
import Auth from "../../auth/auth"

function SideSheet() {
  return (
    <Sheet key={'top'}>
   <SheetTrigger className='flex xl:hidden absolute top-5 left-5 p-2 focus:outline-none focus-visible:outline-none active:scale-90 transition-transform duration-200 ease-in-out focus:ring-0'>
      <Image
        src="/breadCrum.svg"
        alt="Menu"
        width={20}
        height={20}
        className='w-5 h-5 transition-all duration-300'
        priority 
      />
    </SheetTrigger>

      <SheetContent side={'top'} className="focus:outline-none">
          
      <VisuallyHidden.Root>
        <SheetTitle>Sidebar</SheetTitle>
      </VisuallyHidden.Root>

      <VisuallyHidden.Root>
        <SheetDescription>The is main sidebar</SheetDescription>
      </VisuallyHidden.Root>

     
      <CustomDialog
        triggerOn={
          <Link href='#' className='flex items-center gap-2 p-2  transition-colors text-lg font-semibold text-Skobeloff'>
          <p className='text-sm capitalize'>Login</p>
        </Link>
        }
        triggerText="login"
        triggerVariant="ghost"
        dialogTitle=""
        dialogDescription=""
        content={<Auth />}
      />
         {Array.isArray(navItems) && navItems.length && navItems.map((link) => (
          <Link href={link.path} key={link.path} className='flex items-center gap-2 p-2  transition-colors text-lg font-semibold text-Skobeloff'>

            <p className='text-sm capitalize'>{link.label}</p>
          </Link>
        ))}
         <CreatorsNavMenu />
      </SheetContent>
    </Sheet>
  )
}

export default SideSheet