
import NavBar from "./components/NavBar"
import { Outlet } from "react-router-dom"
import { AppSidebar } from "./components/SIdeBar"
import { Suspense } from "react"
import { LoaderCircleIcon } from "lucide-react"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"


const PageLayout = () => {
    return (
        <div className="min-h-screen max-w-8xl mx-auto  relative ">
            <NavBar />
            <SidebarProvider>
                <SidebarTrigger className="absolute top-4 right-4 md:hidden size-10" />
                <AppSidebar />
                {/* <AppSidebar /> */}
                <div className="flex-1 p-4">
                    <Suspense fallback={<LoaderCircleIcon />}>
                        <Outlet />
                    </Suspense>
                </div>
            </SidebarProvider>
        </div>
    )
}

export default PageLayout