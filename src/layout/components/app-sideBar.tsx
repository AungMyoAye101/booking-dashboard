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
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import { CollapsibleTrigger } from "@radix-ui/react-collapsible";
import SideBarHeader from "./sidebar-header";
import User from "./user";
import { sidebarsItems } from "./sidebar-items";

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

                    {
                        sidebarsItems.map((data, i) => {
                            if (data.type === "single") {
                                return <NavLink data={data} path={pathname} key={i} />
                            } else {

                                return <GroupNavLink data={data} path={pathname} key={i} />
                            }
                        })
                    }

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

const NavLink = ({ data, path }: { data: sideBarLinksType, path: string }) => {

    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton asChild >
                    <Link
                        to={data.url}
                        className={`${path === data.url ?
                            " bg-accent text-accent-foreground " : ''}  
                        `}>
                        <data.icon className="text-xl" />
                        <span>{data.title}</span>
                    </Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>

    )
}
const GroupNavLink = ({ data, path }: { data: sideBarLinksType, path: string }) => {

    return (

        <SidebarMenu>
            <Collapsible
                defaultOpen={false}
                className="group/collapsible"
                asChild
            >

                <SidebarMenuItem >
                    <CollapsibleTrigger asChild>


                        <SidebarMenuButton asChild>
                            <Link
                                to={data.url}
                                className={`${data.url === path ?
                                    "bg-primary-violet text-primary-foreground-violet" : ''}  
                          `}>
                                <data.icon />
                                <span>{data.title}</span>
                                <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                            </Link>
                        </SidebarMenuButton>
                    </CollapsibleTrigger>
                    {/* Sub link */}
                    <CollapsibleContent>

                        <SidebarMenuSub>
                            {
                                data?.items?.map((l, index) => (
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
        </SidebarMenu>

    )
}







