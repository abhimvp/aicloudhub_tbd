import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'

interface CTABlockProps {
    heading?: string
    description?: string
    buttonText?: string
    buttonLink?: string
}

export default function CTABlock({ heading, description, buttonText, buttonLink }: CTABlockProps) {
    return (
        <section className="py-8 md:py-12 relative overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-orange-600 to-amber-600">
                {/* Pattern Overlay */}
                <div className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                        backgroundSize: '32px 32px'
                    }}
                />
                {/* Glow Effects */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/10 to-transparent" />
                <div className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 backdrop-blur-sm border border-white/20 mb-8">
                    <Sparkles className="w-4 h-4 text-yellow-300" />
                    <span className="text-sm font-semibold tracking-wide uppercase">Ready to transform?</span>
                </div>

                {heading && (
                    <h2 className="text-4xl md:text-6xl font-black mb-8 text-white tracking-tight leading-tight drop-shadow-sm">
                        {heading}
                    </h2>
                )}
                {description && (
                    <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
                        {description}
                    </p>
                )}
                {buttonText && buttonLink && (
                    <Link href={buttonLink}>
                        <Button
                            size="lg"
                            className="bg-white text-orange-600 hover:bg-white/90 text-lg px-10 py-8 rounded-full font-bold shadow-2xl shadow-black/20 hover:shadow-black/30 hover:-translate-y-1 transition-all duration-300 group"
                        >
                            {buttonText}
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </Button>
                    </Link>
                )}
            </div>
        </section>
    )
}
