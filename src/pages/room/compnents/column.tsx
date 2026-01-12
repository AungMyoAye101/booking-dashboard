import type { RoomType } from "@/types/room-type"
import type { ColumnDef } from "@tanstack/react-table"
import UpdateRoom from "./update-room"
import RoomDetails from "./room-details"
import DeleteRoom from "./delete-room"
import { createNoColumn } from "@/components/no-column"



export const RoomColumn: ColumnDef<RoomType>[] = [
    createNoColumn(),
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
                <UpdateRoom room={row.original} />
                <RoomDetails room={row.original} />
                <DeleteRoom roomId={id} />
            </div>
        }
    }


]