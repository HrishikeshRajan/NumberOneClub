import Navbar from "../components/navbar/Navbar"
import SideSheet from "../components/ui/modals/SideSheet"

export default function Layout({
    children
  }: Readonly<{
    children: React.ReactNode
  }>) {
    return (
      <main>
        <Navbar />
        <SideSheet />
        {children}
      </main>
    )
  }