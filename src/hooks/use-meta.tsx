import { useState } from "react"


export const useMeta = () => {
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState('')
    const [sort, setSort] = useState<'asc' | 'desc'>('asc')

    const onPageChange = (page: number) => {
        setPage(page)
    }
    const onSerach = (text: string) => {
        if (text && text.trim()) {
            setSearch(text);
            setPage(1)
        }
    }

    const sortHandler = (direction: "asc" | "desc") => {
        setSort(direction)
    }
    return { page, limit: 10, search, sort, onPageChange, onSerach, sortHandler }
}

// export const SerchAndPagination = () => {
//     return (<form onSubmit={handleSubmit} className="flex gap-4">
//         <Input
//             type="text"
//             placeholder="Search user by name."
//             className="bg-accent  focus:ring-ring border-border"
//             name="search"
//         />
//         <Select name="type">
//             <SelectTrigger className="w-45 bg-secondary text-secondary-foreground border border-border">
//                 <SelectValue placeholder="Select type" />
//             </SelectTrigger>
//             <SelectContent>
//                 <SelectItem value="all">All</SelectItem>
//                 <SelectItem value="hotel">Hotel</SelectItem>
//                 <SelectItem value="motel">Motel</SelectItem>
//                 <SelectItem value="guest-house">Guest house</SelectItem>
//             </SelectContent>
//         </Select>
//         <Button
//             type="submit"
//             className="bg-primary-violet text-white hover:bg-violet"
//         >
//             Search
//         </Button>
//     </form>)
// }

