
"use client";

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface AccordionItemProps {
    title: string
    content: string
    isOpen: boolean
    onClick: () => void
}

function AccordionItem({ title, content, isOpen, onClick }: AccordionItemProps) {
    return (
        <div className="">
            <button
                className="flex w-full items-center justify-between px-6 py-5 text-left font-medium transition-all hover:text-primary"
                onClick={onClick}
            >
                <span className="text-lg font-semibold">{title}</span>
                <ChevronDown className={cn("h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300", isOpen && "rotate-180 text-primary")} />
            </button>
            <div
                className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out px-6",
                    isOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
                )}
            >
                <p className="text-muted-foreground leading-relaxed">{content}</p>
            </div>
        </div>
    )
}

interface AccordionBlockProps {
    heading?: string
    items?: Array<{
        title: string
        content: string
    }>
}

export default function AccordionBlock({ heading, items }: AccordionBlockProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <section className="py-8 md:py-12 bg-background">
            <div className="container mx-auto px-4 max-w-3xl">
                {heading && (
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-foreground">
                        {heading}
                    </h2>
                )}

                <div className="space-y-4">
                    {items?.map((item, idx) => (
                        <div
                            key={idx}
                            className="border border-border/50 rounded-2xl overflow-hidden bg-card/50 hover:bg-card transition-colors duration-300"
                        >
                            <AccordionItem
                                title={item.title}
                                content={item.content}
                                isOpen={openIndex === idx}
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
