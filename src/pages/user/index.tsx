import { useGetAllUsers } from "@/hooks/use-user";
import { column } from "./components/column"
import { DataTable } from "../../components/data-table"
import { useState } from "react";
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



const User = () => {
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState('')
    const [sort, setSort] = useState<'asc' | 'desc'>('desc')
    const debounce = useDebounce(search);
    const { data, isLoading } = useGetAllUsers({
        search: debounce,
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
    return (
        <div className=" mx-auto  space-y-6">
            <div className="flex gap-4 ">
                <Input
                    type="text"
                    placeholder="Search user by name."
                    className="bg-accent  focus:ring-violet-2"
                    value={search}
                    onChange={(e) => {
                        setPage(1);
                        setSearch(e.target.value)
                    }}
                />
                <Button
                    className="bg-primary-violet text-white hover:bg-violet"
                >Search</Button>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant={'outline'}>Sortby</Button>

                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="">
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
            </div>
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