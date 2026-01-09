import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useGetPaymentById } from '@/hooks/use-payment';
import { useParams } from 'react-router-dom'


const PaymentDetail = () => {
    const { paymentId } = useParams();

    const { data, isLoading } = useGetPaymentById(paymentId!);
    console.log(data)

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