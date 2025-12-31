import type { meta } from "@/types"
import type { FC } from "react"
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

type PaginationType = {
    meta: meta,
    onPageChange: (page: number) => void
}

const TablePagination: FC<PaginationType> = ({ meta, onPageChange }) => {

    const totalPages = [...Array(meta.totalPages).keys()].map(n => n + 1);


    return (
        <Pagination className="flex justify-end">
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        aria-disabled={!meta.hasPrev}
                        onClick={() => onPageChange(meta.page - 1)}
                        isActive={meta.hasPrev}
                        className={`${meta.hasPrev && "bg-primary-violet text-slate-100"}`}
                    />

                </PaginationItem>
                {
                    totalPages.map(p => (
                        <PaginationItem key={p}>
                            <PaginationLink
                                onClick={() => onPageChange(p)}
                                isActive={p === meta.page}
                                className={`${p === meta.page && "bg-primary-violet text-slate-100"}`}
                            >
                                {p}
                            </PaginationLink>

                        </PaginationItem>
                    ))
                }
                <PaginationItem>
                    <PaginationNext
                        aria-disabled={!meta.hasNext}
                        onClick={() => onPageChange(meta.page + 1)}
                        isActive={meta.hasNext}
                        className={`${meta.hasNext && "bg-primary-violet text-slate-100"}`}
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}

export default TablePagination