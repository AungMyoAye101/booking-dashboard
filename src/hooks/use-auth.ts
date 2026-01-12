import { api, apiRefresh } from "@/config/axios-config"
import { loginFormService, sigupFormService } from "@/services/auth-service"
import { useAuthStore } from "@/store/auth-store"
import type { ApiResponse } from "@/types"
import type { authType } from "@/types/user-types"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
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
    const user = useAuthStore(s => s.user)
    const navigate = useNavigate();
    return useMutation({
        mutationFn: loginFormService,
        onSuccess: (data) => {
            setAuth(data.user);
            setAccessToken(data.token!)
            console.log(user)
            toast.success("Login successful.");
            navigate('/');
        },
        onError: (error: unknown) => {
            const message =
                typeof error === "object" && error !== null && "response" in error && (error as any).response?.data?.message
                    ? (error as any).response.data.message
                    : error instanceof Error
                        ? error.message
                        : "Something went wrong.";
            toast.error(message);
        }
    })
}

export const useFetchMe = () => {
    return useQuery({
        queryKey: ["me"],
        queryFn: async () => {
            const { data } = await api.get("/admin/me");
            console.log(data);
            // setAccessToken(data.result.token);
            return data.result;
        },
        retry: false,

    });


}

export const useLogout = () => {
    const clearAuth = useAuthStore.getState().clearAuth;
    return useMutation({
        mutationFn: async () => {
            const { data } = await api.post<ApiResponse<any>>('/auth/logout');
            if (!data.success) {
                throw new Error("Failed to logout")
            }
            return data.result;
        },
        onSuccess: () => {
            clearAuth();
            toast.success("Logout successful.")
        },
        onError: () => {
            toast.error("Logout failed.")
        }
    })
}

export const useRefresh = () => {
    return useQuery({
        queryKey: ['refresh'],
        queryFn: async () => {
            const { data } = await apiRefresh.post<ApiResponse<authType>>('/admin/refresh');
            return data.result;
        },
        retry: false,
        refetchOnWindowFocus: false,
    })
}
