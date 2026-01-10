import { FormInput, FormRadiosGroup } from "@/components/custom-form"
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
import { Form } from "@/components/ui/form"
import { useUpdateRoom } from "@/hooks/use-room"
import { createRoomSchema, type createRoomType } from "@/validations/room-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Edit, Eye } from "lucide-react"
import type { FC } from "react"
import { useForm } from "react-hook-form"
import { BED_TYPES } from "../create-room"
import { Spinner } from "@/components/ui/spinner"



const UpdateRoom: FC<hotelIdProps> = ({ hotelId }) => {
    const form = useForm<createRoomType>({
        resolver: zodResolver(createRoomSchema)
    })

    const { mutate, isPending } = useUpdateRoom()
    const onSubmit = (room: createRoomType) => {
        mutate({ hotelId: hotelId!, room }, {
            onSuccess: () => {
                form.reset()

            }
        })


    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant={'outline'}
                    size={'icon-sm'}
                ><Edit /></Button>
            </DialogTrigger>
            <DialogContent>
                <DialogTitle>
                    Update room
                </DialogTitle>

                <DialogDescription>
                    Make changes to room here. Click update when you're done.
                </DialogDescription>
                <Form{...form}>


                    <form
                        id="room-update-form"
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="grid grid-cols-1 sm:grid-cols-2  gap-4"
                    >
                        <FormInput
                            control={form.control}
                            name="name"
                            lable="Name"
                            placeholder="Enter hotel name"
                        />
                        <FormInput
                            control={form.control}
                            name="price"
                            lable="Price"
                            type="number"
                            placeholder="Enter price per night"
                        />
                        <FormInput
                            control={form.control}
                            name="maxPeople"
                            lable="Max People"
                            type="number"
                            placeholder="Max people"
                        />
                        <FormInput
                            control={form.control}
                            name="totalRooms"
                            lable="Total Room"
                            type="number"
                            placeholder="total rooms"
                        />

                        <div className="sm:col-span-2 space-y-4 ">
                            <FormRadiosGroup
                                control={form.control}
                                name="bedTypes"
                                label="Choose room bed type"
                                options={BED_TYPES}
                            />


                        </div>



                    </form>

                </Form>
                <DialogFooter>
                    <DialogClose>
                        <Button variant={'secondary'}>Cancel</Button>
                    </DialogClose>
                    <Button
                        form="room-update-form"
                        type="submit"
                        disabled={isPending}
                        className=" "
                    >
                        {
                            isPending ? <><Spinner /> Updating...</> : "Update"
                        }
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default UpdateRoom