import { useGetAllUsers } from "@/hooks/use-user";
import { column } from "./components/column"
import { DataTable } from "../../components/data-table"
import { useState, type FormEvent } from "react";
import TablePagination from "@/components/table-pagination";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import TableLoading from "@/components/table-loading";
import { useDebounce } from "@/hooks/use-debounce";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ArrowDownUp } from "lucide-react";



const User = () => {
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState('')
    const [sort, setSort] = useState<'asc' | 'desc'>('desc')

    const { data, isLoading } = useGetAllUsers({
        search,
        page,
        limit: 10,
        sort,
    });

    const onPageChange = (page: number) => {
        if (page < 1) {
            return;
        }
        setPage(page)
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const value = form.get("search");
        if (typeof value === "string" && value.trim()) {
            setSearch(value)
            setPage(1)
        }
    }
    return (
        <div className=" mx-auto  space-y-6">

            <form onSubmit={handleSubmit} className="flex gap-4">
                <Input
                    type="text"
                    placeholder="Search user by name."
                    className="bg-accent  focus:ring-violet-2"
                    name="search"
                />
                <Button
                    type="submit"
                    className="bg-primary-violet text-white hover:bg-violet"
                >
                    Search
                </Button>


                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant={'outline'} className="border-primary-violet">Sortby <ArrowDownUp /></Button>

                    </DropdownMenuTrigger>
                    <DropdownMenuContent >
                        <DropdownMenuRadioGroup value={sort} onValueChange={(value: string) => setSort(value as 'asc' | 'desc')}>
                            <DropdownMenuRadioItem value="asc">
                                Ascending
                            </DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="desc">
                                Descending
                            </DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>

                    </DropdownMenuContent>
                </DropdownMenu>
            </form>
            {
                isLoading ?
                    <TableLoading /> :
                    <>
                        <DataTable
                            columns={column}
                            data={data?.users ?? []}
                        />
                        <TablePagination
                            meta={data?.meta!}
                            onPageChange={onPageChange}
                        />
                    </>

            }

        </div>
    )
}

export default User