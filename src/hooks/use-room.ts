import { createRoom, getAllRooms } from "@/services/room-service"
import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"

export const useGetALlRoom = (query: any) => {
    return useQuery({
        queryKey: ['room', query],
        queryFn: () => getAllRooms(query),
        placeholderData: keepPreviousData
    })
}

export const useCreateRoom = () => {
    const queryClinet = useQueryClient();

    return useMutation({
        mutationFn: createRoom,
        onSuccess: () => {
            toast.success("Room created successful.")
            queryClinet.invalidateQueries({
                queryKey: ['room'],
                exact: false
            })
        },
        onError: (err) => {
            console.warn(err)
            toast.error("Failed to create room.")
        }
    })
}
export const useUpdateRoom = () => {
    const queryClinet = useQueryClient();

    return useMutation({
        mutationFn: createRoom,
        onSuccess: () => {
            toast.success("Room created successful.")
            queryClinet.invalidateQueries({
                queryKey: ['room'],
                exact: false
            })
        },
        onError: (err) => {
            console.warn(err)
            toast.error("Failed to create room.")
        }
    })
}