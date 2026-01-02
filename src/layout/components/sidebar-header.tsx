import { SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import logo from "@/assets/booking-logo.svg";
export function SideBarHeader() {

    return (
        <SidebarHeader>
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton
                        size="lg"
                        className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground bg-primary-foreground  text-primary"
                    >
                        <Avatar className="h-10 w-10 rounded-full bg-white p-1">
                            <AvatarImage src={logo} alt="Booking logo" />
                            <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                        </Avatar>

                        <h1 className="truncate text-lg font-semibold leading-tight  ">
                            BOOKING
                        </h1>


                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarHeader>
    )
}



export default SideBarHeader