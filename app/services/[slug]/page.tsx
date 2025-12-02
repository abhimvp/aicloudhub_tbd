import { client } from '@/sanity/lib/client'
import { ServiceComponents } from '@/components/services/ServiceComponents'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { urlFor } from '@/sanity/lib/image'

export const revalidate = 3600 // ISR: Revalidate every hour

interface ServicePageProps {
    params: Promise<{ slug: string }>
}

interface ServiceBlock {
    _type: string
    _key: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any
}

// Fetch service data
async function getService(slug: string) {
    const query = `*[_type == "service" && slug.current == $slug][0] {
    title,
    "slug": slug.current,
    category,
    homepageInfo,
    content,
    seo
  }`
    return await client.fetch(query, { slug })
}

// Generate Metadata
export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
    const { slug } = await params
    const service = await getService(slug)

    if (!service) {
        return {
            title: 'Service Not Found',
        }
    }

    return {
        title: service.seo?.metaTitle || `${service.title} | Future AI Cloud Hub`,
        description: service.seo?.metaDescription || service.homepageInfo?.summary,
        openGraph: {
            images: service.seo?.ogImage ? [urlFor(service.seo.ogImage).url()] : [],
        },
    }
}

export default async function ServicePage({ params }: ServicePageProps) {
    const { slug } = await params
    const service = await getService(slug)

    if (!service) {
        notFound()
    }

    return (
        <main className="min-h-screen bg-background">
            {service.content?.map((block: ServiceBlock) => {
                const Component = ServiceComponents[block._type]
                if (!Component) {
                    console.warn(`Component not found for block type: ${block._type}`)
                    return null
                }
                return <Component key={block._key} {...block} />
            })}
        </main>
    )
}
