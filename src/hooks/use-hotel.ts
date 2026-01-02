import { createHotel, getAllHotels, getHotelById, getHotelTypeCount, updateHotel } from "@/services/hotel-service";
import type { ParamsType } from "@/types";
import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
const queryClient = useQueryClient();
export const useGetALlHotel = (query: ParamsType) => {
    return useQuery({
        queryKey: ['hotel', { query }],
        queryFn: () => getAllHotels(query),
        placeholderData: keepPreviousData,
    })
}

export const useGetHotelById = (id: string) => {
    return useQuery({
        queryKey: ['hotel_by_id', id],
        queryFn: () => getHotelById(id)
    })
}

export const useGetHotelCountByTypes = () => {
    return useQuery({
        queryKey: ['hotel_types'],
        queryFn: getHotelTypeCount,
    })
}

//create hotel

export const useCreateHotel = () => {
    return useMutation({
        mutationKey: ['create_hotel'],
        mutationFn: createHotel,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['hotel'] })
            toast.success("Hotel created successfull.")
        },
        onError: (error) => {
            console.warn(error)
            toast.error("Failed to create hotel.")
        }
    })
};

//update hotel
export const useUpdateHotel = () => {
    return useMutation({
        mutationKey: ['update_hotel'],
        mutationFn: updateHotel,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['hotel'] })
            toast.success("Hote  updated successfull.")
        },
        onError: (error) => {
            console.warn(error)
            toast.error("Failed to   update hotel.")
        }
    })
};

export const useDeleteHotel = () => {
    return useMutation({
        mutationKey: ['update_hotel'],
        mutationFn: updateHotel,
        onSuccess: () => {
            toast.success("Hotel deleted successful.")
        },
        onError: () => {
            toast.error("Failed to delete hotel.")
        }
    })
}