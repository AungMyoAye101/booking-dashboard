import { api } from "@/config/axios-config"
import type { ApiResponse, meta } from "@/types"
import type { PaymentType } from "@/types/payment-type"

type PaymentWithMetaType = {
    payments: PaymentType[],
    meta: meta
}

export type paymentQueryType = {
    page?: number,
    limit?: number,
    sort?: 'asc' | 'desc',
    status?: "PENDING" | "PAID" | "FAILED",
}

export const getALlPayment = async (query: paymentQueryType) => {
    const { data } = await api.get<ApiResponse<PaymentWithMetaType>>('/payment', {
        params: query
    })

    if (!data.success) {
        throw new Error("Failed to payments.")
    }

    return data.result;

}

export const getPaymentById = async (id: string) => {
    const { data } = await api.get<ApiResponse<{ payment: PaymentType }>>(`/payment/${id}`);
    if (!data.success) {
        throw new Error("Failed to get payment")
    }

    return data.result.payment;
}