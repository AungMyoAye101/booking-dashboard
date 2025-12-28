import reactIcon from "@/assets/react.svg";

import { AvatarFallback } from "@/components/ui/avatar";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { routes } from "@/hooks/use-route"
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Link, useLocation } from "react-router-dom"

// Menu items.

export function AppSidebar() {
    const { pathname } = useLocation();
    return (
        <Sidebar collapsible="icon" >
            <SidebarHeader>
                <Avatar>
                    <AvatarImage
                        src={reactIcon}
                        alt="logo "
                    />
                    <AvatarFallback>Booking</AvatarFallback>
                </Avatar>
            </SidebarHeader>

            {/* Sider bar links */}
            <SidebarContent>
                {/* <SidebarGroup>
                    <SidebarMenu>
                        {routes.map(({ name, path }, i) => (
                            <SidebarMenuItem key={i}>
                                <SidebarMenuButton asChild>
                                    <Link to={path} className={`${pathname === path ? "bg-blue-500 text-white" : ''}   hover:bg-blue-300`}>
                                        <span className="text-lg ">{name}</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroup> */}
            </SidebarContent>
            {/* 
            Side Bar footer */}
            <SidebarFooter>
                <Avatar>
                    <AvatarImage
                        src="vite.svg"
                        alt="logo "
                    />
                    <AvatarFallback>Booking</AvatarFallback>
                </Avatar>
            </SidebarFooter>
        </Sidebar>
    )
}

