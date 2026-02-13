import { create } from "zustand";

type User = {
    _id: string,
    name: string,
    email: string
}
type AuthStatus = "loading" | "authenticated" | "unauthenticated"

type authStore = {
    isAuthenticated: boolean,
    user: User | null,
    token: string | null,
    status: AuthStatus,
    setAuth: (user: User, token: string) => void,
    clearAuth: () => void,
    setAccessToken: (token: string) => void
}

export const useAuthStore = create<authStore>((set) => ({
    user: null,
    isAuthenticated: false,
    token: null,
    status: 'loading',
    setAuth: (user, token) => {
        set({ user, isAuthenticated: true, status: 'authenticated', token })
    },
    clearAuth: () => {
        set({ user: null, isAuthenticated: false, token: null, status: "unauthenticated" })
    },
    setAccessToken: (token: string) => {
        set({ token })
    }

}))