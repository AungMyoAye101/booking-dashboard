import { DataTable } from "@/components/data-table";
import TableLoading from "@/components/table-loading"
import { useGetALlHotel } from "@/hooks/use-hotel";
import { useState, type FormEvent } from "react"
import { hotelColumn } from "./components/column";
import TablePagination from "@/components/table-pagination";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import type { hotelTypes } from "@/types/hotel-type";

const Hotel = () => {

    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('')
    // const [sort, setSort] = useState<'asc' | 'desc'>("desc")
    const [type, setType] = useState<hotelTypes | undefined>(undefined)

    const { data, isLoading } = useGetALlHotel({ page, search, type })
    if (isLoading) {
        return <TableLoading />
    }
    const onPageChange = (page: number) => {
        if (page < 1) return;
        setPage(page)
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const value = form.get('search');
        const type = form.get('type');
        if (typeof value === 'string' && value.trim()) {
            setSearch(value)

        }
        if (type) {

            type === "all" ?
                setType(undefined) :
                setType(type as hotelTypes)
        }
        setPage(1)
    }

    return (
        <div className="space-y-4 mx-auto">
            <form onSubmit={handleSubmit} className="flex gap-4">
                <Input
                    type="text"
                    placeholder="Search user by name."
                    className="bg-accent  focus:ring-ring border-border"
                    name="search"
                />
                <Select name="type">
                    <SelectTrigger className="w-45 bg-secondary text-secondary-foreground border border-border">
                        <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All</SelectItem>
                        <SelectItem value="hotel">Hotel</SelectItem>
                        <SelectItem value="motel">Motel</SelectItem>
                        <SelectItem value="guest-house">Guest house</SelectItem>
                    </SelectContent>
                </Select>
                <Button
                    type="submit"
                    className="bg-primary-violet text-white hover:bg-violet"
                >
                    Search
                </Button>
            </form>
            <DataTable columns={hotelColumn} data={data?.hotels!} />
            <TablePagination meta={data?.meta!} onPageChange={onPageChange} />
        </div>
    )
}

export default Hotel