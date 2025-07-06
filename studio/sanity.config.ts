import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import deskStructure from './deskStructure'
import { requireEnv } from './utils/requireEnv'

export default defineConfig({
  name: 'default',
  title: 'Boys Go To Jupiter',

  projectId: requireEnv('SANITY_STUDIO_PROJECT_ID'),
  dataset: requireEnv('SANITY_STUDIO_DATASET'),

  plugins: [
    structureTool({ structure: deskStructure }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
