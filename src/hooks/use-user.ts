import { getUserById } from "@/services/user-service"
import { useQuery } from "@tanstack/react-query"

export const useUserById = async (userId: string) => {
    return useQuery({
        queryKey: ["user_by_id", "userId"],
        queryFn: () => (getUserById(userId)),
        enabled: !!userId
    })
}