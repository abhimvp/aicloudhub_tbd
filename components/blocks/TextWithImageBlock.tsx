import { PortableText } from '@portabletext/react'
import { PortableTextBlock } from '@portabletext/types'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

interface TextWithImageBlockProps {
    heading?: string
    text?: PortableTextBlock[]
    image?: SanityImageSource
    imagePosition?: 'left' | 'right'
}

export default function TextWithImageBlock({ heading, text }: TextWithImageBlockProps) {
    return (
        <section className="py-8 md:py-12 bg-background">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="space-y-6">
                    {heading && (
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-6">
                            {heading}
                        </h2>
                    )}
                    {text && (
                        <div className="prose prose-lg dark:prose-invert text-muted-foreground leading-relaxed max-w-none">
                            <PortableText value={text} />
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
