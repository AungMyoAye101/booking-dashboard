import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Eye, Image, Upload } from "lucide-react"
import type { RoomType } from "@/types/room-type"
import { priceFormater } from "@/lib/helper"
import { useState, type FormEvent } from "react"
import { useRoomImageUpload } from "@/hooks/use-image"
import { Spinner } from "@/components/ui/spinner"


const RoomDetails = ({ room }: { room: RoomType }) => {
    const [preview, setPreview] = useState('')
    const onFileChange = (file: File) => {
        const url = URL.createObjectURL(file);
        setPreview(url)
    }
    const { mutate, isPending } = useRoomImageUpload()
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const image = form.get('image') as File;
        mutate({ id: room._id, image })

    }

    //image 

    const img = typeof room.photo === 'string' ? room.photo : room.photo?.secure_url ?? ""
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant={'outline'}
                    size={'icon-sm'}
                ><Eye /></Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>

                    <DialogTitle>
                        Room Detail
                    </DialogTitle>
                    <DialogDescription>
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div className="rounded-lg overflow-hidden border-2 aspect-video" >
                                {
                                    img ?
                                        <img src={img} alt="Room image" />
                                        : <form
                                            onSubmit={handleSubmit}
                                            id="image-form"
                                            className="w-full  h-full flex justify-center items-center bg-input text-foreground/50 cursor-pointer">
                                            <label
                                                htmlFor="room-image"
                                            >
                                                {
                                                    preview ? <img src={preview} alt="Room image" /> :

                                                        <div className="flex flex-col items-center gap-1">
                                                            <Image />
                                                            <span className="text-sm">
                                                                Upload a image
                                                            </span>

                                                        </div>

                                                }

                                            </label>

                                            <input
                                                name="image"
                                                id="room-image"
                                                className="hidden"
                                                type="file"
                                                accept="image/*"

                                                onChange={(e) => {
                                                    const file = e.target?.files?.[0];
                                                    if (file) onFileChange(file)
                                                }}
                                            />
                                        </form>
                                }

                            </div>

                            <div className="space-y-2">
                                <h1>name : <strong>
                                    {room.name}
                                </strong>


                                </h1>
                                <p>price : <strong>
                                    {priceFormater(room.price)}
                                </strong></p>
                                <p>max people :<strong>
                                    {room.maxPeople}
                                </strong> </p>
                                <p> total room :<strong>
                                    {room.totalRooms}
                                </strong> </p>
                                <p>bed type : <strong>
                                    {room.bedTypes}
                                </strong></p>
                            </div>
                        </div>
                    </DialogDescription>

                </DialogHeader>

                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant='outline' size={'sm'}  >Cancel</Button>
                    </DialogClose>
                    <Button size={'sm'}
                        disabled={isPending}
                        type="submit"
                        form="image-form"
                    >
                        {
                            isPending ? <> <Spinner />Uploading..</> : <><Upload />Upload image </>
                        }

                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog >
    )
}

export default RoomDetails