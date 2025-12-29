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
    console.log(pathname, "p");

    const segments = pathname.split('/').filter(Boolean);
    console.log(segments, "s");
    const crumbs = segments.map((s, i) => {
        const url = "/" + segments.slice(0, i + 1).join('/');
        return {
            label: breadcrumbMap[s] ?? s,
            url
        }
    })

    console.log(crumbs, "crumb")
    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem >
                    <BreadcrumbLink href="/">
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
                                <BreadcrumbLink href={item.url}>
                                    {item.label}
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            {
                                i > 0 ? i !== crumbs.length : <BreadcrumbSeparator />
                            }
                        </div >
                    ))
                }

            </BreadcrumbList>
        </Breadcrumb>
    )
}
