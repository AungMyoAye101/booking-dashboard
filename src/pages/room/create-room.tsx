import { FormInput } from "@/components/custom-form"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { Spinner } from "@/components/ui/spinner"
import { useCreateRoom } from "@/hooks/use-room"
import { createRoomSchema, type createRoomType } from "@/validations/room-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"

const createRoom = () => {
    const { hotelId } = useParams()
    const form = useForm<createRoomType>({
        resolver: zodResolver(createRoomSchema)
    })
    const navigate = useNavigate()
    const { mutate, isPending } = useCreateRoom()
    const onSubmit = (room: createRoomType) => {
        mutate({ hotelId: hotelId!, room }, {
            onSuccess: () => {
                form.reset()
                navigate('/hotel/' + hotelId)
            }
        })


    }
    return (
        <div>
            <Form {...form}>


                <form onSubmit={form.handleSubmit(onSubmit)}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4"
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
                    <Button
                        type="submit"
                        disabled={isPending}
                    >
                        {
                            isPending ? <><Spinner />Createing</> : "Create"
                        }
                    </Button>
                </form>

            </Form>

        </div>
    )
}

export default createRoom