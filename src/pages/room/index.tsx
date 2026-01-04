import { DataTable } from "@/components/data-table"
import { RoomColumn } from "./compnents/column"
import { useGetALlRoom } from "@/hooks/use-room"
import { useState } from "react"
import TablePagination from "@/components/table-pagination"

const Room = () => {
    const [page, setPage] = useState(1)
    const onPageChange = (page: number) => {
        setPage(page)
    }

    const { data, isLoading } = useGetALlRoom({ page })
    if (isLoading) {
        return <p>Loading...</p>
    }
    console.log(data)
    return (
        <div className="space-y-6">

            <DataTable columns={RoomColumn} data={data?.rooms!} />
            <TablePagination
                meta={data?.meta!}
                onPageChange={onPageChange}
            />
        </div>
    )
}

export default Room