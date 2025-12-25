import { axiosInstance } from "@/config/axios-config"
import type { signupType } from "@/validations/auth-schema";

export const sigupFormService = async (formData: signupType) => {
    const { data } = await axiosInstance.post('/auth/register', formData)

    console.log(data)

    return data;
}