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
import type { PaymentType } from "@/types/payment-type";

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
        label: "Confirmed",
        value: "CONFIRMED",
    },
    {
        label: "Cancelled",
        value: "CANCELLED",
    },
    {
        label: "Expired",
        value: "EXPIRED"
    },

]

const Payment = () => {
    const [query, setQuery] = useState({
        page: 1,
        sort: undefined,
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

        const sort = form.get("sort") as sortDirection;
        const status = form.get("status") as Partial<PaymentType>;
        if (sort) {
            setQuery({ ...query, sort })
        }
        if (status) {
            setQuery({ ...query, status })
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