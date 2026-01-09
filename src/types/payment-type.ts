export type PaymentType = {
    _id: string,
    bookingId: string,
    userId: string | { name: string, _id: string },
    paymentMethod: "MOBILE_BANKING" | "CARD" | "BANK",
    status: "PENDING" | "PAID" | "FAILED",
    amount: number,
    paidAt: Date
}

export type paymentStatus = "PENDING" | "PAID" | "FAILED";

