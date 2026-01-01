import { api } from "@/config/axios-config"
import type { ApiResponse, meta, ParamsType } from "@/types";
import type { userType } from "@/types/user-types";

type allUsersTypes = {
    users: userType[],
    meta: meta
}
type user = {
    user: userType
}

export const getUserById = async (userId: string) => {
    const { data } = await api.get<ApiResponse<user>>(`/users/${userId}`);
    if (!data.success) {
        throw new Error("Failed to get user by Id")
    }
    return data.result.user;
}

export const getAllusers = async (meta: ParamsType) => {
    const { data } = await api.get<ApiResponse<allUsersTypes>>(
        `/users`, { params: meta })
    if (!data.success) {
        throw new Error("Failed to get all users");
    };
    return data.result;
}