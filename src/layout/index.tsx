
import { Outlet } from "react-router-dom"
import { AppSidebar } from "./components/SIdeBar"
import { Suspense } from "react"
import { LoaderCircleIcon } from "lucide-react"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import Header from "./components/Header"



const PageLayout = () => {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <div>
                <Header />
                <Outlet />
                </div>
       
            </SidebarInset>

            
        </SidebarProvider>
    )
}
export default PageLayout