
import { BedDoubleIcon, BookMarked, CircleDollarSign, Edit, Home, Hotel, User, type LucideIcon } from "lucide-react";

export type SideBarsLinkTypes = {
    type: "single" | "group",
    title: string,
    url: string,
    icon: LucideIcon,
    items?: {
        title: string,
        url: string,
        icon: LucideIcon,
    }[]
}

export const sidebarsItems: SideBarsLinkTypes[] = [
    {
        type: "single",
        title: "Dashboard",
        url: "/",
        icon: Home,
    },
    {
        type: "single",
        title: "User",
        url: '/user',
        icon: User,

    },
    {
        type: "single",
        title: "Booking",
        url: '/booking',
        icon: BookMarked,

    },
    {
        type: "single",
        title: "Payment",
        url: '/payment',
        icon: CircleDollarSign,

    },
    {
        type: "group",
        title: "Hotel",
        url: '/hotel',
        icon: Hotel,
        items: [
            {
                title: "Create",
                url: "/hotel/create",
                icon: Edit
            }
        ]
    },
    {
        type: "single",
        title: "Room",
        url: '/room',
        icon: BedDoubleIcon,
    }

]

