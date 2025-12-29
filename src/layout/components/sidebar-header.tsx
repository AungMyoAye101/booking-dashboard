import { SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"

export function SideBarHeader() {

    return (
        <SidebarHeader>
            <SidebarMenu>
                <SidebarMenuItem>

                    <SidebarMenuButton
                        size="lg"
                        className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                    >
                        <Avatar className="h-10 w-10 rounded-full bg-white">
                            <AvatarImage src={"booking-logo.png"} alt="Booking logo" />
                            <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                        </Avatar>
                        <div>
                            <h1 className="truncate text-lg font-semibold text-violet-700 dark:text-violet-400 leading-tight">
                                BOOKING
                            </h1>
                            <p className="text-xs -mt-1">magement</p>
                        </div>




                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarHeader>
    )
}



export default SideBarHeader