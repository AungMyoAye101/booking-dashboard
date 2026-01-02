import type { hotelTypes } from "@/types/hotel-type"
import type { ColumnDef } from "@tanstack/react-table"
import { Star, StarIcon } from "lucide-react"
type hotel = {
    "name": string,
    "title": string,
    "description": string,
    "rating": number,
    "star": number,
    "type": hotelTypes,
    "address": string,
    "price": number,
    "amenities": string,
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

            return <p className="text-primary">{row.original.price} $ </p>
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
                            <StarIcon key={i} className="text-yellow-400 text-[6px]" />
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
    {
        accessorKey: 'amenities',
        header: "Amenities"
    },

]