import { Card, CardContent } from "@/components/ui/card"
import { AMENITIES } from "@/lib/helper"
import { Hotel, MapPin } from "lucide-react"

interface Props {
    hotel: {
        name: string
        price: number
        type: string
        address: string
        city: string
        country: string
        amenities: string[]
    }
}

const HotelInfo = ({ hotel }: Props) => {
    return (
        <>
            <Card className="w-72">

                <CardContent>
                    <h1 className="font-semibold text-lg mb-1 flex items-center gap-1"><Hotel className="w-5" />Hotel infomation</h1>

                    <p>Name: <strong>{hotel.name}</strong></p>
                    <p>Price: <strong>{hotel.price}</strong></p>
                    <p>Type: <strong>{hotel.type}</strong></p>

                </CardContent>
            </Card>

            <Card className="w-72">

                <CardContent>
                    <h1 className="font-semibold text-lg mb-1 flex items-center gap-1"> <MapPin className="w-5" />Hotel Location</h1>
                    <p>Address: <strong>{hotel.address}</strong></p>
                    <p>City: <strong>{hotel.city}</strong></p>
                    <p>Country: <strong>{hotel.country}</strong></p>

                </CardContent>
            </Card>

            <Card>

                <CardContent>
                    <h1 className="font-semibold text-lg mb-1">Hotel Amenities</h1>
                    <div className="grid grid-cols-2 gap-4">
                        {
                            AMENITIES.filter(amenity => hotel.amenities.includes(amenity.value)).map((amenity) => (
                                <div key={amenity.value} className="flex gap-2 items-center">
                                    {amenity.icon} {amenity.label}
                                </div>
                            ))
                        }


                    </div>

                </CardContent>
            </Card>


        </>
    )
}

export default HotelInfo
