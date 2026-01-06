import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { flexRender, getCoreRowModel, getPaginationRowModel, useReactTable, type ColumnDef } from "@tanstack/react-table";


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
        state: {

        },
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel()
    })

    return (


        <div className="overflow-hidden border-2   rounded-md shadow-lg min-h-90">
            <Table>
                <TableHeader className="bg-secondary">
                    {
                        table.getHeaderGroups().map(headerGp => (
                            <TableRow key={headerGp.id}>
                                {
                                    headerGp.headers.map((head) => (
                                        <TableHead key={head.id} className="text-secondary-foreground ">
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

                <TableBody className="rounded-md px-2 scroll-none">
                    {
                        table.getRowModel().rows?.length ? (

                            table.getRowModel().rows.map((row, i) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                    className={`${i % 2 === 0 ? "bg-background text-foreground" : "bg-muted text-muted-foreground"}  border-b-2 `}
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