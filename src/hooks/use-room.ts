import { getAllRooms } from "@/services/room-service"
import { keepPreviousData, useQuery } from "@tanstack/react-query"

export const useGetALlRoom = (query: any) => {
    return useQuery({
        queryKey: ['room', query],
        queryFn: () => getAllRooms(query),
        placeholderData: keepPreviousData
    })
}