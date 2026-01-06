import { FormInput, FormRadiosGroup } from "@/components/custom-form"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { Spinner } from "@/components/ui/spinner"
import { useCreateRoom, useUpdateRoom } from "@/hooks/use-room"
import { createRoomSchema, type createRoomType } from "@/validations/room-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"
import { BED_TYPES } from "./create-room"




const UpdateRoom = () => {
    const { hotelId } = useParams()
    const form = useForm<createRoomType>({
        resolver: zodResolver(createRoomSchema)
    })
    const navigate = useNavigate()
    const { mutate, isPending } = useUpdateRoom()
    const onSubmit = (room: createRoomType) => {
        mutate({ hotelId: hotelId!, room }, {
            onSuccess: () => {
                form.reset()
                navigate('/hotel/' + hotelId)
            }
        })


    }

    return (
        <div className="px-4 py-6 rounded-lg bg-card border-2 border-border space-y-4">

            <h1 className="text-lg font-semibold" >Create rooms </h1>
            <Form {...form}>


                <form onSubmit={form.handleSubmit(onSubmit)}
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
                        <div className="flex justify-end">


                            <Button
                                type="submit"
                                disabled={isPending}
                                className=" "
                            >
                                {
                                    isPending ? <><Spinner />Createing</> : "Create"
                                }
                            </Button>
                        </div>
                    </div>



                </form>

            </Form>

        </div>
    )
}



export default UpdateRoom