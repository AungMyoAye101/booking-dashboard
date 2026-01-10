import { FormInput, FormRadiosGroup } from "@/components/custom-form"
import { Button } from "@/components/ui/button"
import {
    Dialog,
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
import { Edit } from "lucide-react"
import { useForm } from "react-hook-form"
import { BED_TYPES } from "../create-room"
import { Spinner } from "@/components/ui/spinner"
import type { RoomType } from "@/types/room-type"



const UpdateRoom = ({ room }: { room: RoomType }) => {
    const form = useForm<createRoomType>({
        resolver: zodResolver(createRoomSchema),
        defaultValues: {
            name: room.name,
            maxPeople: room.maxPeople,
            price: room.price,
            totalRooms: room.totalRooms,
            bedTypes: room.bedTypes
        }
    })

    const { mutate, isPending } = useUpdateRoom()
    const onSubmit = (data: createRoomType) => {
        mutate({ roomId: room._id, room: data })
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
                <DialogHeader>
                    <DialogTitle>
                        Update room
                    </DialogTitle>

                    <DialogDescription>
                        Make changes to room here. Click update when you're done.
                    </DialogDescription>
                    <Form{...form} >


                        <form
                            id="room-update-form"
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="grid grid-cols-1 sm:grid-cols-2  gap-4 mt-4"
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
                </DialogHeader>
                <DialogFooter>

                    <Button
                        form="room-update-form"
                        type="submit"
                        disabled={isPending}
                        className=" bg-primary text-primary-foreground"
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