import { api } from "@/config/axios-config"
import type { ApiResponse } from "@/types";
import type { totals, RevenueType, monthlyChartType } from "@/types/analytic-types";

export const getTotalRevenue = async () => {
    const { data } = await api.get<ApiResponse<RevenueType>>('/analytic/dashboard/revenue');
    if (!data.success) {
        throw new Error("Failed to get total revenue.")
    }
    return data.result;
}

export const getTotal = async () => {
    const { data } = await api.get<ApiResponse<totals>>('/analytic/dashboard/total');
    if (!data.success) {
        throw new Error("Failed to get total revenue.")
    }
    return data.result;
}
export const getTotalBooking = async () => {
    const { data } = await api.get<ApiResponse<monthlyChartType[]>>('/analytic/dashboard/booking');
    if (!data.success) {
        throw new Error("Failed to get total revenue.")
    }
    return data.result;
}