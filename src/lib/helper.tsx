import { AirVent, Bath, Dumbbell, ParkingCircle, Utensils, Wifi } from "lucide-react";
export const priceFormater = (amount: number) => {
    return Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: "usd",
        minimumFractionDigits: 0, // Ensures at least 0 decimal places (removes '.00')
        maximumFractionDigits: 0
    }).format(amount);


}



export const AMENITIES = [
    { label: "Wi-Fi", value: "wifi", icon: <Wifi /> },
    { label: "Swimming Pool", value: "pool", icon: <Bath /> },
    { label: "Parking", value: "parking", icon: <ParkingCircle /> },
    { label: "Air Conditioning", value: "ac", icon: <AirVent /> },
    { label: "Gym", value: "gym", icon: <Dumbbell /> },
    { label: "Breakfast", value: "breakfast", icon: <Utensils /> },
];