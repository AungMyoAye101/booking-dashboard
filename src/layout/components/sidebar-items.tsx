
import { BedDoubleIcon, BookMarked, CircleDollarSign, Home, Hotel, SquarePen, User } from "lucide-react";

export const sideBarData = {
    signle: [
        {
            title: "Dashboard",
            url: "/",
            icon: Home,
        },
        {
            title: "User",
            url: '/user',
            icon: User,

        },
        {
            title: "Booking",
            url: '/booking',
            icon: BookMarked,

        },
        {
            title: "Payment",
            url: '/payment',
            icon: CircleDollarSign,

        },
    ],

    group: [{
        title: "Hotel",
        url: '/hotel',
        icon: Hotel,
        items: [
            {
                title: "Create",
                url: "/hotel/create",
                icon: SquarePen
            }
        ]
    },

    {
        title: "Room",
        url: '/room',
        icon: BedDoubleIcon,
        items: [
            {
                title: "Create",
                url: "/room/create",
                icon: SquarePen,
            }
        ]
    },
    ]

}