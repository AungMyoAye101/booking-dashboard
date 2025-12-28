import reactIcon from "@/assets/react.svg";
import { AvatarFallback } from "@/components/ui/avatar";
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
} from "@/components/ui/sidebar"
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { BookDashedIcon, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom"
import type { LucideIcon } from "lucide-react";
import { sideBarData } from "./sidebar-items";
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import { CollapsibleTrigger } from "@radix-ui/react-collapsible";

// Menu items.

export function AppSidebar() {
    const { pathname } = useLocation();
    return (
        <Sidebar collapsible="icon" >
            <SidebarMenu>
                <SidebarMenuItem >
                    <SidebarMenuButton asChild>
                        <Link to={'/'}>
                            <Avatar>
                                <AvatarImage
                                    src={reactIcon}
                                    alt="logo "
                                />
                                <AvatarFallback>Booking</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col">
                                <h1>Booking</h1>
                                <p>mangemnet</p>
                            </div>
                        </Link>

                    </SidebarMenuButton>
                </SidebarMenuItem>

            </SidebarMenu>

            {/* Sider bar links */}
            <SidebarContent>

                <SidebarGroup>
                    <SidebarMenu>
                        <SidebarMenuItem >
                            <SidebarMenuButton asChild>
                                <Link
                                    to={'/'}
                                    className={`${pathname === '' ?
                                        "bg-blue-500 text-white" : ''}  
                                  hover:bg-blue-300`}>
                                    <BookDashedIcon />
                                    <span>Dashboard</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                    <GroupNavLink data={sideBarData.group} />

                    {/* sigle side bar links  */}
                    <NavLink data={sideBarData.signle} />
                </SidebarGroup>
            </SidebarContent>

            {/* 
            Side Bar footer */}
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem className="flex gap-2">
                        <Avatar>
                            <AvatarImage
                                src="vite.svg"
                                alt="logo "
                            />
                            <AvatarFallback>Booking</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                            <h1>Jhon doe</h1>
                            <p>example.com</p>
                        </div>
                    </SidebarMenuItem>
                </SidebarMenu>
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
                                className={`${item.pathname === '' ?
                                    "bg-blue-500 text-white" : ''}  
                                  hover:bg-blue-300`}>
                                <item.icon />
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


