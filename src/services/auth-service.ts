import { axiosInstance } from "@/config/axios-config"
import type { loginType, signupType } from "@/validations/auth-schema";

export const sigupFormService = async (formData: signupType) => {
    const { data } = await axiosInstance.post('/auth/register', formData)

    if (!data.success) {
        throw new Error("Faild to singup.")
    }
    return data;
}
export const loginFormService = async (formData: loginType) => {
    const { data } = await axiosInstance.post('/auth/login', formData)
    if (!data.success) {
        throw new Error("Faild to login.")

    }
    return data;
}