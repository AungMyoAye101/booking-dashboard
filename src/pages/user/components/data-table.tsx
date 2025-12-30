import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { flexRender, getCoreRowModel, getPaginationRowModel, useReactTable, type ColumnDef } from "@tanstack/react-table";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[],
    data: TData[]
}

export function DataTable<TData, TValue>({ columns, data }: DataTableProps<TData, TValue>) {

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel()
    })


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
                        <PaginationPrevious href="#" className="bg-accent" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#" isActive>
                            2
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href="#" className="bg-accent" />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    )
}