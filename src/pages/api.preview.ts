import type { APIRoute } from 'astro'

export const prerender = false

export const GET: APIRoute = async ({ url, redirect }) => {
  const secret = url.searchParams.get('secret')
  const slug = url.searchParams.get('slug')

  if (secret !== import.meta.env.SANITY_STUDIO_PREVIEW_SECRET) {
    return new Response('Invalid preview secret', { status: 401 })
  }

  if (!slug) {
    return new Response('Missing slug', { status: 400 })
  }

  return redirect(`/preview/${slug}`)
}