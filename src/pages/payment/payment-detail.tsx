import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useParams } from 'react-router-dom'


const PaymentDetail = () => {
    const { paymentId } = useParams();

    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    Payment Detail
                </CardTitle>
                <CardDescription>

                </CardDescription>
            </CardHeader>
        </Card>
    )
}

export default PaymentDetail