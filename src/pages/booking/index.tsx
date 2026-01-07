import { DataTable } from "@/components/data-table"
import { bookingColumn } from "./components/column"
import { useGetAllBooking } from "@/hooks/use-booking"
import TablePagination from "@/components/table-pagination"
import TableLoading from "@/components/table-loading"
import { useState } from "react"
import SelectBoxForm from "@/components/select-box-form"
import { Button } from "@/components/ui/button"
import type { sortDirection } from "@/components/list-control"
import DateRangePicker from "@/components/date-range"
import type { DateRange } from "react-day-picker"



const statusItems = [
    {
        value: "all",
        label: "All",
    },
    {
        value: "PENDING",
        label: "Pending",
    },
    {
        value: "CONFIRMED",
        label: "Confirmed",
    },
    {
        value: "CANCELLED",
        label: "Cancelled",
    },
    {
        value: "EXPIRED",
        label: "Expired",
    },


]

const sortingValues = [
    {

        value: "asc",
        label: "Ascending",
    },
    {
        value: "desc",
        label: "Descending",
    },
]

export type status = "PENDING" | "CONFIRMED" | "CANCELLED" | "EXPIRED";

const Booking = () => {
    const [page, setPage] = useState(1);
    const [sort, setSort] = useState<sortDirection>('asc');
    const [status, setStatus] = useState<status | null>(null)
    const [date, setDate] = useState<DateRange | undefined>({
        from: undefined,
        to: undefined
    })
    const [appliedDate, setAppliedDate] = useState<DateRange>({
        from: undefined,
        to: undefined
    })
    const { data, isLoading } = useGetAllBooking({ page, status, sort, checkIn: appliedDate.from, checkOut: appliedDate.to })
    const onPageChange = (page: number) => {
        setPage(page)
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const currStatus = form.get('status') as status;
        const sorting = form.get('sort') as sortDirection;
        setSort(sorting);
        setStatus(currStatus)
        if (date) {
            setAppliedDate(date)
        }

        setPage(1)
    }
    console.log(date)
    return (
        <div className="space-y-6">
            <form onSubmit={onSubmit} className="flex items-center gap-4">
                <DateRangePicker date={date} setDate={setDate} />
                <SelectBoxForm
                    name="status"
                    placeholder="Select status"
                    items={statusItems}
                />
                <SelectBoxForm
                    name="sort"
                    placeholder="Sort"
                    items={sortingValues}
                />
                <Button >Apply</Button>
            </form>

            {
                isLoading ?
                    <TableLoading column={8} />
                    : <>
                        <DataTable
                            columns={bookingColumn}
                            data={data?.bookings!}
                        />
                        <TablePagination
                            meta={data?.meta!}
                            onPageChange={onPageChange}
                        />
                    </>
            }
        </div>
    )
}

export default Booking