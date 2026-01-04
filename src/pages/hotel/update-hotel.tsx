
import { FormCheckBox, FormInput, FormTextArea, FromSelectBox, } from "@/components/custom-form"
import { Form } from "@/components/ui/form"
import { useGetHotelById, useUpdateHotel } from "@/hooks/use-hotel"
import { hotelCreateSchema, type hotelCreateType, } from "@/validations/hotel-schmea"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { AMENITIES } from "./components/form-field"
import { Spinner } from "@/components/ui/spinner"
import { useNavigate, useParams } from "react-router-dom"



const UpdateHotel = () => {
    const { hotelId } = useParams();

    const { data: hotel, isSuccess } = useGetHotelById(hotelId!);


    const form = useForm<hotelCreateType>({
        resolver: zodResolver(hotelCreateSchema),
    })

    useEffect(() => {
        if (isSuccess && hotel) {
            // Reset the form with fetched data. Provide safe defaults where needed.
            form.reset({
                ...hotel,
                amenities: hotel?.amenities ?? []
            })
        }
    }, [isSuccess, hotel, form])

    const navigate = useNavigate()

    const { mutate, isPending } = useUpdateHotel();

    const onSubmit = (data: hotelCreateType) => {
        mutate({ id: hotel?._id!, hotel: data }, {
            onSuccess: () => {
                navigate(`/hotel/${hotel?._id}`);
                form.reset();
            }
        })
    }

    return (
        <div className="space-y-4 p-4 rounded-md border-2 border-border">
            <h1 className="text-lg font-semibold ">Update hotel form</h1>

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
                    <Button type="submit" className="col-span-2 justify-self-end w-fit" >
                        {
                            isPending ? <><Spinner />Updating...</> : "Update"
                        }

                    </Button>
                </form>
            </Form>
        </div>
    )
}





export default UpdateHotel