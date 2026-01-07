import type { status } from "@/pages/booking";
import { getAllBookings } from "@/services/booking-service";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
export type bookingQuerytype = {
    sort?: "asc" | 'desc',
    status?: status | null,
    page?: number,
    limit?: number,
    checkIn?: Date | undefined,
    checkOut?: Date | undefined,

}
export const useGetAllBooking = (query: bookingQuerytype) => {
    return useQuery({
        queryKey: ['bookings', query],
        queryFn: () => getAllBookings(query),
        placeholderData: keepPreviousData,
        staleTime: 3000
    })
}