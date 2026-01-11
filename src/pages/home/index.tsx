import { useGetTotals, useTotalRevenue } from "@/hooks/use-analytic"
import RevenueCard from "./components/revenue-card"
import { ChartBarDefault } from "@/chart/bar-chart"
import { ChartRadialShape } from "@/chart/radial.chart"
import { ChartLine } from "@/chart/line-chart"
import RevenueDonutChart from "./components/revenue-chart"
import TotalCard from "./components/total"
import { Skeleton } from "@/components/ui/skeleton"

const Home = () => {


    const { data: revenue, isLoading } = useTotalRevenue()
    const { data: totals, isLoading: cardLoading } = useGetTotals()




    return (
        <div className="py-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <RevenueCard current={revenue?.current!} previous={revenue?.previous!} isLoading={isLoading} />
                <TotalCard totals={totals!} isLoading={cardLoading} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {
                    isLoading ?
                        <>
                            <Skeleton className="h-60 w-full rounded-lg" />
                            <Skeleton className="h-60 w-full rounded-lg" />
                            <Skeleton className="h-60 w-full rounded-lg" />
                            <Skeleton className="h-60 w-full rounded-lg" />
                        </>
                        :
                        <>

                            <ChartLine
                                title="Total Revenue"
                                description="Revenue amount from six months to current."
                                data={revenue?.chart ?? []}
                                xKey="month"
                                dataKey="total"

                            />
                            <RevenueDonutChart payments={revenue?.payments!} />
                            <ChartBarDefault />
                            <ChartRadialShape users={totals?.users!} />

                        </>
                }
            </div>

        </div>
    )
}

export default Home

