import { DataTable } from "@/components/data-table"
import { Spinner } from "@/components/ui/spinner"
import { bookingColumn } from "./components/column"
import { useGetAllBooking } from "@/hooks/use-booking"
import TablePagination from "@/components/table-pagination"


const Booking = () => {
    const { data, isLoading } = useGetAllBooking({ page: 1 })
    const onPageChange = () => { }
    console.log(data)
    return (
        <div>
            {
                isLoading ? <Spinner /> : <>
                    <DataTable
                        columns={bookingColumn}
                        data={data?.bookings!}
                    />
                    <TablePagination
                        meta={data?.meta!}
                        onPageChange={() => onPageChange}
                    />
                </>
            }
        </div>
    )
}

export default Booking