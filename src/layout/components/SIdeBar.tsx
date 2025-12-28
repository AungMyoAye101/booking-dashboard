import { Calendar, Home, Hotel, Inbox, ReceiptPoundSterlingIcon, Search, Settings, User } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { routes } from "@/hooks/use-route"
import { Link, useLocation } from "react-router-dom"

// Menu items.

export function AppSidebar() {
    const {pathname} = useLocation();
    return (
        <Sidebar >
            <SidebarContent>
                <SidebarGroup>
                    <SidebarMenu>
                        {routes.map(({ name, path }, i) => (
                            <SidebarMenuItem key={i}>
                                <SidebarMenuButton asChild>
                                    <Link to={path} className={`${pathname === path ? "bg-blue-500 text-white" :''}   hover:bg-blue-300`}>
                                      <span className="text-lg ">{name}</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}

