import type { status } from "@/pages/booking";
import { getAllBookings, updateBooking } from "@/services/booking-service";
import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
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

    })
}
export const useUpdateBooking = () => {
    const qc = useQueryClient()
    return useMutation({
        mutationKey: ['update_booking'],
        mutationFn: updateBooking,
        onSuccess: () => {

            toast.success("Booking updated.")
            qc.invalidateQueries({
                queryKey: ['bookings'],
                exact: false
            })

        },
        onError: () => toast.error("Failed to update booking.")
    })
}