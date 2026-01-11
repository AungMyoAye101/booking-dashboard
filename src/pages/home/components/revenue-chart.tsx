import { DonutChart } from '@/chart/pie-chart'
import type { ChartConfig } from '@/components/ui/chart'

type RevenueDonutChartProps = {
    method: "MOBILE_BANKING" | "CARD" | "BANK",
    total: number
}

const RevenueDonutChart = ({ payments }: { payments: RevenueDonutChartProps[] }) => {
    const paymentData = [
        { name: "CARD", value: 0, fill: "var(--color-card)" },
        { name: "MOBILE_BANKING", value: 0, fill: "var(--color-mobile_banking)" },
        { name: "BANK", value: 0, fill: "var(--color-bank)" },
    ];

    const chartData = paymentData.map(payment => {
        const found = payments.find(m => m.method === payment.name);
        return {
            ...payment,
            value: found?.total ?? 0,

        }
    })
    const paymentChartConfig = {
        card: { label: "CARD", color: "var(--chart-1)" },
        mobile_banking: { label: "MOBILE BANKING", color: "var(--chart-2)" },
        bank: { label: "BANK", color: "var(--chart-4)" },
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