import { api } from "@/config/axios-config"
import type { ApiResponse } from "@/types";
import type { totals, RevenueType } from "@/types/analytic-types";

export const getTotalRevenue = async () => {
    const { data } = await api.get<ApiResponse<RevenueType>>('/analytic/revenue');
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