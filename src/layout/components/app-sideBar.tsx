import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom"
import type { LucideIcon } from "lucide-react";
import { sideBarData } from "./sidebar-items";
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import { CollapsibleTrigger } from "@radix-ui/react-collapsible";
import SideBarHeader from "./sidebar-header";
import User from "./user";

// Menu items.

export function AppSidebar() {
    const { pathname } = useLocation();

    return (
        <Sidebar  >
            <SideBarHeader />
            {/* Sider bar links */}
            <SidebarContent>
                <SidebarGroup>
                    {/* sigle side bar links  */}
                    <NavLink data={sideBarData.signle} path={pathname} />
                    <GroupNavLink data={sideBarData.group} path={pathname} />
                </SidebarGroup>
            </SidebarContent>
            <User />

        </Sidebar>
    )
}

type sideBarLinksType = {
    title: string,
    url: string,
    icon: LucideIcon,
    items?: {
        title: string,
        url: string,
        icon: LucideIcon
    }[]
}

const NavLink = ({ data, path }: { data: sideBarLinksType[], path: string }) => {

    return (

        <SidebarMenu>
            {
                data.map((item, i) => (
                    <SidebarMenuItem key={i} >
                        <SidebarMenuButton asChild >
                            <Link
                                to={item.url}
                                className={`${path === item.url ?
                                    " bg-accent text-accent-foreground " : ''}  
                                `}>
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
const GroupNavLink = ({ data, path }: { data: sideBarLinksType[], path: string }) => {

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
                                        className={`${link.url === path ?
                                            "bg-primary-violet text-primary-foreground-violet" : ''}  
                                  `}>
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
                                                        className={`${l.url === path ?
                                                            "bg-primary-violet text-white" : ""}`}>
                                                        <l.icon className="text-white" />
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







