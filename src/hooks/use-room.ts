
import { createRoom, deleteRoom, getAllRooms, getRoomById, updateRoom } from "@/services/room-service"
import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"

export const useGetALlRoom = (query: any) => {
    return useQuery({
        queryKey: ['room', { query }],
        queryFn: () => getAllRooms(query),
        placeholderData: keepPreviousData,
        staleTime: 30_000,
    })
}
export const useGetRoomById = (roomId: string) => {
    return useQuery({
        queryKey: ['room', roomId],
        queryFn: () => getRoomById(roomId),
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
        mutationFn: updateRoom,
        onSuccess: () => {
            toast.success("Room updated successful.")
            queryClinet.invalidateQueries({
                queryKey: ['room'],
                exact: false
            })
        },
        onError: (err) => {
            console.warn(err)
            toast.error("Failed to updat room.")
        }
    })
}
export const useDeleteRoom = () => {
    const queryClinet = useQueryClient();

    return useMutation({
        mutationFn: deleteRoom,
        onSuccess: () => {
            toast.success("Room deleted successful.")
            queryClinet.invalidateQueries({
                queryKey: ['room'],
                exact: false
            })
        },
        onError: (err) => {
            console.warn(err)
            toast.error("Failed to delete room.")
        }
    })
}