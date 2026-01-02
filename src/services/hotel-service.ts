import { api } from "@/config/axios-config"
import type { ApiResponse, ParamsType } from "@/types";
import type { hotelCountByTypes, hotelType } from "@/types/hotel-type";
import type { meta } from "@/types";
import type { hotelCreateType, hotelUpdateType } from "@/validations/hotel-schmea";
type hotelWithPagination = {
    hotel: hotelType[],
    meta: meta
}

export const createHotel = async (hotel: hotelCreateType) => {
    const { data } = await
        api.post<ApiResponse<hotelType>>('/hotel/create', { hotel });
    if (!data.success) {
        throw new Error("Failed to create hotel.")
    };
    return data.result;
}

export const updateHotel = async (hotel: hotelUpdateType) => {
    const { data } = await
        api.put<ApiResponse<hotelType>>('/hotel/update', { hotel });
    if (!data.success) {
        throw new Error("Failed to update hotel.")
    };
    return data.result;
}

export const getAllHotels = async (query: ParamsType) => {
    const { data } = await
        api.get<ApiResponse<hotelWithPagination>>('/hotel',
            { params: query });
    if (!data.success) {
        throw new Error("Failed to fetch hotels.")
    }

    return data.result;
}

export const getHotelById = async (id: string) => {
    const { data } = await
        api.get<ApiResponse<hotelType>>(`/hotel/${id}`);
    if (!data.success) {
        throw new Error("Failed to fetch hotel by id.")
    }

    return data.result;
}

export const getHotelTypeCount = async () => {
    const { data } = await
        api.get<ApiResponse<hotelCountByTypes>>('/hotel/types');
    if (!data.success) {
        throw new Error("Failed to get hotel type count.")
    }
    return data.result;
}
export const deleteHotel = async (id: string) => {
    const { data } = await
        api.delete<ApiResponse<hotelType>>(`/hotel/${id}`);
    if (!data.success) {
        throw new Error("Failed to delete hotel.")
    }

    return data.result;
}
