
import { ArrowUpRightIcon, FolderArchiveIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Empty,
    EmptyContent,
    EmptyDescription,
    EmptyHeader,
    EmptyMedia,
    EmptyTitle,
} from "@/components/ui/empty"
import { Link } from "react-router-dom"




const NotFound = () => {
    return (
        <div className="h-screen flex justify-center items-center">

            <Empty>
                <EmptyHeader>
                    <EmptyMedia variant="icon">
                        <FolderArchiveIcon />
                    </EmptyMedia>
                    <EmptyTitle>404 Not found.</EmptyTitle>
                    <EmptyDescription>
                        You haven&apos;t created any projects yet. Get started by creating
                        your first project.
                    </EmptyDescription>
                </EmptyHeader>
                <EmptyContent>
                    <div className="flex gap-2">
                        <Button><Link to={'/'}>Back to home page</Link></Button>
                        <Button variant="outline">Import Project</Button>
                    </div>
                </EmptyContent>
                <Button
                    variant="link"
                    asChild
                    className="text-muted-foreground"
                    size="sm"
                >
                    <a href="#">
                        Learn More <ArrowUpRightIcon />
                    </a>
                </Button>
            </Empty>
        </div>
    )
}

export default NotFound