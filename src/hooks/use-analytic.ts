import { getTotalRevenue } from "@/services/analytic-service"
import { keepPreviousData, useQuery } from "@tanstack/react-query"

export const useTotalRevenue = () => {
    return useQuery({
        queryKey: ['revenue'],
        queryFn: getTotalRevenue,
        placeholderData: keepPreviousData
    })
}