import { api } from "@/config/axios-config"
import type { ApiResponse } from "@/types";
import type { authType } from "@/types/user-types";
import type { loginType, signupType } from "@/validations/auth-schema";

export const sigupFormService = async (formData: signupType) => {
    const { data } = await api.post<ApiResponse<authType>>('/auth/register', formData)

    if (!data.success) {
        throw new Error("Faild to singup.")
    }
    return data.result;
}
export const loginFormService = async (formData: loginType) => {

    const { data } = await api.post<ApiResponse<authType>>('/auth/login', formData)
    if (!data.success) {
        throw new Error("Faild to login.")

    }
    return data.result;
}