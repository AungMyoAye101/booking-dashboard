import { hotelImageUpload, RoomImageUpload } from "@/services/image-service"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"

export const useImageUpload = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: hotelImageUpload,
        onSuccess: (_, variable) => {

            toast.success("Image uploaded successfully.")
            queryClient.invalidateQueries({
                queryKey: ['hotel', variable.id]
            })
        },
        onError: () => {
            toast.error("Failed to upload image.")
        }
    })
}
export const useRoomImageUpload = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: RoomImageUpload,
        onSuccess: (_, variable) => {

            toast.success("Image uploaded successfully.")
            queryClient.invalidateQueries({
                queryKey: ['rooms', variable.id]
            })
        },
        onError: (error) => {
            console.log(error)
            toast.error("Failed to upload image.")
        }
    })
}