import { column } from "./components/column"
import { DataTable } from "./components/data-table"


const users = [
    {
        name: "Aung A",
        email: "aung@gmail.com",
        phone: "09123456",
        city: "Mandalay",
        country: "Myanmar",
        joinedAt: new Date(Date.now()),
    },
    {
        name: "Aung A",
        email: "aung@gmail.com",
        phone: "09123456",
        city: "Mandalay",
        country: "Myanmar",
        joinedAt: new Date(Date.now()),
    },
    {
        name: "Aung A",
        email: "aung@gmail.com",
        phone: "09123456",
        city: "Mandalay",
        country: "Myanmar",
        joinedAt: new Date(Date.now()),
    },
    {
        name: "Aung A",
        email: "aung@gmail.com",
        phone: "09123456",
        city: "Mandalay",
        country: "Myanmar",
        joinedAt: new Date(Date.now()),
    },
    {
        name: "Aung A",
        email: "aung@gmail.com",
        phone: "09123456",
        city: "Mandalay",
        country: "Myanmar",
        joinedAt: new Date(Date.now()),
    },

]

const User = () => {
    const data = users;
    return (
        <div className=" mx-auto py-10 ">
            <DataTable
                columns={column}
                data={data}
            />
        </div>
    )
}

export default User