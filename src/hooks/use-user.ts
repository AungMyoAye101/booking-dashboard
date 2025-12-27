import { getAllusers, getUserById } from "@/services/user-service"
import { useQuery } from "@tanstack/react-query"

export const useUserById = (userId: string) => {
    return useQuery({
        queryKey: ["user_by_id", userId],
        queryFn: () => getUserById(userId),
        enabled: !!userId
    })
}

export const useGetAllUsers = () => {
    return useQuery({
        queryKey: ['all_user'],
        queryFn: getAllusers
    })
}