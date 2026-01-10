import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Spinner } from "@/components/ui/spinner"
import { useDeleteRoom } from "@/hooks/use-room"
import { Eye, Trash2 } from "lucide-react"
import type { FC } from "react"
export type RoomIdProps = {
    roomId: string
}
const DeleteRoom: FC<RoomIdProps> = ({ roomId }) => {

    const { mutate, isPending } = useDeleteRoom()

    const handleDelete = () => {
        mutate(roomId)
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant={'outline'}
                    size={'icon-sm'}
                    className="text-destructive"
                ><Trash2 />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>


                    <DialogTitle>
                        Are you sure to delete this Room?
                    </DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently delete room and remove room data from our servers.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant={'secondary'}>Cancel</Button>
                    </DialogClose>
                    <Button
                        disabled={isPending}
                        onClick={handleDelete}
                        variant={'destructive'}
                    >
                        {
                            isPending && <Spinner />
                        }
                        Delete
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog >
    )
}

export default DeleteRoom