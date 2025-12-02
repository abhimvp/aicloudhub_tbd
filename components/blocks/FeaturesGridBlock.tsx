import { ArrowRight } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface Feature {
    title: string
    description: string
    link?: string
    linkLabel?: string
}

interface FeaturesGridBlockProps {
    heading?: string
    description?: string
    features?: Feature[]
}

export default function FeaturesGridBlock({ heading, description, features }: FeaturesGridBlockProps) {
    return (
        <section className="py-8 md:py-12 bg-muted/30 relative">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features?.map((feature, idx) => {
                        return (
                            <Card key={idx} className="group bg-background border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 h-full flex flex-col">
                                <CardHeader className="pb-4">
                                    <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow flex flex-col">
                                    <p className="text-muted-foreground leading-relaxed mb-6 text-base flex-grow">
                                        {feature.description}
                                    </p>
                                    {feature.link && (
                                        <div className="mt-auto pt-4">
                                            <a href={feature.link} className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors group/link">
                                                <span className="border-b border-primary/30 group-hover/link:border-primary transition-colors">
                                                    {feature.linkLabel || 'Learn More'}
                                                </span>
                                                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                                            </a>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
