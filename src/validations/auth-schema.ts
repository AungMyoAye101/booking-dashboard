import * as z from "zod";

export const lognSchema = z.object({
    email: z
        .email("Invalid email."),
    password: z.string("Password is required.").trim()
        .min(6, "Password must be at least 6 characters logn.")
        .max(12, "Password cannot be 12 characters long.")
})
export const signupSchema = z.object({
    name: z
        .string("Name is required.").trim()
        .min(1, "Name must be at least 1 characters long.")
        .max(12, "Name cannot be 12 characters long."),
    email: z
        .email("Invalid email."),
    password: z
        .string("Password is required.").trim()
        .min(6, "Password must be at least 6 characters logn.")
        .max(12, "Password cannot be 12 characters long.")
})