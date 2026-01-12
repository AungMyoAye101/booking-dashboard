import { priceFormater } from "@/lib/helper";
import type { BookingType } from "@/types/booking-type"
import type { ColumnDef } from "@tanstack/react-table"
import UpdateBooking from "./update-booking";
import { createNoColumn } from "@/components/no-column";





export const bookingColumn: ColumnDef<BookingType>[] = [
    createNoColumn(),
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
                STAYED: "bg-primary ",
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
            return <UpdateBooking id={bookingId} selected={row.original.status!} />


        }
    }
]