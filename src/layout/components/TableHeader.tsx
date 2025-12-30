import { TableHeader, TableHead, TableRow } from "@/components/ui/table"

const TableHeaders = ({ tableHeads }: { tableHeads: string[] }) => {
    return (
        <TableHeader>
            <TableRow>
                {
                    tableHeads.map((th, i) => (
                        <TableHead key={i}>{th}</TableHead>
                    ))
                }


            </TableRow>
        </TableHeader>
    )
}

export default TableHeaders