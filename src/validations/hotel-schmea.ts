import * as z from "zod";

export const hotelCreateSchema = z.object({
    "name": z
        .string()
        .min(2, "Name must contain 2 characters."),
    "description": z
        .string()
        .min(3, " Description must contain 3 characters."),
    "price": z
        .number("Price must be number.")
        .positive("Price must be greater"),
    "rating": z
        .number("Rating must be number.").min(1, "Rating connot be less than 1.")
        .max(10, "Rating cannot be greater than 10"),
    "star": z
        .number("Star must be number.")
        .min(1, "Star connot be less than 1.")
        .max(5, "Star cannot be greater than 10"),
    "type": z.
        enum(
            ['hotel', 'motel', 'guest-house'],
            "Type must be one of hotel, motel or guest house."),
    "address": z
        .string()
        .min(3, "Address must contain 3 characters."),

    "amenities": z
        .array(z.string()
            .min(1, "Amenites must contain 1 character"),
            "Amenities are required."),
    "city": z
        .string()
        .min(3, " City must contain 3 characters."),
    "country": z
        .string()
        .min(2, "Country must contain 2 characters."),
})



export type hotelCreateType = z.infer<typeof hotelCreateSchema>;
