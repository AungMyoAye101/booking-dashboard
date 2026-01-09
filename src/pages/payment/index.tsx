import { DataTable } from "@/components/data-table";
import TableLoading from "@/components/table-loading";
import { useGetAllPayments } from "@/hooks/use-payment"
import { paymentColumn } from "./components/column";
import TablePagination from "@/components/table-pagination";
import { useState, type FormEvent } from "react";
import SelectBoxForm from "@/components/select-box-form";
import { sortingValues } from "../booking";
import { Button } from "@/components/ui/button";
import type { sortDirection } from "@/components/list-control";
import type { paymentStatus } from "@/types/payment-type";
import type { paymentQueryType } from "@/services/payment-service";

const statusBox = [
    {
        label: "All",
        value: "all"
    },
    {
        label: "Pending",
        value: "PENDING"
    },
    {
        label: "Paid",
        value: "PAID",
    },
    {
        label: "Failed",
        value: "FAILED",
    },


]

const Payment = () => {
    const [query, setQuery] = useState<paymentQueryType>({
        page: 1,
        sort: 'asc',
        status: undefined,
        limit: 10
    })
    const { data, isLoading } = useGetAllPayments(query);
    const onPageChange = (page: number) => {
        if (page < 1) return;
        setQuery({ ...query, page })
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const sorting = form.get("sort") as sortDirection;
        const status = form.get("status") as paymentStatus;
        if (sorting) {
            setQuery(pre => ({ ...pre, sort: sorting, page: 1 }))

        }
        if (status) {
            setQuery(pre => ({ ...pre, status, page: 1 }))
        }

    }


    return (
        <div className="space-y-4">
            <form onSubmit={onSubmit} className="flex items-center gap-4 flex-wrap">
                <SelectBoxForm
                    name="status"
                    placeholder="status type"
                    items={statusBox}

                />
                <SelectBoxForm
                    name="sort"
                    placeholder="Sort direction"
                    items={sortingValues}

                />
                <Button>Apply</Button>

            </form>
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