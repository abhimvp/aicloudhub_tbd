'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-full mb-6">
                <AlertCircle className="w-12 h-12 text-red-500 dark:text-red-400" />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Something went wrong!
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md">
                We couldn&apos;t load the blogs. This is likely a temporary connection issue.
                Please try again.
            </p>
            <Button
                onClick={reset}
                variant="default"
                className="bg-orange-500 hover:bg-orange-600 text-white"
            >
                Try again
            </Button>
        </div>
    );
}
