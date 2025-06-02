import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

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