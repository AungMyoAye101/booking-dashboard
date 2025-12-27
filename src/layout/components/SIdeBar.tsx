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

// Menu items.

export function AppSidebar() {
    return (
        <Sidebar className="mt-20">
            <SidebarContent>
                <SidebarGroup>
                    <SidebarMenu>
                        {routes.map(({ name, path }, i) => (
                            <SidebarMenuItem key={i}>
                                <SidebarMenuButton asChild>
                                    <a href={path}>

                                        <span>{name}</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}