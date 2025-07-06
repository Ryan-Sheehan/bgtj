import {defineCliConfig} from 'sanity/cli'
import { requireEnv } from './utils/requireEnv'

export default defineCliConfig({
  api: {
    projectId: requireEnv('SANITY_PROJECT_ID'),
    dataset: requireEnv('SANITY_DATASET'),
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
})
