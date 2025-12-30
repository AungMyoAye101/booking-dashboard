import { Outlet } from "react-router-dom"
import { AppSidebar } from "./components/app-sideBar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import Header from "./components/Header"

const PageLayout = () => {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <Header />
                <div className="p-4">
                    <Outlet />
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
export default PageLayout