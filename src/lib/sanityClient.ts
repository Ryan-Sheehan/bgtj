import { createClient } from '@sanity/client'

const projectId = import.meta.env.SANITY_PROJECT_ID
const dataset = import.meta.env.SANITY_DATASET
const apiVersion = import.meta.env.SANITY_API_VERSION

export const getClient = (previewToken?: string) =>
  createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: !previewToken, // disable CDN for previews
    token: previewToken,
    perspective: previewToken ? 'previewDrafts' : 'published',
  })