import * as z from "zod"

export const createRoomSchema = z.object({
    name: z.string(" is required").min(3, "Name contain at least 3 characters."),
    maxPeople: z.number().positive().min(1, "Max people must be greater than 1 ."),
    price: z.number().positive().min(1, "Price must be greater than 1 ."),
    totalRooms: z.number().positive().min(1, "Total rooms  must be greater than 1 ."),
    bedTypes: z
        .enum(["king", "queen", "full", "twin", "single"], "Bed type must be one of king, queen, full, twin or single")
})

export type createRoomType = z.infer<typeof createRoomSchema>;