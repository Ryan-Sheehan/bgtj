/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly SANITY_PROJECT_ID: string;
    readonly SANITY_DATASET: string;
    readonly SANITY_API_VERSION: string;
    readonly SANITY_PREVIEW_TOKEN: string;
    readonly SANITY_PREVIEW_SECRET: string;

    // client-exposed
    readonly PUBLIC_SANITY_PROJECT_ID: string;
 }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }