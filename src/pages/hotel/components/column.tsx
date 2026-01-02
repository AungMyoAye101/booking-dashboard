import type { hotelTypes } from "@/types/hotel-type"
import type { ColumnDef } from "@tanstack/react-table"
import { Star } from "lucide-react"
type hotel = {
    "name": string,
    "title": string,
    "description": string,
    "rating": number,
    "star": number,
    "type": hotelTypes,
    "address": string,
    "price": number,
    "distance": string,
    "city": string,
    "createdAt": Date
}


export const hotelColumn: ColumnDef<hotel>[] = [
    {
        accessorKey: 'name',
        header: "Name"
    },
    {
        accessorKey: 'title',
        header: "Title"
    },
    {
        accessorKey: 'type',
        header: "Type"
    },
    {
        accessorKey: 'price',
        header: "Price",
        cell: ({ row }) => {

            return <p className="font-semibold">{row.original.price} $ </p>
        }
    },

    {
        accessorKey: 'star',
        header: "Star",
        cell: ({ row }) => {
            const stars = Array(row.original.star).fill(null);
            return (
                <div className="flex items-center">
                    {
                        stars.map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-amber-600" />
                        ))
                    }
                </div>
            )
        }
    },
    {
        accessorKey: 'rating',
        header: "Rating"
    },
    {
        accessorKey: 'city',
        header: "City"
    },


]