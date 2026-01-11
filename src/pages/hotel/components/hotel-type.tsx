
import { Pie, PieChart } from "recharts"

import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    type ChartConfig,
} from "@/components/ui/chart"
import { useGetHoteTypes } from "@/hooks/use-hotel"
import { Skeleton } from "@/components/ui/skeleton"


const chartDemo = [

    { name: "hotel", total: 200, fill: "var(--color-hotel)" },
    { name: "motel", total: 187, fill: "var(--color-motel)" },
    { name: "guest-house", total: 173, fill: "var(--color-guest-house)" },

]

const chartConfig = {

    hotel: {
        label: "Hotel",
        color: "var(--chart-1)",
    },
    motel: {
        label: "Motel",
        color: "var(--chart-2)",
    },
    "guest-house": {
        label: "Guest-house",
        color: "var(--chart-3)",
    },

} satisfies ChartConfig

export function ChartHotelType() {
    const { data, isLoading } = useGetHoteTypes();
    if (isLoading) {
        return <Skeleton className="h-60 w-full rounded-lg" />
    }

    const chartData = chartDemo.map(item => {
        const found = data?.find(d => d.type === item.name)
        return {
            ...item,
            total: found?.count ?? 0
        }
    })
    return (
        <div className="bg-card text-card-foreground rounded-lg shadow">
            <h1 className="text-lg mx-4 mt-2">Hotel types</h1>

            <ChartContainer
                config={chartConfig}
                className="[&_.recharts-pie-label-text]:fill-foreground mx-auto aspect-square max-h-[250px] pb-0"
            >
                <PieChart>
                    <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                    <Pie data={chartData} dataKey="total" label nameKey="name" />
                </PieChart>
            </ChartContainer>
        </div>
    )
}
