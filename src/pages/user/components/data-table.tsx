import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { flexRender, getCoreRowModel, useReactTable, type ColumnDef } from "@tanstack/react-table";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,

} from "@/components/ui/pagination"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";



interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[],
    data: TData[],
    meta: {
        page: number,
        limit: number,
        currentPage: number,
        total: number,
        hasNext: boolean,
        hasPrev: boolean
    }
    onPageChange: (page: number) => void
}

export function DataTable<TData, TValue>(
    {
        columns,
        data,
        meta,
        onPageChange,

    }: DataTableProps<TData, TValue>) {

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        manualPagination: true,
    })

    console.log(meta)
    return (
        <div className="space-y-6">
            <div className="flex  items-center gap-2 ">
                <Input type="text" placeholder="Search user name" className="w-72 bg-accent" />
                <Button type="submit" className="bg-primary-violet text-primary-foreground-violet">
                    Search
                </Button>
            </div>
            <div className="overflow-hidden border-2 bg-white dark:bg-black rounded-md shadow-lg ">
                <Table>
                    <TableHeader>
                        {
                            table.getHeaderGroups().map(headerGp => (
                                <TableRow key={headerGp.id}>
                                    {
                                        headerGp.headers.map((head) => (
                                            <TableHead key={head.id} >
                                                {
                                                    flexRender(
                                                        head.column.columnDef.header,
                                                        head.getContext())
                                                }
                                            </TableHead>
                                        ))
                                    }
                                </TableRow>
                            ))
                        }
                    </TableHeader>

                    <TableBody>
                        {
                            table.getRowModel().rows?.length ? (

                                table.getRowModel().rows.map((row, i) => (
                                    <TableRow
                                        key={row.id}
                                        data-state={row.getIsSelected() && "selected"}
                                        className={`${i % 2 === 0 && "bg-accent"}`}
                                    >
                                        {
                                            row.getVisibleCells().map(cell => (
                                                <TableCell key={cell.id} >
                                                    {
                                                        flexRender(
                                                            cell.column.columnDef.cell,
                                                            cell.getContext())
                                                    }
                                                </TableCell>
                                            ))
                                        }
                                    </TableRow>
                                ))
                            )
                                : (
                                    <TableRow>
                                        <TableCell colSpan={columns.length}>
                                            No results.
                                        </TableCell>
                                    </TableRow>
                                )
                        }
                    </TableBody>
                </Table>
            </div>
            <Pagination className=" flex justify-end">
                <PaginationContent >
                    <PaginationItem>

                        <Button
                            variant={"ghost"}
                            disabled={!meta.hasPrev}
                            onClick={() => onPageChange(meta.page - 1)}
                        >Prev</Button>
                    </PaginationItem>
                    {
                        Array(meta.page).fill(null).map((_, num) => (
                            <PaginationItem key={num}>
                                <PaginationLink href="#" isActive={num + 1 === meta.currentPage}>{num + 1}</PaginationLink>
                            </PaginationItem>
                        ))
                    }

                    <PaginationItem>
                        <Button
                            variant={"ghost"}
                            disabled={!meta.hasNext}
                            onClick={() => onPageChange(meta.page + 1)}

                        >Next</Button>
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    )
}