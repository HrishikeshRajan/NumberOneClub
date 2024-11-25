"use client"
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image'
import Link from "next/link"
import { NavLinksValues } from "../seed/navLinks"
import { CreatorsNavMenu } from "./CreatorsDropDown"
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { CustomDialog } from "./Modal"
import { InputOTPFields } from "./auth/Otp"

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
        content={<InputOTPFields PhoneNumber="+2348123456789" />}
      />
         {NavLinksValues.map((link) => (
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