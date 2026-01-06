export type BookingType = {
    _id: string,
    userId: string,
    roomId: string | { _id: string, name: string },
    hotelId: string,
    checkIn: Date,
    checkOut: Date,
    status: "PENDING" | "CONFIRMED" | "CANCELLED" | "EXPIRED",
    quantity: number,
    totalPrice: number
}