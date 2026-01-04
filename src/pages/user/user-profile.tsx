import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useUserById } from "@/hooks/use-user";
import { Avatar } from "@radix-ui/react-avatar";
import { Separator } from "@radix-ui/react-separator";
import { useParams } from "react-router-dom";


const Profile = () => {
    const { userId } = useParams();
    const { data, isLoading } = useUserById(userId!);
    if (isLoading) {
        return <div className="p-4 rounded-md bg-card">
            <div className="flex gap-4">
                <Skeleton className="w-14  aspect-square rounded-md" />
                <div>
                    <Skeleton className="h-4 w-10" />
                    <Skeleton className="h-4 w-10" />
                </div>
            </div>
            <div className="grid grid-cols-2">
                <Skeleton className="h-4 w-10" />
                <Skeleton className="h-4 w-10" />
                <Skeleton className="h-4 w-10" />
                <Skeleton className="h-4 w-10" />
            </div>
        </div>
    }
    return (
        <Card className="bg-card">
            <CardHeader className="flex gap-4 items-center">
                <Avatar>
                    <AvatarImage src="/vite.svg" alt="vite" className="w-14  aspect-square rounded-lg" />
                    <AvatarFallback>U</AvatarFallback>
                </Avatar>

                <div>
                    <h1 className="text-lg font-semibold">{data?.name}</h1>
                    <p className="text-sm">{data?.email}</p>
                </div>
            </CardHeader>
            <Separator className="bg-card-foreground" />
            <CardContent className="text-sm grid grid-cols-2 gap-4 w-fit">
                <div>
                    <span>Phone</span>{':'}<span>{data?.phone}</span>
                </div>
                <div>
                    <span>City</span> {':'} <span>{data?.city}</span>
                </div>
                <div>

                    <span>Country</span> {':'}<span>{data?.country}</span>
                </div>
                {
                    data?.createdAt && <div>
                        <span>Joined At</span> {':'}<span>{new Date(data?.createdAt).toDateString()}</span>
                    </div>
                }

            </CardContent>
        </Card>

    )
}

export default Profile