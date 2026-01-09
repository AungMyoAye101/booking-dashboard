import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { priceFormater } from "@/lib/helper";
import type { PaymentType } from "@/types/payment-type";
import type { ColumnDef } from "@tanstack/react-table";
import userImage from '@/assets/man.png';
import PaymentDetail from "./payment-detail";

export const paymentColumn: ColumnDef<PaymentType>[] = [
    {
        id: 'no',
        header: "No.",
        cell: ({ row, table }) => {

            const { pageIndex, pageSize } = table.getState().pagination;
            return pageIndex * pageSize + row.index + 1
        }
    },
    {
        header: "User",
        accessorKey: 'userId',
        cell: ({ row }) => {
            const user = row.original.userId;
            const name = typeof user === 'string' ? user : user?.name ?? "";

            return <div className="flex gap-1 items-center">
                <Avatar>
                    <AvatarImage src={userImage} alt="user icon" className=" bg-primary p-0.5" sizes="sm" />
                </Avatar>
                {name}
            </div>

        }
    },
    {
        accessorKey: "amount",
        cell: ({ row }) => priceFormater(row.original.amount)

    },
    {
        accessorKey: 'paymentMethod',
        header: "Payment Method"

    },

    {
        accessorKey: 'status',
        header: "Status",
        cell: ({ row }) => {
            const status = row.original.status;
            const statusClass: Record<string, string> = {
                PENDING: "bg-blue-500  dark:bg-blue-700",
                PAID: "bg-green-500  dark:bg-green-700",
                FAILED: "bg-destructive",

            };
            const color = statusClass[status] ?? "text-mute";
            return <span className={`${color} text-xs px-2 py-1 rounded-md text-white `}>{status}</span>
        }

    },
    {
        accessorKey: 'paidAt',
        cell: ({ row }) => new Date(row.original.paidAt).toDateString()

    },
    {
        header: "Actions",
        cell: ({ row }) => {
            const paymentId = row.original._id;
            return <PaymentDetail id={paymentId} />

        }
    }

] 