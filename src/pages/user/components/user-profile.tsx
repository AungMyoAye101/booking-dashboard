import { AvatarImage } from "@/components/ui/avatar";
import { Avatar } from "@radix-ui/react-avatar";
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Eye } from "lucide-react";
import img from "@/assets/man.png"
import type { userType } from "@/types/user-types";
import type { FC } from "react";

type ProfileProp = {
    user: userType
}
const Profile: FC<ProfileProp> = ({ user }) => {

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={'outline'} size={'icon-sm'}>
                    <Eye />
                </Button>
            </DialogTrigger>
            <DialogContent >
                <div className="flex items-center gap-4 ">


                    <Avatar>
                        <AvatarImage src={img} alt="user photo" className="w-20 border-2 border-primary rounded-full" />
                    </Avatar>
                    <div >
                        <h1>{user.name}</h1>
                        <small>{user.email}</small>
                    </div>
                </div>
                <DialogFooter>
                    <DialogClose>
                        Close
                    </DialogClose>
                </DialogFooter>

            </DialogContent>

        </Dialog>

    )
}

export default Profile