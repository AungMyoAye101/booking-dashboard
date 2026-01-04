import type { hotelTypes } from "@/types/hotel-type"
import type { RoomType } from "@/types/room-type"
import type { ColumnDef } from "@tanstack/react-table"
import { Edit, Eye } from "lucide-react"
import { Link } from "react-router-dom"



export const RoomColumn: ColumnDef<RoomType>[] = [
    {
        accessorKey: 'name',
        header: "Name"
    },


    {
        accessorKey: 'price',
        header: "Price",
        cell: ({ row }) => {

            return <p className="font-semibold" > {row.original.price} $ </p>
        }
    },

    {
        accessorKey: 'maxPeople',
        header: "Max People"
    },
    {
        accessorKey: 'totalRooms',
        header: "Total "
    },
    {
        accessorKey: 'hotelId',
        header: "Hotel",
        cell: ({ row }) => {
            const hotel = row.original.hotelId;
            const name = typeof hotel === "string" ? hotel : hotel?.name ?? "";
            return <span>{name}</span>;
        }

    },
    {
        header: "Actions",
        cell: ({ row }) => {
            const id = row.original._id

            return <div className="flex gap-1" >
                <Link to={`/room/update/${id}`}>
                    <Edit className="w-5 cursor-pointer hover:text-active" />
                </Link>
                < Link to={`/room/${id}`
                }>
                    <Eye className="w-5 cursor-pointer hover:text-active" />
                </Link>

            </div>
        }
    }


]