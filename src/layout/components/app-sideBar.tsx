import reactIcon from "@/assets/react.svg";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    useSidebar,
} from "@/components/ui/sidebar"
import {
    BadgeCheck,
    Bell,
    ChevronsUpDown,
    CreditCard,
    LogOut,
    Sparkles,
} from "lucide-react"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { BookDashedIcon, ChevronRight, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom"
import type { LucideIcon } from "lucide-react";
import { sideBarData } from "./sidebar-items";
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import { CollapsibleTrigger } from "@radix-ui/react-collapsible";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Menu items.

export function AppSidebar() {
    const { pathname } = useLocation();
    return (
        <Sidebar collapsible="icon" >
            <SidebarHeader>

                <NavUser user={{ name: "aung", email: "aung@gmail.com", avatar: "sss" }} />
            </SidebarHeader>

            {/* Sider bar links */}
            <SidebarContent>
                <SidebarGroup>
                    {/* sigle side bar links  */}
                    <NavLink data={sideBarData.signle} />
                    <GroupNavLink data={sideBarData.group} />
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>

                <NavUser user={{ name: "aung", email: "aung@gmail.com", avatar: "sss" }} />
            </SidebarFooter>

        </Sidebar>
    )
}

type sideBarLinksType = {
    pathname?: string,
    title: string,
    url: string,
    icon: LucideIcon,
    items?: {
        title: string,
        url: string,
        icon: LucideIcon
    }[]
}

const NavLink = ({ data }: { data: sideBarLinksType[] }) => {

    return (

        <SidebarMenu>
            {
                data.map((item, i) => (
                    <SidebarMenuItem key={i}>
                        <SidebarMenuButton asChild>
                            <Link
                                to={item.url}
                                className={`${item.pathname === "" ?
                                    "bg-blue-500 text-white" : ''}  
                                  hover:bg-blue-300`}>
                                <item.icon className="text-xl" />
                                <span>{item.title}</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))
            }
        </SidebarMenu>

    )
}
const GroupNavLink = ({ data }: { data: sideBarLinksType[] }) => {

    return (

        <SidebarMenu>
            {
                data.map((link, i) => (
                    <Collapsible
                        key={i}
                        defaultOpen={false}
                        className="group/collapsible"
                        asChild
                    >

                        <SidebarMenuItem >
                            <CollapsibleTrigger asChild>


                                <SidebarMenuButton asChild>
                                    <Link
                                        to={link.url}
                                        className={`${link.pathname === '' ?
                                            "bg-blue-500 text-white" : ''}  
                                  hover:bg-blue-300`}>
                                        <link.icon />
                                        <span>{link.title}</span>
                                        <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                    </Link>
                                </SidebarMenuButton>
                            </CollapsibleTrigger>
                            {/* Sub link */}
                            <CollapsibleContent>

                                <SidebarMenuSub>
                                    {
                                        link?.items?.map((l, index) => (
                                            <SidebarMenuSubItem key={index}>
                                                <SidebarMenuSubButton asChild>
                                                    <Link
                                                        to={l.url}
                                                        className={`${link.pathname === '' ?
                                                            "bg-blue-500 text-white" : ''}  
                                  hover:bg-blue-300`}>
                                                        <l.icon className="text-xl" />
                                                        <span>{l.title}</span>
                                                    </Link>
                                                </SidebarMenuSubButton>
                                            </SidebarMenuSubItem>
                                        ))
                                    }

                                </SidebarMenuSub>
                            </CollapsibleContent>
                        </SidebarMenuItem>

                    </Collapsible>
                ))
            }
        </SidebarMenu>

    )
}






export function NavUser({
    user,
}: {
    user: {
        name: string
        email: string
        avatar: string
    }
}) {
    const { isMobile } = useSidebar()

    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <SidebarMenuButton
                            size="lg"
                            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                        >
                            <Avatar className="h-8 w-8 rounded-lg">
                                <AvatarImage src={user.avatar} alt={user.name} />
                                <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                            </Avatar>
                            <div className="grid flex-1 text-left text-sm leading-tight">
                                <span className="truncate font-semibold">{user.name}</span>
                                <span className="truncate text-xs">{user.email}</span>
                            </div>
                            <ChevronsUpDown className="ml-auto size-4" />
                        </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                        side={isMobile ? "bottom" : "right"}
                        align="end"
                        sideOffset={4}
                    >
                        <DropdownMenuLabel className="p-0 font-normal">
                            <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                                <Avatar className="h-8 w-8 rounded-lg">
                                    <AvatarImage src={user.avatar} alt={user.name} />
                                    <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                                </Avatar>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate font-semibold">{user.name}</span>
                                    <span className="truncate text-xs">{user.email}</span>
                                </div>
                            </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem>
                                <Sparkles />
                                Upgrade to Pro
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem>
                                <BadgeCheck />
                                Account
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <CreditCard />
                                Billing
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Bell />
                                Notifications
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <LogOut />
                            Log out
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarMenuItem>
        </SidebarMenu>
    )
}

