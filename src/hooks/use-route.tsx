import { lazy } from "react"

//dashboard
const Dashboard = lazy(() => import("@/pages/home"))

//users
const UserPage = lazy(() => import("@/pages/user"))
const Profile = lazy(() => import("@/pages/user/user-profile"))


//hotels
const HotelPage = lazy(() => import("@/pages/hotel"))
const HotelDetailsPage = lazy(() => import("@/pages/hotel/hotel-details"))

//Bookings
const BookingPage = lazy(() => import("@/pages/booking"))

//payment
const PaymentPage = lazy(() => import("@/pages/payment"))

export const routes = [

    {
        name: "Dashboard",
        path: "/",
        element: <Dashboard />
    },
    {
        name: "Hotel",
        path: "/hotel",
        element: <HotelPage />
    },
    {
        name: "Hotel Details ",
        path: "/hotel/:hotelId",
        element: <HotelDetailsPage />
    },
    {
        name: "User",
        path: "/user",
        element: <UserPage />
    },
    {
        name: "Profile",
        path: "/user/:userId",
        element: <Profile />
    },
    {
        name: "Booking",
        path: "/booking",
        element: <BookingPage />
    },
    {
        name: "Payment",
        path: "/paymnet",
        element: <PaymentPage />
    },

]