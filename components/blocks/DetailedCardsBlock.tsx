import { CheckCircle2 } from 'lucide-react'

interface DetailedCard {
    title: string
    description: string
    listTitle?: string
    listItems?: string[]
    footerText?: string
}

interface DetailedCardsBlockProps {
    heading?: string
    cards?: DetailedCard[]
}

export default function DetailedCardsBlock({ heading, cards }: DetailedCardsBlockProps) {
    if (!cards || cards.length === 0) return null

    return (
        <section className="py-8 md:py-12 bg-secondary/30 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-30 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,165,0,0.05),transparent_40%)]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {heading && (
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-foreground tracking-tight">
                        {heading}
                    </h2>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cards.map((card, idx) => (
                        <div
                            key={idx}
                            className="group relative bg-background rounded-3xl p-8 shadow-sm border border-border/50 hover:shadow-xl hover:shadow-orange-500/5 hover:border-orange-500/20 transition-all duration-300 flex flex-col h-full hover:-translate-y-1"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-500 to-yellow-500 blur-2xl" />
                            </div>

                            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text group-hover:text-orange-600 transition-colors">
                                {card.title}
                            </h3>
                            <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                                {card.description}
                            </p>

                            {card.listItems && card.listItems.length > 0 && (
                                <div className="mb-8 flex-grow">
                                    {card.listTitle && (
                                        <h4 className="font-bold text-xs uppercase tracking-widest text-orange-600/80 mb-4">
                                            {card.listTitle}
                                        </h4>
                                    )}
                                    <ul className="space-y-3">
                                        {card.listItems.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-base text-muted-foreground/90">
                                                <CheckCircle2 className="h-5 w-5 text-orange-500 mt-0.5 shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {card.footerText && (
                                <div className="mt-auto pt-6 border-t border-dashed border-border">
                                    <p className="text-sm font-semibold text-orange-600 bg-orange-50 dark:bg-orange-950/30 dark:text-orange-400 py-3 px-4 rounded-xl inline-block">
                                        {card.footerText}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
