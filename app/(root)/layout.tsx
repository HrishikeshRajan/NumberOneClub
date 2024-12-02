import { Toaster } from "@/components/ui/sonner"
import SideSheetAbstract from "../components/abstracts/SidebarAbstract"
import Navbar from "../components/navbar/Navbar"
import { SideSheetProvider } from "../components/ui/context/SideSheetContext"

export default function Layout({
    children
  }: Readonly<{
    children: React.ReactNode
  }>) {
    return (
      <main>
       
        <SideSheetProvider>
        <Toaster />

        <Navbar />
        <SideSheetAbstract />
        {children}
        </SideSheetProvider>
     
      </main>
    )
  }