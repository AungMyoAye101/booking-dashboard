
import {
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Link, useLocation } from "react-router-dom"

export function BreadCrumb() {
    const path = useLocation().pathname;
    const pathName = path.split('/');
    console.log(pathName)
    return (
        <Breadcrumb>
            <BreadcrumbList>
                {
                    pathName.map((u, i) => (
                        <div key={i} className="flex items-center">
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to={path}>{u}</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            {
                                i > 0 && <BreadcrumbSeparator />
                            }

                        </div>
                    ))
                }
                {/* <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link to="/">Home</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link to="/docs/components">Components</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem> */}

            </BreadcrumbList>
        </Breadcrumb>
    )
}
