import type { ColumnDef } from "@tanstack/react-table";

export function createNoColumn<T>(): ColumnDef<T> {
    return {
        id: "no",
        header: "No.",
        cell: ({ row, table }) => {
            const { pageIndex, pageSize } = table.getState().pagination;
            return pageIndex * pageSize + row.index + 1;
        },
        enableSorting: false,
        enableColumnFilter: false,
    };
}
