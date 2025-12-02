"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { X } from "lucide-react";

interface Props {
    locations: string[];
    jobTypes: string[];
}

export function CareersFilter({ locations, jobTypes }: Props) {
    const router = useRouter();
    const searchParams = useSearchParams();

    const currentLocation = searchParams.get("location") || "all";
    const currentType = searchParams.get("type") || "all";

    const handleFilterChange = (key: string, value: string) => {
        const params = new URLSearchParams(searchParams.toString());
        if (value && value !== "all") {
            params.set(key, value);
        } else {
            params.delete(key);
        }
        router.push(`/careers?${params.toString()}`, { scroll: false });
    };

    const clearFilters = () => {
        router.push("/careers", { scroll: false });
    };

    const hasActiveFilters = currentLocation !== "all" || currentType !== "all";

    return (
        <div className="flex flex-col md:flex-row gap-4 mb-12 items-center justify-center">
            {/* Location Filter */}
            <div className="w-full md:w-[200px]">
                <Select
                    value={currentLocation}
                    onValueChange={(val) => handleFilterChange("location", val)}
                >
                    <SelectTrigger>
                        <SelectValue placeholder="Filter by Location" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Locations</SelectItem>
                        {locations.map((loc) => (
                            <SelectItem key={loc} value={loc}>
                                {loc}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            {/* Job Type Filter */}
            <div className="w-full md:w-[200px]">
                <Select
                    value={currentType}
                    onValueChange={(val) => handleFilterChange("type", val)}
                >
                    <SelectTrigger>
                        <SelectValue placeholder="Filter by Type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Job Types</SelectItem>
                        {jobTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                                {type}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            {/* Clear Filters Button */}
            {hasActiveFilters && (
                <Button
                    variant="ghost"
                    onClick={clearFilters}
                    className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
                >
                    <X className="w-4 h-4 mr-2" />
                    Clear Filters
                </Button>
            )}
        </div>
    );
}
