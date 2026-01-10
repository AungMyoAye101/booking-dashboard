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
import { Eye } from "lucide-react"

const RoomDetails = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant={'outline'}
                    size={'icon-sm'}
                ><Eye /></Button>
            </DialogTrigger>
            <DialogContent>
                <DialogTitle>
                    RoomTiatle
                </DialogTitle>

                <DialogFooter>
                    <DialogClose>
                        <Button variant={'secondary'}>Cancel</Button>
                    </DialogClose>
                    <Button
                    // disabled={isPending}
                    // onClick={onSubmit}
                    // form="booking-update">
                    // {
                    //     isPending && <Spinner />
                    // }
                    >
                        Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default RoomDetails