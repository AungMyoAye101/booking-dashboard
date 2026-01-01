import { getAllusers, getUserById } from "@/services/user-service"
import type { ParamsType } from "@/types"
import { keepPreviousData, useQuery } from "@tanstack/react-query"


export const useUserById = (userId: string) => {
    return useQuery({
        queryKey: ["user_by_id", userId],
        queryFn: () => getUserById(userId),
        enabled: !!userId
    })
}

export const useGetAllUsers = (meta: ParamsType) => {
    return useQuery({
        queryKey: ['all_user', meta],
        queryFn: () => getAllusers(meta),
        placeholderData: keepPreviousData,
        staleTime: 30_000,
    })
}