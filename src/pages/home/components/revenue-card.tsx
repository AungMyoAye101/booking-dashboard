import { Badge } from '@/components/ui/badge'
import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { priceFormater } from '@/lib/helper'
import { TrendingDown, TrendingUp } from 'lucide-react'
import type { FC } from 'react'

type RevenueCardProps = {
    current: number,
    previous: number
}

const percentageChange = (current: number, previous: number) => {
    if (current === 0 && previous === 0) return 0;
    if (previous === 0) return 100;

    return Number(
        (((current - previous) / previous) * 100).toFixed(2)
    );
}
const RevenueCard: FC<RevenueCardProps> = ({ current, previous }) => {

    const revenuePercentage = percentageChange(current, previous);

    const trendIcon = revenuePercentage > 0 ? <TrendingUp className='text-green-500' /> : <TrendingDown className='text-destructive' />

    return (
        <Card className="@container/card">
            <CardHeader>
                <CardDescription className='text-foreground/80'>Total Revenue</CardDescription>
                <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                    {
                        priceFormater(current)
                    }
                </CardTitle>
                <CardAction>
                    <Badge variant="outline">
                        {trendIcon}
                        {revenuePercentage} %
                    </Badge>
                </CardAction>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1.5 text-sm">
                <div className="line-clamp-1 flex gap-2 font-medium text-sm">
                    <span className='text-sm flex gap-1'> {trendIcon}
                        {revenuePercentage} %</span>  last month

                </div>
            </CardFooter>
        </Card>
    )
}

export default RevenueCard