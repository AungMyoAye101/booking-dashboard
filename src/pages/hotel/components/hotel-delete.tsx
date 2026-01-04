import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"
import { useDeleteHotel } from "@/hooks/use-hotel"
import { LucideTrash } from "lucide-react"

type hotelDeleteProps = {
    isLoading: boolean,
    onDelete: () => void
}

const HotelDelete = ({ isLoading, onDelete }: hotelDeleteProps) => {


    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant={'outline'} className="text-destructive">

                    <LucideTrash /> Delete hotel
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogHeader>
                        <AlertDialogTitle>
                            Are you absolutely sure?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete your hotel
                            and remove hotel data from our servers.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>
                            Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction
                            disabled={isLoading}
                            onClick={onDelete}
                            className="bg-destructive">
                            {

                                isLoading ? <Spinner /> : 'delete'
                            }
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogHeader>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default HotelDelete