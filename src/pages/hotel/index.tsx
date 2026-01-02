import { DataTable } from "@/components/data-table";
import TableLoading from "@/components/table-loading"
import { useGetALlHotel } from "@/hooks/use-hotel";
import type { ParamsType } from "@/types"
import { useState } from "react"
import { hotelColumn } from "./components/column";


const Hotel = () => {

    const [query, setQuery] = useState<ParamsType>({
        search: '',
        page: 1,
        sort: 'desc'

    });

    const { data, isLoading, isError } = useGetALlHotel(query)
    if (isLoading) {
        return <TableLoading />
    }
    console.log(data)
    const handelQueryChange = (data: ParamsType) => {

    }
    return (
        <div>

            <DataTable columns={hotelColumn} data={data?.hotels!} />
        </div>
    )
}

export default Hotel