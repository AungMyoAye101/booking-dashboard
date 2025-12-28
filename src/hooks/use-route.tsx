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
        breadCrumb: "Dashboard",
        path: "/",
        element: <Dashboard />
    },
    {
        breadCrumb: "Hotel",
        path: "/hotel",
        element: <HotelPage />
    },
    {
        path: "/hotel/:hotelId",
        breadCrumb: () => "Details",
        element: <HotelDetailsPage />
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
        path: "/paymnet",
        element: <PaymentPage />
    },

]