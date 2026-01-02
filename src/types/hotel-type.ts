export type hotelTypes = "hotel" | "motel" | "guest-house"

export type hotelType = {
    "_id": string,
    "name": string,
    "title": string,
    "description": string,
    "rating": number,
    "star": number,
    "type": hotelTypes,
    "address": string,
    "price": number,
    "amenities": string,
    "distance": string,
    "city": string,
    "createdAt": Date
}

export type hotelCountByTypes = {
    type: hotelTypes,
    count: number
}

export type hotelParamsTypes = {
    search?: string,
    type?: hotelTypes,
    page?: number,
    limit?: number,
    sort?: "asc" | "desc"

}