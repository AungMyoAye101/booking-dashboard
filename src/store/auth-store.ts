import { create } from "zustand";

type User = {
    _id: string,
    email: string
}

type authStore = {
    isAuthenticated: boolean,
    user: User | null,
    setAuth: (user: User) => void,
    clearAuth: () => void
}

export const useAuthStore = create<authStore>((set) => ({
    user: null,
    isAuthenticated: false,
    setAuth: (user) => {
        set({ user, isAuthenticated: true })
    },
    clearAuth: () => {
        set({ user: null, isAuthenticated: false })
    }

}))