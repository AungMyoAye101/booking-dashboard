import { useAuthStore } from "@/store/auth-store";
import type { ApiResponse } from "@/types";
import type { authType } from "@/types/user-types";


import axios, {
    AxiosError,
    type AxiosInstance,
    type AxiosResponse
} from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const api: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json"
    },
    withCredentials: true
});
export const apiRefresh: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json"
    },
    withCredentials: true
});


api.interceptors.request.use(
    (config) => {
        const accessToken: string | null = useAuthStore.getState().token;
        if (accessToken && config.headers) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => Promise.reject(error)

);

let isRefreshing = false

type failedQueueType = {
    resolve: (token: string) => void;
    reject: (error: AxiosError) => void;
}



let failedQueue: failedQueueType[] = [];

const processQueue = (error: AxiosError | null, token?: string) => {
    failedQueue.forEach(({ resolve, reject }) => {
        if (error) {
            reject(error);
        } else {
            resolve(token!);
        }
    })

    failedQueue = [];
}

api.interceptors.response.use(
    (response: AxiosResponse) => response,
    async (error) => {
        const setAccessToken = useAuthStore.getState().setAccessToken;
        const clearAuth = useAuthStore.getState().clearAuth;
        const originalRequest = error.config;

        if (error.response?.status === 401 && originalRequest && !originalRequest._retry) {
            if (
                originalRequest.url.includes("admin/me") ||
                originalRequest.url.includes("admin/refresh") ||
                originalRequest.url.includes("admin/login") ||
                originalRequest.url.includes("admin/logout")
            ) {
                return Promise.reject(error);
            }
            originalRequest._retry = true;

            if (isRefreshing) {
                return new Promise((resolve, reject) => {
                    failedQueue.push({ resolve, reject });
                }).then((token) => {
                    originalRequest.headers.Authorization = `Bearer ${token}`;
                    return api(originalRequest);
                })
            }
            isRefreshing = true;

            //call refresh token

            try {

                const { data } = await apiRefresh.post<ApiResponse<authType>>("/admin/refresh");
                console.log(data)
                const newToken = data.result.token!;
                console.log(newToken, "After refresh");
                setAccessToken(newToken);

                //update default headers

                // api.defaults.headers.Authorization = `Bearer ${newToken}`;

                processQueue(null, newToken);

                originalRequest.headers.Authorization = `Bearer ${newToken}`;
                return api(originalRequest);

            } catch (refreshError) {
                processQueue(refreshError as AxiosError);
                clearAuth();
                failedQueue = [];
                isRefreshing = false;
                window.location.replace("/login");
                return Promise.reject(refreshError)

            } finally {
                isRefreshing = false;
            }
        }
        return Promise.reject(error)
    }
)
