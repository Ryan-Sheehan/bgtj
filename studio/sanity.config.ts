import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import deskStructure from './deskStructure'

const projectId = import.meta.env.SANITY_STUDIO_PROJECT_ID
const dataset = import.meta.env.SANITY_STUDIO_DATASET

if (!projectId) {
  throw new Error('Missing SANITY_STUDIO_PROJECT_ID environment variable')
}

if (!dataset) {
  throw new Error('Missing SANITY_STUDIO_DATASET environment variable')
}

export default defineConfig({
  name: 'default',
  title: 'Boys Go To Jupiter',

  projectId,
  dataset,

  plugins: [
    structureTool({ structure: deskStructure }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
