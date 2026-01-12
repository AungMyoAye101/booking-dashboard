import { DataTable } from "@/components/data-table"
import { RoomColumn } from "./compnents/column"
import { useGetALlRoom } from "@/hooks/use-room"
import { useState, type FormEvent } from "react"
import TablePagination from "@/components/table-pagination"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ArrowDownUp } from "lucide-react"
import TableLoading from "@/components/table-loading"

const Room = () => {
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState('')
    const [sort, setSort] = useState<'asc' | 'desc'>("desc")


    const { data, isLoading } = useGetALlRoom({ page, search, sort })
    const onPageChange = (page: number) => {
        setPage(page)
    }



    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const value = form.get('search');

        if (typeof value === 'string' && value.trim()) {
            setSearch(value)

        }

        setPage(1)
    }
    return (
        <div className="space-y-6">
            <form onSubmit={handleSubmit} className="flex gap-4 ">
                <Input
                    type="text"
                    placeholder="Search user by name."
                    className="bg-accent  focus:ring-violet-2"
                    name="search"
                />

                <DropdownMenu >
                    <DropdownMenuTrigger asChild>
                        <Button variant='secondary'
                            className="bg-secondary text-secondary-foreground border">
                            Sortby <ArrowDownUp />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent  >
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


                <Button
                    type="submit"
                    className="bg-primary-violet text-white hover:bg-violet"
                >
                    Search
                </Button>
            </form>
            {
                isLoading ?
                    <TableLoading column={6} /> :
                    <>
                        <DataTable columns={RoomColumn} data={data?.rooms!} meta={data?.meta!} />
                        <TablePagination
                            meta={data?.meta!}
                            onPageChange={onPageChange}
                        />
                    </>
            }


        </div >
    )
}

export default Room