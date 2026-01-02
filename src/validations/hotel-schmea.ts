import * as z from "zod";

export const hotelCreateSchema = z.object({
    "name": z
        .string()
        .min(3, "Name must contain 3 characters."),
    "title": z
        .string()
        .min(3, "Title must contain 3 characters."),
    "description": z
        .string()
        .min(3, " Description must contain 3 characters."),
    "rating": z
        .number().min(1, "Rating connot be less than 1.")
        .max(10, "Rating cannot be greater than 10"),
    "star": z
        .number()
        .min(1, "Star connot be less than 1.")
        .max(5, "Star cannot be greater than 10"),
    "type": z.
        enum(['hotel', 'motel', 'guest-house'],
            "Type must be one of hotel, motel or guest house."),
    "address": z.
        string()
        .min(3, "Address must contain 3 characters."),
    "price": z.number().positive("Price must be greater"),
    "amenities": z
        .array(z.string()
            .min(1, "Amenites must contain 1 character"),
            "Amenities are required."),
    "distance": z
        .string()
        .min(3, "Distance must contain 3 characters."),
    "city": z
        .string()
        .min(3, " City must contain 3 characters."),
})
export const hotelUpdateSchema = z.object({
    "name": z
        .string()
        .min(3, "Name must contain 3 characters.").optional(),
    "title": z
        .string()
        .min(3, "Title must contain 3 characters.").optional(),
    "description": z
        .string()
        .min(3, " Description must contain 3 characters.").optional(),
    "rating": z
        .number().min(1, "Rating connot be less than 1.")
        .max(10, "Rating cannot be greater than 10").optional(),
    "star": z
        .number()
        .min(1, "Star connot be less than 1.")
        .max(5, "Star cannot be greater than 10").optional(),
    "type": z.
        enum(['hotel', 'motel', 'guest-house'],
            "Type must be one of hotel, motel or guest house.").optional(),
    "address": z.
        string()
        .min(3, "Address must contain 3 characters.").optional(),
    "price": z.number().positive("Price must be greater").optional(),
    "amenities": z
        .array(z.string()
            .min(1, "Amenites must contain 1 character"),
            "Amenities are required.").optional(),
    "distance": z
        .string()
        .min(3, "Distance must contain 3 characters.").optional(),
    "city": z
        .string()
        .min(3, " City must contain 3 characters.").optional(),
})

export type hotelCreateType = z.infer<typeof hotelCreateSchema>;
export type hotelUpdateType = z.infer<typeof hotelUpdateSchema>;