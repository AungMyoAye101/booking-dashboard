import type { RoomType } from "@/types/room-type"
import type { ColumnDef } from "@tanstack/react-table"
import { Edit, Eye } from "lucide-react"
import { Link } from "react-router-dom"
import UpdateRoom from "./update-room"
import RoomDetails from "./room-details"
import DeleteRoom from "./delete-room"



export const RoomColumn: ColumnDef<RoomType>[] = [
    {
        id: 'no',
        header: "No.",
        cell: ({ row, table }) => {

            const { pageIndex, pageSize } = table.getState().pagination;
            return pageIndex * pageSize + row.index + 1
        }
    },
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
                <UpdateRoom hotelId={id} />
                <RoomDetails hotelId={id} />
                <DeleteRoom hotelId={id} />
            </div>
        }
    }


]