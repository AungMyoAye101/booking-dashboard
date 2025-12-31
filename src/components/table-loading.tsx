import { Skeleton } from "./ui/skeleton"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"


const TableLoading = () => {
    return (
        <div className="border-2 rounded-md overflow-hidden">

            <Table >
                <TableHeader>
                    <TableRow className="border">
                        {
                            Array(5).fill(null).map((_, i) => (
                                <TableHead key={i} className="border">
                                    <Skeleton className="h-6 w-30" />
                                </TableHead>
                            ))
                        }
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        Array(10).fill(null).map((_, idx) => (


                            <TableRow key={idx}>

                                {
                                    Array(5).fill(null).map((_, i) => (
                                        <TableCell key={(i)} className="border">
                                            <Skeleton className="h-6 w-30" />
                                        </TableCell>
                                    ))
                                }

                            </TableRow>
                        ))

                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default TableLoading