import { Skeleton } from "@/components/ui/skeleton"

const HotelDetailsSkeleton = () => {
    return (
        <section className="space-y-6">
            {/* Actions */}
            <div className="flex flex-wrap gap-1">
                <Skeleton className="h-7 w-32" />
                <Skeleton className="h-7 w-40" />
                <Skeleton className="h-7 w-32" />
                <Skeleton className="h-7 w-32" />
            </div>

            {/* Image + Chart */}
            <div className="flex flex-wrap gap-4 ">
                <Skeleton className="w-full max-w-sm  aspect-video rounded-md" />
                <Skeleton className="w-full max-w-xs   aspect-square rounded-md" />
                <Skeleton className="w-full max-w-xs   aspect-square rounded-md" />
                <Skeleton className="w-full max-w-xs aspect-square rounded-md" />

            </div>

        </section>
    )
}

export default HotelDetailsSkeleton
