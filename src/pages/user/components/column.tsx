import type { ColumnDef } from "@tanstack/react-table"

export type User = {
    name: string,
    email: string,
    phone: string,
    city: string,
    country: string,
    createdAt: Date,
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
        accessorKey: "createdAt",
        header: "Joined At",
        cell: ({ row }) => {
            const date = new Date(row.getValue("createdAt")).toDateString();
            return <div>{date}</div>
        }
    },
]

