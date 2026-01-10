import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Card>

                <CardContent>
                    <h1 className="font-semibold text-lg mb-1">Hotel infomation</h1>

                    <p>Name: <strong>{hotel.name}</strong></p>
                    <p>Price: <strong>{hotel.price}</strong></p>
                    <p>Type: <strong>{hotel.type}</strong></p>

                </CardContent>
            </Card>

            <Card>

                <CardContent>
                    <h1 className="font-semibold text-lg mb-1">Hotel Location</h1>
                    <p>Address: <strong>{hotel.address}</strong></p>
                    <p>City: <strong>{hotel.city}</strong></p>
                    <p>Country: <strong>{hotel.country}</strong></p>

                </CardContent>
            </Card>

            <Card>

                <CardContent>
                    <h1 className="font-semibold text-lg mb-1">Hotel Amenities</h1>
                    <div className="space-x-4">
                        {hotel.amenities.map(a => (
                            <span key={a} className="px-2 py-1 text-sm bg-muted rounded">
                                {a}
                            </span>
                        ))}

                    </div>

                </CardContent>
            </Card>


        </div>
    )
}

export default HotelInfo
