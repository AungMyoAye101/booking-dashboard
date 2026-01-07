import { useState } from "react"
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Button } from "./ui/button";

type sortDirection = 'asc' | 'desc';
type filterOptions = {
    search: string,
    sort: sortDirection
}
export const useListMeta = () => {
    const [search, setSearch] = useState<string>('');
    const [sort, setSort] = useState<sortDirection>('desc');
    const [pageIndex, setPageIndex] = useState<number>(0);
    const [pageSize] = useState(10);

    const applyFilters = (value: filterOptions) => {
        setSearch(value.search);
        setSort(value.sort);
        setPageIndex(0)
    }

    return {
        search,
        sort,
        pageIndex,
        pageSize,
        setPageIndex,
        applyFilters

    }
}

type toolBarPops = {
    defaultSearch: string,
    defaultSort: sortDirection,
    onSubmit: (value: filterOptions) => void
}

export const ListToolBar = ({
    defaultSearch,
    defaultSort,
    onSubmit
}: toolBarPops) => {
    const [search, setSearch] = useState(defaultSearch)
    const [sort, setSort] = useState(defaultSort)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ search, sort })
    }

    return (
        <form onSubmit={handleSubmit} className="flex gap-4 items-end">
            <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
                className="w-64"
            />

            <Select value={sort} onValueChange={(v) => setSort(v as sortDirection)}>
                <SelectTrigger className="w-36">
                    <SelectValue placeholder="Sort" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="asc">Ascending</SelectItem>
                    <SelectItem value="desc">Descending</SelectItem>
                </SelectContent>
            </Select>

            <Button type="submit">Apply</Button>
        </form>
    )
}

