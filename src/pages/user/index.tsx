import { useGetAllUsers } from "@/hooks/use-user";
import { column } from "./components/column"
import { DataTable } from "./components/data-table"
import { useState } from "react";



const User = () => {
    const [page, setPage] = useState(1)
    const { data, isLoading } = useGetAllUsers({ page });

    const onPageChange = (page: number) => {
        setPage(page)
    }

    if (isLoading) {
        return <p className="">Loading....</p>
    }
    return (
        <div className=" mx-auto ">
            <DataTable
                columns={column}
                data={data?.users ?? []}
                meta={data?.meta!}
                onPageChange={onPageChange}
            />
        </div>
    )
}

export default User