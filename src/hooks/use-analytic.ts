import { getTotal, getTotalBooking, getTotalRevenue } from "@/services/analytic-service"
import { keepPreviousData, useQuery } from "@tanstack/react-query"

export const useTotalRevenue = () => {
    return useQuery({
        queryKey: ['revenue'],
        queryFn: getTotalRevenue,
        placeholderData: keepPreviousData
    })
}
export const useGetTotals = () => {
    return useQuery({
        queryKey: ['total'],
        queryFn: getTotal,
        placeholderData: keepPreviousData
    })
}
export const useGetTotalBooking = () => {
    return useQuery({
        queryKey: ['total_Booking'],
        queryFn: getTotalBooking,
        placeholderData: keepPreviousData
    })
}