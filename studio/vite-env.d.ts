/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SANITY_STUDIO_PROJECT_ID?: string
  readonly VITE_SANITY_STUDIO_DATASET?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
} 