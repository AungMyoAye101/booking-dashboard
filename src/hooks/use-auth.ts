import { setAccessToken } from "@/config/axios-config"
import { loginFormService, sigupFormService } from "@/services/auth-service"
import { getUserById } from "@/services/user-service"
import { useAuthStore } from "@/store/auth-store"
import { useMutation, useQuery } from "@tanstack/react-query"
import { toast } from "sonner"

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

export const useFetchMe = () => {
    const user = useAuthStore(s => s.user)

    return useQuery({
        queryKey: ["me", user?._id],
        queryFn: () => getUserById(user!._id),
        retry: false,
        enabled: !!user?._id,

    });


}
