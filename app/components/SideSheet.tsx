
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image'

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
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your account
            and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}

export default SideSheet