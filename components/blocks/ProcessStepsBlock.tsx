interface Step {
    title: string
    description: string
}

interface ProcessStepsBlockProps {
    heading?: string
    steps?: Step[]
}

export default function ProcessStepsBlock({ heading, steps }: ProcessStepsBlockProps) {
    if (!steps || steps.length === 0) return null

    return (
        <section className="py-8 md:py-12 bg-background relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto px-4">
                {heading && (
                    <h2 className="text-3xl md:text-5xl font-bold mb-20 text-center text-foreground tracking-tight">
                        {heading}
                    </h2>
                )}

                <div className="relative max-w-5xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-border to-transparent md:left-1/2 md:-translate-x-1/2" />

                    <div className="space-y-12 md:space-y-16">
                        {steps.map((step, idx) => (
                            <div key={idx} className="relative flex flex-col md:flex-row gap-8 md:gap-0 items-start md:items-center group">

                                {/* Number Circle */}
                                <div className="absolute left-0 top-0 md:top-1/2 md:-translate-y-1/2 md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-background border-4 border-primary/20 flex items-center justify-center z-10 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
                                    <div className="w-full h-full rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                                        {idx + 1}
                                    </div>
                                </div>

                                {/* Content Left (Even indices on desktop) */}
                                <div className="hidden md:block md:w-1/2 md:pr-16 md:text-right">
                                    {idx % 2 === 0 && (
                                        <div className={`group-hover:-translate-x-2 transition-transform duration-300 flex flex-col justify-center min-h-[40px] ${!step.description ? 'md:items-end' : ''}`}>
                                            <h3 className={`text-2xl font-bold text-foreground group-hover:text-primary transition-colors ${step.description ? 'mb-3' : 'mb-0'}`}>{step.title}</h3>
                                            {step.description && <p className="text-muted-foreground text-lg leading-relaxed">{step.description}</p>}
                                        </div>
                                    )}
                                </div>

                                {/* Content Right (Odd indices on desktop) */}
                                <div className="hidden md:block md:pl-16 md:w-1/2">
                                    {idx % 2 !== 0 && (
                                        <div className={`group-hover:translate-x-2 transition-transform duration-300 flex flex-col justify-center min-h-[40px] ${!step.description ? 'md:items-start' : ''}`}>
                                            <h3 className={`text-2xl font-bold text-foreground group-hover:text-primary transition-colors ${step.description ? 'mb-3' : 'mb-0'}`}>{step.title}</h3>
                                            {step.description && <p className="text-muted-foreground text-lg leading-relaxed">{step.description}</p>}
                                        </div>
                                    )}
                                </div>

                                {/* Mobile Content (Always show if hidden by desktop logic) */}
                                <div className="pl-16 md:hidden">
                                    <h3 className={`text-xl font-bold text-foreground ${step.description ? 'mb-2' : 'mb-0'}`}>{step.title}</h3>
                                    {step.description && <p className="text-muted-foreground leading-relaxed">{step.description}</p>}
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
