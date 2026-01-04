import { Skeleton } from "@/components/ui/skeleton"

const HotelDetailsSkeleton = () => {
    return (
        <section className="space-y-6">
            {/* Actions */}
            <div className="flex gap-2">
                <Skeleton className="h-9 w-32" />
                <Skeleton className="h-9 w-40" />
                <Skeleton className="h-9 w-32" />
            </div>

            {/* Image + Chart */}
            <div className="flex gap-4">
                <Skeleton className="w-1/2 aspect-video rounded-md" />
                <Skeleton className="w-60 h-60 rounded-full" />
            </div>

            {/* Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[1, 2, 3].map(i => (
                    <div key={i} className="space-y-2">
                        <Skeleton className="h-5 w-40" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-3/4" />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default HotelDetailsSkeleton
