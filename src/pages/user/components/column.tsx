import type { ColumnDef } from "@tanstack/react-table"

export type User = {
    name: string,
    email: string,
    phone: string,
    city: string,
    country: string,
    joinedAt: Date,
}

export const column: ColumnDef<User>[] = [
    {
        accessorKey: "name",
        header: "Name"
    },
    {
        accessorKey: "email",
        header: "Email"
    },
    {
        accessorKey: "phone",
        header: "Phone"
    },
    {
        accessorKey: "city",
        header: "City"
    },
    {
        accessorKey: "country",
        header: "Country"
    },
    {
        accessorKey: "joinedAt",
        header: "Joined At"
    },
]

