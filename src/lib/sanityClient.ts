import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { aboutQuery, storeQuery } from './queries'

const projectId = import.meta.env.SANITY_STUDIO_PROJECT_ID
const dataset = import.meta.env.SANITY_STUDIO_DATASET
const apiVersion = import.meta.env.SANITY_STUDIO_API_VERSION

export const getClient = (previewToken?: string) =>
  createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: !previewToken, // disable CDN for previews
    ...(previewToken && { token: previewToken }),
    perspective: previewToken ? 'previewDrafts' : 'published',
  })

export const urlFor = (source: any) =>
  imageUrlBuilder({ projectId, dataset }).image(source)

export async function getAbout() {
  const client = getClient()
  return client.fetch(aboutQuery)
}

export async function getStore() {
  const client = getClient()
  return client.fetch(storeQuery)
}