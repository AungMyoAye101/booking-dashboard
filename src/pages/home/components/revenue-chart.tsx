import { DonutChart } from '@/chart/pie-chart'
import type { ChartConfig } from '@/components/ui/chart'
import { Skeleton } from '@/components/ui/skeleton';

type RevenueDonutChartProps = {
    method: "MOBILE_BANKING" | "CARD" | "BANK",
    total: number,

}

const RevenueDonutChart = ({ payments, isLoading }: { payments: RevenueDonutChartProps[], isLoading: boolean }) => {
    if (isLoading) {
        return <Skeleton className="h-60 w-full rounded-lg" />
    }
    const paymentData = [
        { name: "CARD", value: 0, fill: "var(--color-CARD)" },
        { name: "MOBILE_BANKING", value: 0, fill: "var(--color-MOBILE_BANKING)" },
        { name: "BANK", value: 0, fill: "var(--color-BANK)" },
    ];

    const chartData = paymentData.map(payment => {
        const found = payments.find(m => m.method === payment.name);
        return {
            ...payment,
            value: found?.total ?? 0,

        }
    })
    const paymentChartConfig = {
        CARD: { label: "Card", color: "var(--chart-1)" },
        MOBILE_BANKING: { label: "Mobile Banking", color: "var(--chart-2)" },
        BANK: { label: "Bank", color: "var(--chart-4)" },
    } satisfies ChartConfig


    return (


        <DonutChart
            title="Revenue by Payment Method"
            description="Current month"
            data={chartData}
            chartConfig={paymentChartConfig}

        />

    )
}

export default RevenueDonutChart