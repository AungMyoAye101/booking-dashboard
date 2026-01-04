import { useGetHotelById } from "@/hooks/use-hotel"
import { useParams } from "react-router-dom"
import hotelImage from "@/assets/booking-logo.svg"
import HotelAction from "./components/hotel-actions";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Image } from "lucide-react";




const HotelDetails = () => {
    const { hotelId } = useParams();
    const { data, isLoading, isError } = useGetHotelById(hotelId!)

    return (
        <section className="space-y-6">
            <HotelAction hotelId={hotelId!} />
            <div className="min-w-80 sm:max-w-lg ">
                <AspectRatio ratio={16 / 9} className=" rounded-lg">
                    {
                        data?.photo?.secure_url ?
                            <img src={data?.photo?.secure_url || hotelImage} alt="Hotel image" className="w-full h-full object-cover rounded-md" />
                            :
                            <div className="w-full h-full rounded-md bg-muted ">
                                <Image />
                                No Image Upload Yet
                            </div>
                    }
                </AspectRatio>


                {/* <ChartPieDonut /> */}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 " >
                <div>
                    <h2 className="font-semibold">Hotel Information</h2>
                    <p>Name : <span className="font-semibold text-base">
                        {data?.name}</span></p>
                    <p>Price : <span className="font-semibold text-base">{data?.price}</span></p>
                    <p>Type : <span className="font-semibold text-base">{data?.type}</span></p>
                </div>
                <div>
                    <h2 className="font-semibold">Hotel Location</h2>
                    <p>Address : <span className="font-semibold text-base">{data?.address}</span></p>
                    <p>City : <span className="font-semibold text-base">{data?.city}</span> </p>
                    <p>Country : <span className="font-semibold text-base">{data?.country}</span></p>
                </div>
                <div className="">
                    <h2 className="font-semibold">Avaiable amenities</h2>
                    <div className="flex gap-1 flex-wrap">


                        {
                            data?.amenities.map((item) => (
                                <span key={item}>{item}</span>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}








export default HotelDetails