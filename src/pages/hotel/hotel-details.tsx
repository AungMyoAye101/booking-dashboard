import { useGetHotelById } from "@/hooks/use-hotel"
import { useParams } from "react-router-dom"
import hotelImage from "@/assets/booking-logo.svg"
import HotelAction from "./components/hotel-actions";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
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
            <div className="min-w-80 sm:max-w-lg ">
                <AspectRatio ratio={16 / 9} className=" rounded-lg">
                    {
                        data?.photo?.secure_url ?
                            <img src={data?.photo?.secure_url || hotelImage} alt="Hotel image" className="w-full h-full object-cover rounded-md" />
                            :
                            <div className="w-full h-full text-gray-400 text-lg rounded-md bg-muted flex flex-col gap-2 justify-center items-center">


                                <Image className="w-12 h-12" />
                                No Image Uploaded Yet

                            </div>
                    }
                </AspectRatio>


                {/* <ChartPieDonut /> */}
            </div>
            <HotelInfo hotel={data!} />
        </section>
    )
}








export default HotelDetails