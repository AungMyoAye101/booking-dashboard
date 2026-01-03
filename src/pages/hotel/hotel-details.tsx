import { useDeleteHotel, useGetHotelById } from "@/hooks/use-hotel"
import { Link, useNavigate, useParams } from "react-router-dom"
import hotelImage from "@/assets/hotel-bg.png"
import { Archive, Delete, Edit, Trash, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { TrendingUp } from "lucide-react"
import { Pie, PieChart } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
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


const HotelDetails = () => {
    const { hotelId } = useParams();

    const { data, isLoading, isError } = useGetHotelById(hotelId!)



    const mutation = useDeleteHotel()
    const handleDelete = (id: string) => {
        mutation.mutate(id)
    }

    return (
        <section className="space-y-6">

            <ButtonGroup>
                <Button disabled={mutation.isPending} variant={'outline'}>
                    <Link to={`/hotel/update/${hotelId}`} className="flex gap-1.5 items-center">
                        <Edit />
                        update hotel
                    </Link>
                </Button>
                <Button disabled={mutation.isPending} variant={'outline'}>
                    <Upload />
                    upload new image </Button>

                <AlertDialog>
                    <AlertDialogTrigger >
                        <Button disabled={mutation.isPending} variant='outline' className="text-destructive">
                            <Trash /> delete hotel

                        </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>

                        <AlertDialogHeader>
                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                                This action cannot be undone. This will permanently delete your hotel
                                and remove hotel data from our servers.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>
                                Cancel
                            </AlertDialogCancel>
                            <AlertDialogAction onClick={() => handleDelete(hotelId!)}>
                                Delete
                            </AlertDialogAction>
                        </AlertDialogFooter>

                    </AlertDialogContent>
                </AlertDialog>

            </ButtonGroup>
            <div className="flex gap-4 ">
                <img src={hotelImage} alt="Hotel image" className="w-[50%] object-cover aspect-video  rounded-md" />
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
        <Card className="flex flex-col">
            <CardHeader className="items-center pb-0">
                <CardTitle>Pie Chart - Donut</CardTitle>
                <CardDescription>January - June 2024</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[250px]"
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
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm">
                <div className="flex items-center gap-2 leading-none font-medium">
                    Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                </div>
                <div className="text-muted-foreground leading-none">
                    Showing total visitors for the last 6 months
                </div>
            </CardFooter>
        </Card>
    )
}


export default HotelDetails