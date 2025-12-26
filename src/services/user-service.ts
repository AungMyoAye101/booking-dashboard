import { axiosInstance } from "@/config/axios-config"
import type { ApiResponse } from "@/types";
import type { userType } from "@/types/user-types";

export const getUserById = async (userId: string) => {
    const { data } = await axiosInstance.get<ApiResponse<userType>>(`/users/${userId}`);
    console.log(data, "data in axios.")
    if (!data.success) {
        throw new Error("Failed to get user by Id")
    }
    console.log(data, "get user");

    return data.result;
}