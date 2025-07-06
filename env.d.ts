/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly SANITY_STUDIO_PROJECT_ID: string;
    readonly SANITY_STUDIO_DATASET: string;
    readonly SANITY_STUDIO_API_VERSION: string;
    readonly SANITY_STUDIO_PREVIEW_TOKEN: string;
    readonly SANITY_STUDIO_PREVIEW_SECRET: string;
    readonly ASTRO_DEV_TOOLBAR_ENABLED: string;
    // client-exposed
    readonly PUBLIC_SANITY_STUDIO_PROJECT_ID: string;
 }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }