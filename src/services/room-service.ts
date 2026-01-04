import { api } from "@/config/axios-config";
import type { ApiResponse, meta, ParamsType } from "@/types";
import type { RoomType } from "@/types/room-type";
type RoomWithMeta = {
    rooms: RoomType[],
    meta: meta
}

export const getAllRooms = async (query: ParamsType) => {
    const { data } = await
        api.get<ApiResponse<RoomWithMeta>>('/room',
            { params: query });
    if (!data.success) {
        throw new Error("Failed to fetch hotels.")
    }

    return data.result;
}