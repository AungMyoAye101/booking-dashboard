import { CartesianGrid, Line, LineChart as RechartsLineChart, XAxis, YAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    type ChartConfig,
} from "@/components/ui/chart"
import { Skeleton } from "@/components/ui/skeleton"


export interface LineChartProps<T extends Record<string, string | number>> {

    title: string,
    description?: string
    data: T[]
    xKey: string,
    dataKey: string
    isLoading: boolean
}
const chartConfig = {
    desktop: {
        label: "month",
        color: "var(--chart-1)",
    },
} satisfies ChartConfig

export function ChartLine<T extends Record<string, string | number>>({
    title,
    description,
    data = [],
    xKey,
    dataKey,
    isLoading
}: LineChartProps<T>) {
    if (isLoading) {
        return <Skeleton className="h-60 w-full rounded-lg" />
    }
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <RechartsLineChart accessibilityLayer data={data} margin={{ left: 12, right: 12 }}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey={String(xKey)}
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <YAxis tickMargin={8} />

                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />

                        <Line
                            dataKey={dataKey}
                            type="natural"
                            stroke="var(--color-desktop)"
                            strokeWidth={2}
                            dot={false}
                        />
                    </RechartsLineChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}

