import type { photoType } from "./hotel-type"
export type BedTypes =
    | "king"
    | "queen"
    | "full"
    | "twin"
    | "single"

export type RoomType = {
    _id: string,
    name: string,
    maxPeople: number,
    price: number,
    bedTypes: BedTypes,
    totalRooms: number,
    hotelId: string | { name?: string, _id?: string },
    photo?: photoType
    createdAt: Date,
    updatedAt: Date,
}

