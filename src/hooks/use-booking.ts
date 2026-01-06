import { getAllBookings } from "@/services/booking-service";
import type { ParamsType } from "@/types";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const useGetAllBooking = (query: ParamsType) => {
    return useQuery({
        queryKey: ['bookings', query],
        queryFn: () => getAllBookings(query),
        placeholderData: keepPreviousData
    })
}