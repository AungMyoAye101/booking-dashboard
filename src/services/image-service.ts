import { api } from "@/config/axios-config"
import type { ApiResponse } from "@/types"
import type { hotelType } from "@/types/hotel-type"


type imageReturnType = {
    hotel: hotelType
}

type imageUploadType = {
    id: string,
    image: File
}
export const hotelImageUpload = async (
    { id, image }: imageUploadType) => {

    const formData = new FormData();
    formData.append("image", image)
    const { data } = await api.post<ApiResponse<imageReturnType>>(`/image/upload/hotel/${id}`, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
    if (!data.success) {
        throw new Error("Failed to upload image.")
    }

    return data.result.hotel

}


//room image upload

export const RoomImageUpload = async (
    { id, image }: imageUploadType) => {

    const formData = new FormData();
    formData.append("image", image)
    const { data } = await api.post<ApiResponse<imageReturnType>>(`/image/upload/room/${id}`, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
    if (!data.success) {
        throw new Error("Failed to upload image.")
    }

    return data.result

}