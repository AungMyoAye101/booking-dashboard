import { api } from "@/config/axios-config";
import type { ApiResponse, meta, ParamsType } from "@/types";
import type { RoomType } from "@/types/room-type";
import type { createRoomType } from "@/validations/room-schema";
type RoomWithMeta = {
    rooms: RoomType[],
    meta: meta
}

type createRoom = {
    hotelId: string,
    room: createRoomType
}

export const getAllRooms = async (query: ParamsType) => {
    console.log(query)
    const { data } = await
        api.get<ApiResponse<RoomWithMeta>>('/room',
            { params: query });
    if (!data.success) {
        throw new Error("Failed to fetch hotels.")
    }

    return data.result;
}

export const createRoom = async ({ hotelId, room }: createRoom) => {
    const { data } = await
        api.post<ApiResponse<RoomType>>(`/room/${hotelId}/create`, room)
    if (!data.success) {
        throw new Error("Failed to fetch hotels.")
    }

    return data.result;
}