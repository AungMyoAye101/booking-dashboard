"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, Line as RechartsLine, LineChart as RechartsLineChart, XAxis, YAxis } from "recharts"

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


export interface LineChartProps<T extends Record<string, string | number>> {

    title: string,
    description?: string
    data: T[]
    xKey: string,
    dataKey: string

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
    dataKey
}: LineChartProps<T>) {
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

