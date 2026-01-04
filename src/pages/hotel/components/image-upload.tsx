import { Input } from '@/components/ui/input'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Upload } from 'lucide-react'
import { Label } from '@/components/ui/label'
import { useState, type FormEvent } from 'react'
import { useImageUpload } from '@/hooks/use-image'
import { Spinner } from '@/components/ui/spinner'

const ImageUpload = ({ hotelId }: { hotelId: string }) => {

    const [preview, setPreview] = useState<string | null>(null)

    const onFilechange = (file: File) => {
        const url = URL.createObjectURL(file)
        setPreview(url)
    }

    //image upload mutation 

    const { mutate, isPending } = useImageUpload();


    const handleUpload = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const image = form.get('image') as File | null;
        if (!image) return;

        mutate({ id: hotelId, image })

    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={'outline'}>
                    <Upload /> Upload new image
                </Button>

            </DialogTrigger>
            <DialogContent className='sm:max-w-sm'>
                <DialogHeader>
                    <DialogTitle>
                        Upload hotel photo
                    </DialogTitle>
                    <DialogDescription>
                        Upload a new image for this hotel.  Hotel's image can attrest customer.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleUpload} id='image-form'>
                    <Label
                        htmlFor='image'
                        className='w-full aspect-video rounded-md border-2 border-border bg-card text-card-foreground cursor-pointer'>
                        {
                            preview ?

                                <img src={preview} alt="preview" className='w-full h-full aspect-square' />
                                :
                                <Upload className='w-20 text-gray-400 aspect-square mx-auto' />
                        }



                    </Label>
                    <Input
                        type='file'
                        name='image'
                        id='image'
                        accept='image/*'
                        className='hidden'
                        onChange={(e) => {
                            const file = e.target?.files?.[0];
                            if (file) onFilechange(file);
                        }}
                    />

                </form>
                <DialogFooter>
                    <Button disabled={isPending} variant={'outline'} onClick={() => setPreview(null)}>
                        cancel
                    </Button>
                    <Button disabled={isPending} type='submit' form='image-form'>
                        {
                            isPending ? <><Spinner /> Uploading... </> : "   Upload"
                        }

                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default ImageUpload