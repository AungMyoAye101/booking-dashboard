import { BedDoubleIcon, DollarSignIcon, Hotel, SignalIcon, User } from "lucide-react";

const items = [
    {
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
        title: "User",
        url: '/user',
        icon: User,

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

]