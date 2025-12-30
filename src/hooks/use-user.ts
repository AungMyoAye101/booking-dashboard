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

export const useGetAllUsers = ({ page }: ParamsType = {}) => {
    console.log(page);
    return useQuery({
        queryKey: ['all_user', page],
        queryFn: () => getAllusers({ page })
    })
}