import { createHotel, deleteHotel, getAllHotels, getHotelById, getHotelTypeCount, updateHotel } from "@/services/hotel-service";
import type { hotelParamsTypes } from "@/types/hotel-type";
import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const useGetALlHotel = (query: hotelParamsTypes) => {
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
    const queryClient = useQueryClient();
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
    const queryClient = useQueryClient();
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
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    return useMutation({
        mutationKey: ['delete_hotel'],
        mutationFn: deleteHotel,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['hotel'] })
            navigate('/hotel')
            toast.success("Hotel deleted successful.")
        },
        onError: () => {
            toast.error("Failed to delete hotel.")
        }
    })
}