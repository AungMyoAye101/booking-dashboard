import { sigupFormService } from "@/services/auth-service"
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