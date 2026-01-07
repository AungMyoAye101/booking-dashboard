
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "./ui/empty";
import { Button } from './ui/button';
import { Unplug } from "lucide-react";

type ErrorProp = {
    message?: string,
    reset: () => void
}
const ErrorPage = ({ message, reset }: ErrorProp) => {
    console.log({ message })
    return (
        <div className=" flex justify-center items-center w-full h-screen">
            <Empty className="max-w-sm rounded-lg bg-secondary ">
                <EmptyHeader className="text-destructive">
                    <EmptyMedia>
                        <Unplug className="w-16 h-16" />
                    </EmptyMedia>
                    <EmptyTitle>
                        Opps : Something went worng!
                    </EmptyTitle>
                    <EmptyDescription>
                        Please try agin and later.
                    </EmptyDescription>
                </EmptyHeader>
                <EmptyContent>


                    <Button onClick={() => reset}>Try again</Button>
                </EmptyContent>

            </Empty>
        </div>
    )
}

export default ErrorPage