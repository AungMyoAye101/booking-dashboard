import type { BookingType } from "@/types/booking-type"
import type { ColumnDef } from "@tanstack/react-table"
import { Edit, View } from "lucide-react"
import { Link } from "react-router-dom";





export const bookingColumn: ColumnDef<BookingType>[] = [
    {
        id: 'no',
        header: "No.",
        cell: ({ row, table }) => {

            const { pageIndex, pageSize } = table.getState().pagination;
            return pageIndex * pageSize + row.index + 1
        }
    },
    {
        accessorKey: 'roomId',
        header: "Room",
        cell: ({ row }) => {
            const room = row.original.roomId;
            const name = typeof room === "string" ? room : room?.name ?? "";
            return <span>{name}</span>;
        }
    },
    {
        accessorKey: 'quantity',
        header: "Quatity"
    },
    {
        accessorKey: 'totalPrice',
        header: "Price"
    },
    {
        accessorKey: 'status',
        header: "Status"
    },
    {
        accessorKey: 'checkIn',
        header: "CheckIn",
        cell: ({ row }) => {
            const date = new Date(row.original.checkIn).toLocaleDateString();
            return <span>{date}</span>
        }
    },
    {
        accessorKey: 'checkOut',
        header: "CheckOut",
        cell: ({ row }) => {
            const date = new Date(row.original.checkOut).toLocaleDateString();
            return <span>{date}</span>
        }
    },
    {
        header: "Actions",
        cell: ({ row }) => {
            const bookingId = row.original._id;
            return <div className="flex items-center gap-1">
                <Link to={`/booking/update/${bookingId}`}>
                    <Edit />
                </Link>
                <Link to={`/booking/update/${bookingId}`}>

                    <View />
                </Link>

            </div>
        }
    }
]