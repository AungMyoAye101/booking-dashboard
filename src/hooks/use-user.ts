import { getAllusers, getUserById } from "@/services/user-service"
import type { ParamsType } from "@/types"
import { useQuery } from "@tanstack/react-query"


export const useUserById = (userId: string) => {
    return useQuery({
        queryKey: ["user_by_id", userId],
        queryFn: () => getUserById(userId),
        enabled: !!userId
    })
}

export const useGetAllUsers = ({ page, limit, sort, search }: ParamsType = {}) => {
    return useQuery({
        queryKey: ['all_user', page, search, limit, sort],
        queryFn: () => getAllusers({ page, search, limit, sort })
    })
}