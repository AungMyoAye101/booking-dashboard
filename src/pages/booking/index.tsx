import { DataTable } from "@/components/data-table"
import { Spinner } from "@/components/ui/spinner"
import { bookingColumn } from "./components/column"
import { useGetAllBooking } from "@/hooks/use-booking"
import TablePagination from "@/components/table-pagination"
import { ListToolBar, useListMeta } from "@/components/list-control"


const Booking = () => {
    const { data, isLoading } = useGetAllBooking({ page: 1 })
    const onPageChange = () => { }
    const { search, sort, pageIndex, setPageIndex, applyFilters } = useListMeta()
    return (
        <div>
            <ListToolBar
                defaultSearch={search}
                defaultSort={sort}
                onSubmit={applyFilters}

            />
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