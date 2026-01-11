
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

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
import { useGetTotalBooking } from "@/hooks/use-analytic"
import { Skeleton } from "@/components/ui/skeleton"





const chartConfig = {
    desktop: {
        label: "total",
        color: "var(--chart-1)",
    },
} satisfies ChartConfig

export function ChartBarDefault() {

    const { data: booking, isLoading } = useGetTotalBooking();

    if (isLoading) {
        return <Skeleton className="h-60 w-full rounded-lg" />
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Total Booking</CardTitle>
                <CardDescription>Revenue amount from six months to current.</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart accessibilityLayer data={booking}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Bar dataKey="total" fill="var(--color-desktop)" radius={8} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">

                <div className="text-muted-foreground leading-none">
                    Showing total visitors for the last 6 months
                </div>
            </CardFooter>
        </Card>
    )
}
