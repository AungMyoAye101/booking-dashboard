import { useGetAllUsers } from "@/hooks/use-user";
import { column } from "./components/column"
import { DataTable } from "./components/data-table"



const User = () => {
    const { data, isLoading } = useGetAllUsers();
    if (isLoading) {
        return <p className="">Loading....</p>
    }
    return (
        <div className=" mx-auto ">
            <DataTable
                columns={column}
                data={data?.users ?? []}
            />
        </div>
    )
}

export default User