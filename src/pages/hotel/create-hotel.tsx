import { FormCheckBox, FormInput, FormTextArea, FromSelectBox, } from "@/components/custom-form"
import { Form } from "@/components/ui/form"
import { useCreateHotel } from "@/hooks/use-hotel"
import { hotelCreateSchema, type hotelCreateType } from "@/validations/hotel-schmea"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { AMENITIES } from "./components/form-field"
import { Spinner } from "@/components/ui/spinner"


const CreateHotel = () => {

    const form = useForm<hotelCreateType>({
        resolver: zodResolver(hotelCreateSchema),
        defaultValues: {
            amenities: []
        }
    })

    const navigate = useNavigate()
    const mutation = useCreateHotel();
    const onSubmit = (data: hotelCreateType) => {
        mutation.mutate(data, {
            onSuccess: () => {
                form.reset();
                navigate('/');
            }
        })
    }

    return (
        <div className="space-y-4 border border-rorder rounded-md p-4 bg-card-bg">
            <h1 className="text-lg font-semibold">Create new hotel</h1>

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
                        name="address"
                        lable="Address"
                        placeholder="Enter hotel address"
                    />

                    <FormInput
                        control={form.control}
                        name="city"
                        lable="City"
                        placeholder="Enter hotel city"
                    />
                    <FormInput
                        control={form.control}
                        name="country"
                        lable="Country"
                        placeholder="Enter hotel country"
                    />

                    <FormInput
                        control={form.control}
                        name="price"
                        lable="Price per night"
                        type="number"
                        placeholder="price"
                    />
                    <FormInput
                        control={form.control}
                        name="star"
                        lable="Star"
                        type="number"
                        placeholder="star 1-5 "
                    />
                    <FormInput
                        control={form.control}
                        name="rating"
                        lable="Rating"
                        type="number"
                        placeholder="1-10"
                    />

                    <FromSelectBox
                        control={form.control}
                        name="type"
                        label="Type"
                        options={[
                            { value: "hotel", label: "Hotel" },
                            { value: "motel", label: "Motel" },
                            { value: "guest-house", label: "Guest house" },
                        ]}
                    />

                    <div className="col-span-2 space-y-4">
                        <FormCheckBox
                            control={form.control}
                            name="amenities"
                            label="Amenities"
                            options={AMENITIES}
                        />


                        <FormTextArea
                            control={form.control}
                            name="description"
                            lable="Description"
                            placeholder="Enter hotel description"

                        />

                    </div>
                    <Button type="submit" className=" col-span-2 w-fit justify-self-end text-primary-foreground" >
                        {
                            mutation.isPaused ? <><Spinner />Creating</> : "Create"
                        }

                    </Button>


                </form>
            </Form>
        </div>
    )
}



export default CreateHotel