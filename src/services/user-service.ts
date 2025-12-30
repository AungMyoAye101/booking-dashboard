import { api } from "@/config/axios-config"
import type { ApiResponse, meta, ParamsType } from "@/types";
import type { userType } from "@/types/user-types";

type allUsersTypes = {
    users: userType[],
    meta: meta
}

export const getUserById = async (userId: string) => {
    const { data } = await api.get<ApiResponse<userType>>(`/users/${userId}`);
    if (!data.success) {
        throw new Error("Failed to get user by Id")
    }
    return data.result;
}

export const getAllusers = async ({ page = 1 }: ParamsType = {}) => {

    const { data } = await api.get<ApiResponse<allUsersTypes>>(`/users?page=${page}`);
    if (!data.success) {
        throw new Error("Failed to get all users");
    };
    return data.result;
}