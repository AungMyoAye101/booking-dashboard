import { DataTable } from "@/components/data-table";
import TableLoading from "@/components/table-loading";
import { useGetAllPayments } from "@/hooks/use-payment"
import { paymentColumn } from "./components/column";
import TablePagination from "@/components/table-pagination";
import { useState } from "react";



const Payment = () => {
    const [page, setPage] = useState(1)
    const { data, isLoading } = useGetAllPayments({ page });
    const onPageChange = (page: number) => {
        if (page < 1) return;
        setPage(page)
    }
    return (
        <div className="space-y-4">
            {
                isLoading ? <TableLoading column={7} />
                    : <>
                        <DataTable
                            data={data?.payments!}
                            columns={paymentColumn}
                        />
                        <TablePagination
                            meta={data?.meta}
                            onPageChange={onPageChange}
                        />
                    </>
            }
        </div>
    )
}

export default Payment