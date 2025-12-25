import { loginFormService, sigupFormService } from "@/services/auth-service"
import { useMutation } from "@tanstack/react-query"
import { toast } from "sonner"

export const useSignUpForm = () => {
    return useMutation({
        mutationFn: sigupFormService,
        onSuccess: () => {
            toast.success("Signup successfull.")
        },
        onError: (error) => {
            console.warn(error);
            toast.error("Failed to create account.")
        }
    })
}
export const useLoginForm = () => {
    return useMutation({
        mutationFn: loginFormService,
        onSuccess: () => {
            toast.success("Login successfull.")
        },
        onError: (error) => {
            console.warn(error);
            toast.error("Something went wrong.")
        }
    })
}