import { useDeleteHotel, useGetHotelById } from "@/hooks/use-hotel"
import { Link, useParams } from "react-router-dom"
import hotelImage from "@/assets/hotel-bg.png"
import { Edit, Trash, Upload } from "lucide-react";
import { ButtonGroup } from "@/components/ui/button-group";
import { Pie, PieChart } from "recharts"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    type ChartConfig,
} from "@/components/ui/chart"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"


export const description = "A donut chart"

const chartData = [
    { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
    { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
    { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
    { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
    { browser: "other", visitors: 90, fill: "var(--color-other)" },
]


import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { FormEvent } from "react";
import HotelAction from "./components/hotel-actions";




const HotelDetails = () => {
    const { hotelId } = useParams();

    const { data, isLoading, isError } = useGetHotelById(hotelId!)



    const mutation = useDeleteHotel()
    const handleDelete = (id: string) => {
        mutation.mutate(id)
    }

    const imageUploadHandle = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const image = form.get("image");

        console.log(image)
    }

    return (
        <section className="space-y-6">
            <HotelAction hotelId={hotelId!} />
            <div className="flex gap-4 ">
                <img src={hotelImage} alt="Hotel image" className="w-[50%] h-7x10 object-cover aspect-video  rounded-md" />
                <ChartPieDonut />
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





const chartConfig = {
    visitors: {
        label: "Visitors",
    },
    chrome: {
        label: "Chrome",
        color: "var(--chart-1)",
    },
    safari: {
        label: "Safari",
        color: "var(--chart-2)",
    },
    firefox: {
        label: "Firefox",
        color: "var(--chart-3)",
    },
    edge: {
        label: "Edge",
        color: "var(--chart-4)",
    },
    other: {
        label: "Other",
        color: "var(--chart-5)",
    },
} satisfies ChartConfig

function ChartPieDonut() {
    return (

        <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square h-60"
        >
            <PieChart>
                <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                    data={chartData}
                    dataKey="visitors"
                    nameKey="browser"
                    innerRadius={60}
                />
            </PieChart>
        </ChartContainer>

    )
}


export default HotelDetails