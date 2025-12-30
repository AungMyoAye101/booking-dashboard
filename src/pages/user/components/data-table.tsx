import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { flexRender, getCoreRowModel, useReactTable, type ColumnDef } from "@tanstack/react-table";

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[],
    data: TData[]
}

export function DataTable<TData, TValue>({ columns, data }: DataTableProps<TData, TValue>) {

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel()
    })


    return (
        <div className="overflow-hidden border rounded-md">
            <Table>
                <TableHeader>
                    {
                        table.getHeaderGroups().map(headerGp => (
                            <TableRow key={headerGp.id}>
                                {
                                    headerGp.headers.map((head) => (
                                        <TableHead key={head.id}>
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

                            table.getRowModel().rows.map(row => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {
                                        row.getVisibleCells().map(cell => (
                                            <TableCell key={cell.id}>
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