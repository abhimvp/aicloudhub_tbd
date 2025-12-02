import { revalidatePath } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'
import { parseBody } from 'next-sanity/webhook'

export async function POST(req: NextRequest) {
    try {
        const { isValidSignature, body } = await parseBody<{
            _type: string
            slug?: { current: string }
        }>(req, process.env.SANITY_REVALIDATE_SECRET)

        if (!isValidSignature) {
            return new Response('Invalid Signature', { status: 401 })
        }

        if (!body?._type) {
            return new Response('Bad Request', { status: 400 })
        }

        // Revalidate the specific service page
        if (body._type === 'service' && body.slug?.current) {
            revalidatePath(`/services/${body.slug.current}`)
            revalidatePath('/') // Revalidate homepage as well
        }

        // Revalidate blog posts
        if (body._type === 'blogPost') {
            revalidatePath('/blogs')
            revalidatePath('/') // Update homepage (Recent Blogs)
            if (body.slug?.current) {
                revalidatePath(`/blogs/${body.slug.current}`)
            }
        }

        // Revalidate job postings
        if (body._type === 'jobPosting') {
            revalidatePath('/careers')
            if (body.slug?.current) {
                revalidatePath(`/careers/${body.slug.current}`)
            }
        }

        return NextResponse.json({ body })
    } catch (err: unknown) {
        console.error(err)
        const message = err instanceof Error ? err.message : 'Unknown error';
        return new Response(message, { status: 500 })
    }
}
