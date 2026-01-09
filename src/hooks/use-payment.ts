import { getALlPayment, getPaymentById, type paymentQueryType } from "@/services/payment-service";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const useGetAllPayments = (query: paymentQueryType) => {
    return useQuery({
        queryKey: ['payments', query],
        queryFn: () => getALlPayment(query),
        placeholderData: keepPreviousData
    })
}

export const useGetPaymentById = (id: string) => {
    return useQuery({
        queryKey: ['payments_id', id],
        queryFn: () => getPaymentById(id),
    })
}