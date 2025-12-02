import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

export default function Loading() {
    return (
        <div className="min-h-screen bg-white dark:bg-zinc-950 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Hero Skeleton */}
                <div className="text-center mb-12 space-y-4">
                    <Skeleton className="h-8 w-32 mx-auto rounded-full" />
                    <Skeleton className="h-16 w-3/4 mx-auto rounded-xl" />
                    <Skeleton className="h-6 w-1/2 mx-auto rounded-lg" />
                    <Skeleton className="h-14 w-full max-w-2xl mx-auto rounded-2xl mt-8" />
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar Skeleton */}
                    <div className="lg:w-64 shrink-0">
                        <Card className="border-gray-200 dark:border-white/10">
                            <CardContent className="p-6 space-y-4">
                                <Skeleton className="h-8 w-1/2" />
                                <div className="space-y-2">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <Skeleton key={i} className="h-10 w-full rounded-lg" />
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Grid Skeleton */}
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[1, 2, 3, 4].map((i) => (
                            <Card key={i} className="h-[380px] rounded-3xl overflow-hidden border-gray-200 dark:border-white/10">
                                <div className="h-48 bg-gray-200 dark:bg-zinc-800 animate-pulse" />
                                <CardContent className="p-4 space-y-4">
                                    <Skeleton className="h-6 w-3/4" />
                                    <Skeleton className="h-4 w-full" />
                                    <Skeleton className="h-4 w-2/3" />
                                    <div className="pt-4 flex justify-between items-center">
                                        <Skeleton className="h-4 w-24" />
                                        <Skeleton className="h-10 w-32 rounded-xl" />
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
