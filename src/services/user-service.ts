import { api } from "@/config/axios-config"
import type { ApiResponse } from "@/types";
import type { userType } from "@/types/user-types";

export const getUserById = async (userId: string) => {
    const { data } = await api.get<ApiResponse<userType>>(`/users/${userId}`);
    if (!data.success) {
        throw new Error("Failed to get user by Id")
    }
    return data.result;
}

export const getAllusers = async () => {
    const { data } = await api.get<ApiResponse<userType[]>>("/users");
    if (!data.success) {
        throw new Error("Failed to get all users");
    };
    console.log(data, "service")
    return data.result;
}