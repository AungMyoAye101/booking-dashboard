import { create } from "zustand";

type User = {
    _id: string,
    email: string
}

type authStore = {
    isAuthenticated: boolean,
    user: User | null,
    token: string | null,
    setAuth: (user: User) => void,
    clearAuth: () => void,
    setAccessToken: (token: string) => void
}

export const useAuthStore = create<authStore>((set) => ({
    user: null,
    isAuthenticated: false,
    token: null,
    setAuth: (user) => {
        set({ user, isAuthenticated: true })
    },
    clearAuth: () => {
        set({ user: null, isAuthenticated: false, token: null })
    },
    setAccessToken: (token: string) => {
        set({ token })
    }

}))