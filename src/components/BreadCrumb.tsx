import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { routes } from "@/hooks/use-route";
import { Link, matchRoutes, useLocation } from "react-router-dom"

export function BreadCrumb() {
    const location = useLocation();

    const match = matchRoutes(
        routes.map(r => ({
            path: r.path,
            breadCrumb: r.breadCrumb
        }))
        ,
        location
    )

    if (!match) [];

    const items = match?.map(r => {
        const item = typeof r.route.breadCrumb === 'function' ?
            r.route.breadCrumb()
            : r.route.breadCrumb;
        return {
            label: item,
            path: r.route.path
        }
    })
    return (
        <Breadcrumb>
            <BreadcrumbList>
                {
                    items?.map((u, i) => (

                        <BreadcrumbItem key={i}>
                            <BreadcrumbLink asChild>
                                <Link to={u.path}>{u.label}</Link>
                            </BreadcrumbLink>
                            {
                                i < items.length - 1 && <BreadcrumbSeparator />
                            }
                        </BreadcrumbItem>


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
