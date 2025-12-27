import { api } from "@/config/axios-config"
import type { ApiResponse } from "@/types";
import type { userType } from "@/types/user-types";

export const getUserById = async (userId: string) => {
    const { data } = await api.get<ApiResponse<userType>>(`/users/${userId}`);
    if (!data.success) {
        throw new Error("Failed to get user by Id")
    }
    console.log(data)
    return data.result;
}