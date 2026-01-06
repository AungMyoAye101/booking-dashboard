import { api } from "@/config/axios-config";
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
    console.log(data)
    return data.result;

}