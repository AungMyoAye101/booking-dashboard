import type { ApiResponse } from "@/types";
import type { authType } from "@/types/user-types";
import axios, {
    AxiosError,
    type AxiosInstance,
    type AxiosResponse
} from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const axiosInstance: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json"
    },
    withCredentials: true
});

//access token 
let accessToken: string | null = localStorage.getItem("accessToken");

export const setAccessToken = (token: string) => {
    accessToken = token;
}

console.log(accessToken, "acc");
axiosInstance.interceptors.request.use(
    (config) => {

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


axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => response,
    async (error) => {

        const originalRequest = error.config;

        if (error.response?.status === 401 && originalRequest && !originalRequest._retry) {
            originalRequest._retry = true;

            if (isRefreshing) {
                return new Promise((resolve, reject) => {
                    failedQueue.push({ resolve, reject });
                }).then((token) => {
                    originalRequest.headers.Authorization = `Bearer ${token}`;
                    return axiosInstance(originalRequest);
                })
            }
            isRefreshing = true;

            //call refresh token

            try {

                const { data } = await axiosInstance.post<ApiResponse<authType>>("/auth/refresh");
                const newToken = data.result.token!;
                console.log(newToken, "After refresh")
                localStorage.setItem("accessToken", newToken);

                //update default headers

                axiosInstance.defaults.headers.Authorization = `Bearer ${newToken}`;

                processQueue(null, newToken);

                originalRequest.headers.Authorization = `Bearer ${newToken}`;
                return axiosInstance(originalRequest);

            } catch (refreshError) {
                processQueue(refreshError as AxiosError);

                localStorage.removeItem("accessToken");

                // window.location.href = "/login";
                return Promise.reject(refreshError)

            } finally {
                isRefreshing = false;
            }
        }
        return Promise.reject(error)
    }
)
