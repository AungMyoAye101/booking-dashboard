import { useGetHotelById } from "@/hooks/use-hotel"
import { useParams } from "react-router-dom"
import hotelImage from "@/assets/booking-logo.webp"
import HotelAction from "./components/hotel-actions";
import { Image } from "lucide-react";
import HotelInfo from "./components/hotel-info";
import HotelDetailsSkeleton from "./components/hotel-seketon";






const HotelDetails = () => {
    const { hotelId } = useParams();
    const { data, isLoading } = useGetHotelById(hotelId!)

    if (isLoading) {
        return <HotelDetailsSkeleton />
    }
    return (
        <section className="space-y-6">
            <HotelAction hotelId={hotelId!} />
            <div className=" flex gap-4 flex-wrap">



                {
                    data?.photo?.secure_url ?
                        <img src={data?.photo?.secure_url || hotelImage} alt="Hotel image" className=" object-cover rounded-md w-xs max-w-sm aspect-video" />
                        :
                        <div className="w-full  max-w-sm aspect-video text-gray-400 text-lg rounded-md bg-muted flex flex-col gap-2 justify-center items-center">


                            <Image className="w-12 h-12" />
                            No Image Uploaded Yet

                        </div>
                }



                <HotelInfo hotel={data!} />
            </div>
        </section>
    )
}








export default HotelDetails