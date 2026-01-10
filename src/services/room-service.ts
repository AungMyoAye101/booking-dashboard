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
type updateRoom = {
    roomId: string,
    room: createRoomType
}

type room = {
    room: RoomType
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

export const getRoomById = async (roomId: string) => {
    const { data } = await api.get<ApiResponse<room>>(`/room/${roomId}`);
    if (!data.success) {
        throw new Error("Failed to get room")
    }
    return data.result;
}

export const createRoom = async ({ hotelId, room }: createRoom) => {
    const { data } = await
        api.post<ApiResponse<RoomType>>(`/room/${hotelId}/create`, room)
    if (!data.success) {
        throw new Error("Failed to create room.")
    }

    return data.result;
}

export const updateRoom = async ({ roomId, room }: updateRoom) => {
    const { data } = await
        api.post<ApiResponse<RoomType>>(`/room/update/${roomId}`, room)
    if (!data.success) {
        throw new Error("Failed to update room")
    }

    return data.result;
}



export const deleteRoom = async (roomId: string) => {
    const { data } = await api.delete<ApiResponse<RoomType>>(`/room/delete/${roomId}`);
    if (!data.success) {
        throw new Error("Failed to delete room")
    }
    return data.result;
}
