export type revenueChangeType = {
    current: number,
    previous: number
}

export type monthlyChartType = {
    month: string,
    total: number
}
export interface RevenueType extends revenueChangeType {
    chart: monthlyChartType[],
    payments: { method: "MOBILE_BANKING" | "CARD" | "BANK", total: number }[]
}

export type totals = {
    users: number,
    hotels: number,
    bookings: number
}