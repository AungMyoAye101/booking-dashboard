import { priceFormater } from "@/lib/helper";
import type { BookingType } from "@/types/booking-type"
import type { ColumnDef } from "@tanstack/react-table"
import { Edit, Eye } from "lucide-react"
import { Link } from "react-router-dom";
import UpdateBooking from "./update-booking";





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
        header: "Price",
        cell: ({ row }) => priceFormater(row.original.totalPrice)
    },
    {
        accessorKey: 'status',
        header: "Status",
        cell: ({ row }) => {
            const status = row.original.status;
            const statusClass: Record<string, string> = {
                PENDING: "bg-blue-500  dark:bg-blue-700",
                CONFIRMED: "bg-green-500  dark:bg-green-700",
                SATYED: "bg-primary ",
                CANCELLED: "bg-destructive",
                COMPLETED: "bg-mute",
            };
            const color = statusClass[status] ?? "text-mute";
            return <span className={`${color} text-xs px-2 py-1 rounded-md text-white `}>{status}</span>
        }

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
            return <div className="flex items-center gap-1 text-sm text-accent-foreground/70">
                <Link to={`/booking/${bookingId}`}>

                    <Eye />
                </Link>
                <UpdateBooking id={bookingId} selected={row.original.status!} />

            </div>
        }
    }
]