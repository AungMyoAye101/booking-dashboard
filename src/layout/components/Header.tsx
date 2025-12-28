import ThemeToggle from "@/components/theme-toggle"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SidebarTrigger } from "@/components/ui/sidebar"
import reactIcon from "@/assets/react.svg"
import { BreadCrumb } from "@/components/BreadCrumb"

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4">
      <div className="flex items-center gap-4">
        <SidebarTrigger />
        <BreadCrumb />
      </div>
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <Avatar className="size-6">
          <AvatarImage
            src={reactIcon}
            alt="Profile image"
          />
          <AvatarFallback>
            U
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}

export default Header