import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { useGetTotals } from '@/hooks/use-analytic'
import { BookMarked, Hotel } from 'lucide-react'

const TotalCard = () => {
    const { data: totals, isLoading } = useGetTotals()
    return (
        <>
            <Card className="@container/card">
                <CardHeader>
                    <CardDescription className='text-foreground/80 flex items-center gap-2'><Hotel /> Total hotels</CardDescription>
                    <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl text-center">
                        {
                            totals?.hotels
                        }
                    </CardTitle>

                </CardHeader>
                <CardFooter className="flex-col items-start gap-1.5 text-sm">
                    Total hotels ,motel and guest house
                </CardFooter>
            </Card >
            <Card className="@container/card">
                <CardHeader>
                    <CardDescription className='text-foreground/80 flex items-center gap-2'> <BookMarked />   Total Booking</CardDescription>
                    <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl text-center">
                        {
                            totals?.bookings
                        }
                    </CardTitle>

                </CardHeader>
                <CardFooter className="text-sm ">
                    Booking for the last 6 months
                </CardFooter>
            </Card>
        </>
    )
}

export default TotalCard