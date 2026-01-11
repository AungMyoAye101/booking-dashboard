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

/* =========================
   Types
========================= */
interface DonutChartProps<T extends string> {
    title: string
    description?: string
    data: {
        name: T
        value: number
        fill?: string
    }[]
    chartConfig: ChartConfig
    dataKey?: string
    nameKey?: string
    innerRadius?: number
    footer?: {
        trendText?: string
        helperText?: string
    }
}

/* =========================
   Component
========================= */
export function DonutChart<T extends string>({
    title,
    description,
    data,
    chartConfig,
    dataKey = "value",
    nameKey = "name",
    innerRadius = 60,
    footer,
}: DonutChartProps<T>) {
    return (
        <Card className="flex flex-col">
            <CardHeader className="items-center pb-0">
                <CardTitle>{title}</CardTitle>
                {description && (
                    <CardDescription>{description}</CardDescription>
                )}
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
                            data={data}
                            dataKey={dataKey}
                            nameKey={nameKey}
                            innerRadius={innerRadius}
                        />
                    </PieChart>
                </ChartContainer>
            </CardContent>

            {footer && (
                <CardFooter className="flex-col gap-2 text-sm">
                    {footer.trendText && (
                        <div className="flex items-center gap-2 font-medium leading-none">
                            {footer.trendText}
                            <TrendingUp className="h-4 w-4" />
                        </div>
                    )}
                    {footer.helperText && (
                        <div className="text-muted-foreground leading-none">
                            {footer.helperText}
                        </div>
                    )}
                </CardFooter>
            )}
        </Card>
    )
}
