import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { routes } from "@/hooks/use-route";
import { Link, matchRoutes, useLocation } from "react-router-dom"
const breadcrumbMap: Record<string, string> = {
    home: "Home",
    hotel: "Hotel",
    update: "Update"
}
export function BreadCrumb() {
    const { pathname } = useLocation();
    const segments = pathname.split('/').filter(Boolean);

    const crumbs = segments.map((s, i) => {
        const url = "/" + segments.slice(0, i + 1).join('/');
        return {
            label: breadcrumbMap[s] ?? s,
            url
        }
    })
    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem >
                    <BreadcrumbLink href="/" className="text-accent-foreground">
                        Home
                    </BreadcrumbLink>
                </BreadcrumbItem>
                {
                    crumbs.length > 0 && <BreadcrumbSeparator />
                }
                {
                    crumbs.map((item, i) => (
                        <div key={i} className="flex items-center">
                            <BreadcrumbItem >
                                <BreadcrumbLink href={item.url} className="text-accent-foreground">
                                    {item.label}
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            {
                                crumbs.length > 0 && i !== crumbs.length - 1 && <BreadcrumbSeparator className="ml-2" />
                            }
                        </div >
                    ))
                }

            </BreadcrumbList>
        </Breadcrumb>
    )
}
