import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { flexRender, getCoreRowModel, useReactTable, type ColumnDef } from "@tanstack/react-table";


interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[],
    data: TData[],
}

export function DataTable<TData, TValue>(
    {
        columns,
        data,
    }: DataTableProps<TData, TValue>) {

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        manualPagination: true,
    })

    return (


        <div className="overflow-hidden border-2 bg-white dark:bg-black rounded-md shadow-lg ">
            <Table>
                <TableHeader className="bg-primary-violet ">
                    {
                        table.getHeaderGroups().map(headerGp => (
                            <TableRow key={headerGp.id}>
                                {
                                    headerGp.headers.map((head) => (
                                        <TableHead key={head.id} className="text-white/90 ">
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

                <TableBody className="rounded-md px-2">
                    {
                        table.getRowModel().rows?.length ? (

                            table.getRowModel().rows.map((row, i) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                    className={`${i % 2 !== 0 && "bg-violet-2"}`}
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


    )
}