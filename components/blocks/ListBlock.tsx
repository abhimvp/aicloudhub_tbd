import { Check, LayoutGrid } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ListItem {
    title?: string
    description?: string
}

interface ListBlockProps {
    heading?: string
    description?: string
    layout?: 'grid' | 'list' | 'columns'
    items?: ListItem[]
}

export default function ListBlock({ heading, description, layout = 'list', items }: ListBlockProps) {
    if (!items || items.length === 0) return null

    return (
        <section className="py-8 md:py-12 bg-background relative">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    {heading && (
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
                            {heading}
                        </h2>
                    )}
                    {description && (
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                            {description}
                        </p>
                    )}
                </div>

                <div className={cn(
                    "gap-6",
                    layout === 'grid' && "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
                    layout === 'columns' && "columns-1 md:columns-2 gap-8 space-y-6",
                    layout === 'list' && "flex flex-col space-y-4 max-w-4xl mx-auto"
                )}>
                    {items.map((item, idx) => (
                        <div
                            key={idx}
                            className={cn(
                                "break-inside-avoid transition-all duration-300 group",
                                layout === 'grid' && "bg-card border border-border/50 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 hover:-translate-y-1",
                                layout === 'list' && "flex items-start gap-6 p-6 rounded-2xl bg-secondary/30 hover:bg-secondary/50 border border-transparent hover:border-border/50",
                                layout === 'columns' && "flex items-start gap-4 mb-6 p-4 rounded-xl hover:bg-secondary/20"
                            )}
                        >
                            <div className={cn(
                                "shrink-0 rounded-xl flex items-center justify-center transition-colors duration-300",
                                layout === 'grid' && "w-12 h-12 bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground",
                                layout !== 'grid' && "w-8 h-8 mt-1 bg-primary/10 text-primary"
                            )}>
                                {layout === 'grid' ? <LayoutGrid className="w-6 h-6" /> : <Check className="w-5 h-5" />}
                            </div>

                            <div>
                                {item.title && (
                                    <h3 className={cn(
                                        "font-bold text-foreground group-hover:text-primary transition-colors duration-300",
                                        layout === 'grid' && "text-xl mb-3",
                                        layout !== 'grid' && "text-lg mb-2"
                                    )}>
                                        {item.title}
                                    </h3>
                                )}
                                {item.description && (
                                    <p className="text-muted-foreground text-base leading-relaxed">
                                        {item.description}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
