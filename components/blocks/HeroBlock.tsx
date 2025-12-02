import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import Breadcrumbs from '@/components/ui/Breadcrumbs'

interface HeroBlockProps {
    title: string
    subtitle?: string
    description?: string
    backgroundImage?: SanityImageSource
    ctas?: Array<{
        label: string
        link: string
        variant: 'primary' | 'secondary'
    }>
}

export default function HeroBlock({ title, subtitle, description, backgroundImage, ctas }: HeroBlockProps) {
    return (
        <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden bg-black text-white pt-20">
            {/* Background Image */}
            {backgroundImage && (
                <div className="absolute inset-0 z-0">
                    <Image
                        src={urlFor(backgroundImage).url()}
                        alt={title}
                        fill
                        className="object-cover opacity-50"
                        priority
                    />
                    {/* Main Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                    {/* Top Scrim for Navbar Visibility */}
                    <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/90 via-black/50 to-transparent z-10" />
                </div>
            )}

            <div className="relative z-20 container mx-auto px-4 text-center">
                {/* Breadcrumbs */}
                <div className="flex justify-center mb-8">
                    <Breadcrumbs
                        items={[
                            { label: 'Services', href: '/#services' },
                            { label: title }
                        ]}
                    />
                </div>

                {subtitle && (
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-400 text-sm font-medium mb-6 backdrop-blur-sm border border-blue-500/30">
                        {subtitle}
                    </span>
                )}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400 leading-tight">
                    {title}
                </h1>
                {description && (
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
                        {description}
                    </p>
                )}

                {ctas && ctas.length > 0 && (
                    <div className="flex flex-wrap justify-center gap-4">
                        {ctas.map((cta, idx) => (
                            <Link key={idx} href={cta.link}>
                                <Button
                                    variant={cta.variant === 'secondary' ? 'outline' : 'default'}
                                    size="lg"
                                    className={`rounded-full px-8 py-6 text-base font-semibold transition-all duration-300 ${cta.variant === 'primary'
                                            ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-1'
                                            : 'border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
                                        }`}
                                >
                                    {cta.label}
                                </Button>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}
