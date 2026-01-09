import { api } from "@/config/axios-config";
import type { status } from "@/pages/booking";
import type { ApiResponse, meta, ParamsType } from "@/types";
import type { BookingType } from "@/types/booking-type";

type BookingWithMeta = {
    bookings: BookingType[],
    meta: meta
}

export const getAllBookings = async (query: ParamsType) => {
    const { data } = await api.get<ApiResponse<BookingWithMeta>>('/booking', { params: query });

    if (!data.success) {
        throw new Error("Failed to fetch bookings.")
    }
    return data.result;

}

type updateBookingType = {
    id: string,
    status: status
}
export const updateBooking = async ({ id, status }: updateBookingType) => {
    const { data } = await api.put<ApiResponse<BookingType>>(`/booking/update/${id}`, { status })
    if (!data.success) {
        throw new Error("Failed to update booking.")
    }
    return data.result;

}