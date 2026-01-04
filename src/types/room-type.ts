import type { photoType } from "./hotel-type"

export type RoomType = {
    _id: string,
    name: string,
    maxPeople: number,
    price: number,
    totalRooms: number,
    hotelId: string,
    photo?: photoType
    createdAt: Date,
    updatedAt: Date,
}

