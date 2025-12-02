import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
    className?: string;
}

export default function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
    return (
        <nav aria-label="Breadcrumb" className={`flex items-center text-sm ${className}`}>
            <ol className="flex items-center space-x-2">
                <li>
                    <Link
                        href="/"
                        className="flex items-center text-white/70 hover:text-white transition-colors"
                    >
                        <Home className="h-4 w-4" />
                        <span className="sr-only">Home</span>
                    </Link>
                </li>
                {items.map((item, index) => {
                    const isLast = index === items.length - 1;
                    return (
                        <li key={index} className="flex items-center">
                            <ChevronRight className="h-4 w-4 text-white/40 mx-1" />
                            {item.href && !isLast ? (
                                <Link
                                    href={item.href}
                                    className="text-white/70 hover:text-white transition-colors font-medium"
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <span className="text-white font-semibold" aria-current="page">
                                    {item.label}
                                </span>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}
