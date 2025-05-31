import { createClient } from '@sanity/client'

const projectId = import.meta.env.SANITY_STUDIO_PROJECT_ID
const dataset = import.meta.env.SANITY_STUDIO_DATASET
const apiVersion = import.meta.env.SANITY_STUDIO_API_VERSION

export const getClient = (previewToken?: string) =>
  createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: !previewToken, // disable CDN for previews
    token: previewToken,
    perspective: previewToken ? 'previewDrafts' : 'published',
  })