import { PortableText, PortableTextComponents } from '@portabletext/react'
import { PortableTextBlock } from '@portabletext/types'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'

const components: PortableTextComponents = {
    types: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        image: ({ value }: any) => {
            if (!value?.asset?._ref) {
                return null
            }
            return (
                <div className="relative w-full h-96 my-8 rounded-xl overflow-hidden">
                    <Image
                        src={urlFor(value).url()}
                        alt={value.alt || 'Blog Image'}
                        fill
                        className="object-cover"
                    />
                </div>
            )
        },
    },
    block: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        h1: ({ children }: any) => (
            <h1 className="text-3xl md:text-4xl font-bold mt-12 mb-6 text-foreground">
                {children}
            </h1>
        ),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        h2: ({ children }: any) => (
            <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-5 text-foreground">
                {children}
            </h2>
        ),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        h3: ({ children }: any) => (
            <h3 className="text-xl md:text-2xl font-bold mt-8 mb-4 text-foreground">
                {children}
            </h3>
        ),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        h4: ({ children }: any) => (
            <h4 className="text-lg md:text-xl font-bold mt-6 mb-3 text-foreground">
                {children}
            </h4>
        ),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        normal: ({ children }: any) => (
            <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                {children}
            </p>
        ),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        blockquote: ({ children }: any) => (
            <blockquote className="border-l-4 border-primary pl-6 italic text-xl my-8 text-foreground/80">
                {children}
            </blockquote>
        ),
    },
    list: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        bullet: ({ children }: any) => (
            <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-muted-foreground">
                {children}
            </ul>
        ),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        number: ({ children }: any) => (
            <ol className="list-decimal pl-6 mb-6 space-y-2 text-lg text-muted-foreground">
                {children}
            </ol>
        ),
    },
    marks: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        link: ({ children, value }: any) => {
            const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
            return (
                <Link
                    href={value.href}
                    rel={rel}
                    className="text-primary hover:underline font-medium"
                >
                    {children}
                </Link>
            )
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        code: ({ children }: any) => (
            <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">
                {children}
            </code>
        ),
    },
}

export function PortableTextRenderer({ value }: { value: PortableTextBlock[] }) {
    return (
        <div className="prose prose-lg dark:prose-invert max-w-none">
            <PortableText value={value} components={components} />
        </div>
    )
}
