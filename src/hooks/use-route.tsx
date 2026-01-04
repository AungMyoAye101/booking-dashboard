
import { lazy } from "react"

//dashboard
const Dashboard = lazy(() => import("@/pages/home"))

//users
const UserPage = lazy(() => import("@/pages/user"))
const Profile = lazy(() => import("@/pages/user/user-profile"))


//hotels
const HotelPage = lazy(() => import("@/pages/hotel"))
const HotelDetailsPage = lazy(() => import("@/pages/hotel/hotel-details"))
const HotelCreatePage = lazy(() => import("@/pages/hotel/create-hotel"))
const HotelUpdatePage = lazy(() => import("@/pages/hotel/update-hotel"))
//rooms
const RoomPage = lazy(() => import("@/pages/room"))
const CreateRoomPage = lazy(() => import("@/pages/room/create-room"))
//Bookings
const BookingPage = lazy(() => import("@/pages/booking"))

//payment
const PaymentPage = lazy(() => import("@/pages/payment"))
export const routes = [

    {
        breadCrumb: "Dashboard",
        path: "/",
        element: <Dashboard />
    },
    // hotel
    {
        breadCrumb: "Hotel",
        path: "/hotel",
        element: <HotelPage />
    },
    {
        breadCrumb: "Hotel",
        path: "/hotel/create",
        element: <HotelCreatePage />
    },
    {
        path: "/hotel/:hotelId",
        breadCrumb: () => "Details",
        element: <HotelDetailsPage />
    },
    {
        path: "/hotel/update/:hotelId",
        breadCrumb: () => "Details",
        element: <HotelUpdatePage />
    },
    // Rooms
    {
        breadCrumb: "Room",
        path: "/room",
        element: <RoomPage />
    },
    {
        breadCrumb: "Room",
        path: "/room/create",
        element: <CreateRoomPage />
    },

    {
        breadCrumb: "User",
        path: "/user",
        element: <UserPage />
    },
    {
        breadCrumb: () => "Profile",
        path: "/user/:userId",
        element: <Profile />
    },
    {
        breadCrumb: "Booking",
        path: "/booking",
        element: <BookingPage />
    },
    {
        breadCrumb: "Payment",
        path: "/payment",
        element: <PaymentPage />
    },

]