import { BedDoubleIcon, BookDashedIcon, DollarSignIcon, Hotel, SignalIcon, User } from "lucide-react";

export const sideBarData = {
    signle: [

        {
            title: "User",
            url: '/user',
            icon: User,

        },
        {
            title: "Booking",
            url: '/booking',
            icon: SignalIcon,

        },
        {
            title: "Payment",
            url: '/payment',
            icon: DollarSignIcon,

        },
    ],

    group: [{
        title: "Hotel",
        url: '/hotel',
        icon: Hotel,
        items: [
            {
                title: "Create",
                url: "/hotel/create"
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
                url: "/room/create"
            }
        ]
    },
    ]

}