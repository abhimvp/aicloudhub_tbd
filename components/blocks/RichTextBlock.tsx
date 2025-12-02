import { PortableText } from '@portabletext/react'
import { PortableTextBlock } from '@portabletext/types'

interface RichTextBlockProps {
    content?: PortableTextBlock[]
}

export default function RichTextBlock({ content }: RichTextBlockProps) {
    if (!content) return null

    return (
        <section className="py-8 md:py-12 bg-background">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="prose prose-lg md:prose-xl dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-img:rounded-2xl prose-img:shadow-lg">
                    <PortableText value={content} />
                </div>
            </div>
        </section>
    )
}
