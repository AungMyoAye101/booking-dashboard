import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog';
import { Skeleton } from '@/components/ui/skeleton';
import { useGetPaymentById } from '@/hooks/use-payment';
import { priceFormater } from '@/lib/helper';
import { Eye } from 'lucide-react';
import type { FC } from 'react';


type paymentIdProp = {
    id: string
}

const PaymentDetail: FC<paymentIdProp> = ({ id }) => {


    const { data, isLoading } = useGetPaymentById(id);


    const name = typeof data?.userId === 'string' ? data.userId : data?.userId.name ?? '';

    const loadingElems = <div className='grid grid-cols-2 gap-4'>
        <Skeleton className='h-6 w-full' />
        <Skeleton className='h-6 w-full' />
        <Skeleton className='h-6 w-full' />
        <Skeleton className='h-6 w-full' />
        <Skeleton className='h-6 w-full col-span-2' />
    </div>
    return (
        <Dialog>
            <DialogTrigger >
                <Eye />
            </DialogTrigger>
            <DialogContent>
                <DialogHeader >
                    <DialogTitle className='font-semibold text-lg '>
                        Payment Detail
                    </DialogTitle>
                    <DialogDescription asChild>
                        {
                            isLoading ? loadingElems :
                                <div className="grid grid-cols-2 gap-4  ">

                                    <div className='bg-secondary text-secondary-foreground  px-4 py-1.5 rounded-md flex justify-between items-center'>
                                        User
                                        <span> {name}  </span>
                                    </div>
                                    <div className='bg-secondary text-secondary-foreground  px-4 py-1.5 rounded-md flex justify-between items-center'>
                                        Status
                                        <span> {data?.status}  </span>
                                    </div>
                                    <div className='bg-secondary text-secondary-foreground  px-4 py-1.5 rounded-md flex justify-between items-center'>
                                        Payment Method
                                        <span> {data?.paymentMethod}  </span>
                                    </div>
                                    <div className='bg-secondary text-secondary-foreground  px-4 py-1.5 rounded-md flex justify-between items-center'>
                                        Paid At
                                        <span> {new Date(data?.paidAt!).toDateString()}  </span>
                                    </div>
                                    <div className='col-span-2 bg-primary text-primary-foreground px-4 py-2 rounded-md flex justify-between items-center'>
                                        <h2 className='font-semibold text-lg '>
                                            Total
                                        </h2>
                                        <span className='font-semibold'>{priceFormater(data?.amount!)}</span>
                                    </div>
                                </div>
                        }
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant={'secondary'}>
                            Close
                        </Button>

                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>

    )
}

export default PaymentDetail