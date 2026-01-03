import type { hotelTypes } from "@/types/hotel-type"
import type { ColumnDef } from "@tanstack/react-table"
import { Edit, Eye, Star } from "lucide-react"
import { Link } from "react-router-dom"
type hotel = {
    _id: string
    name: string,
    description: string,
    rating: number,
    star: number,
    type: hotelTypes,
    address: string,
    price: number,
    city: string,
    country: string,

}


export const hotelColumn: ColumnDef<hotel>[] = [
    {
        accessorKey: 'name',
        header: "Name"
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
    {
        accessorKey: 'country',
        header: "Country"
    },
    {
        header: "Actions",
        cell: ({ row }) => {
            const id = row.original._id

            return <div className="flex gap-1">
                <Link to={`/hotel/update/${id}`}>
                    <Edit className="w-5 cursor-pointer hover:text-active" />
                </Link>
                <Link to={`/hotel/${id}`}>
                    <Eye className="w-5 cursor-pointer hover:text-active" />
                </Link>

            </div>
        }
    }


]