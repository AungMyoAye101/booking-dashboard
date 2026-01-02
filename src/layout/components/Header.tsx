import ThemeToggle from "@/components/theme-toggle"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { BreadCrumb } from "@/components/BreadCrumb"

const Header = () => {
  return (
    <header
      className="flex items-center justify-between px-4 py-2 mx-4 mt-4 bg-muted text-muted-foreground  rounded-lg">
      <div
        className="flex items-center gap-4">
        <SidebarTrigger />
        <BreadCrumb />
      </div>
      <ThemeToggle />
    </header>
  )
}

export default Header