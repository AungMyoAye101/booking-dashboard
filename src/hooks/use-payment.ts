import { getALlPayment, type paymentQueryType } from "@/services/payment-service";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const useGetAllPayments = (query: paymentQueryType) => {
    return useQuery({
        queryKey: ['payments', query],
        queryFn: () => getALlPayment(query),
        placeholderData: keepPreviousData
    })
}