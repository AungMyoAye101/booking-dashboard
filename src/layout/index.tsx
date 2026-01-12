import { Outlet } from "react-router-dom"
import { AppSidebar } from "./components/app-sideBar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import Header from "./components/Header"
import { useAuthStore } from "@/store/auth-store"

const PageLayout = () => {
    const { user, token } = useAuthStore();
    console.log(user, token)
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <Header />
                <div className="px-4 py-6 ">
                    <Outlet />
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
export default PageLayout