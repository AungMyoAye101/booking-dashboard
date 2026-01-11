import { useTotalRevenue } from "@/hooks/use-analytic"
import RevenueCard from "./components/revenue-card"
import { ChartBarDefault } from "@/chart/bar-chart"
import { ChartRadialShape } from "@/chart/radial.chart"
import { ChartLine } from "@/chart/line-chart"
import { DonutChart } from "@/chart/pie-chart"
import RevenueDonutChart from "./components/revenue-chart"


const Home = () => {


    const { data: revenue, isLoading } = useTotalRevenue()
    if (isLoading) {
        return <p>Loading...</p>
    }

    return (
        <div className="h-screen">
            <RevenueCard current={revenue?.current!} previous={revenue?.previous!} />
            <div className="grid grid-cols-2 gap-4 mt-4">
                <ChartLine
                    title="Total Revenue"
                    description="Revenue amount from six months to current."
                    data={revenue?.chart ?? []}
                    xKey="month"
                    dataKey="total"

                />
                <RevenueDonutChart payments={revenue?.payments!} />


                <ChartBarDefault />
                <ChartRadialShape />
            </div>

        </div>
    )
}

export default Home

