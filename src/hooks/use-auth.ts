import { api } from "@/config/axios-config"
import { loginFormService, sigupFormService } from "@/services/auth-service"
import { useAuthStore } from "@/store/auth-store"
import { useMutation, useQuery } from "@tanstack/react-query"
import { toast } from "sonner"


const setAccessToken = useAuthStore.getState().setAccessToken;

export const useSignUpForm = () => {
    const setAuth = useAuthStore(s => s.setAuth)
    return useMutation({
        mutationFn: sigupFormService,
        onSuccess: (data) => {
            setAuth(data.user);
            setAccessToken(data.token!)
            toast.success("Signup successfull.")
        },
        onError: (error) => {
            console.warn(error);
            toast.error("Failed to create account.")
        }
    })
}
export const useLoginForm = () => {
    const setAuth = useAuthStore(s => s.setAuth)
    return useMutation({
        mutationFn: loginFormService,
        onSuccess: (data) => {
            setAuth(data.user);
            setAccessToken(data.token!)
            toast.success("Login successfull.")
        },
        onError: (error) => {
            console.warn(error);
            toast.error("Something went wrong.")
        }
    })
}

export const useRefresh = () => {
    return useQuery({
        queryKey: ["refresh"],
        queryFn: async () => {
            const { data } = await api.post("/auth/refresh");
            setAccessToken(data.result.token);
            return data.result;
        },
        retry: false,

    });


}
