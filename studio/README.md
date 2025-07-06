# Boys Go To Jupiter – Sanity Studio

This folder contains the content editing studio for https://boysgotojupiter.band. It is powered by **Sanity v3** and controls all site content (landing page, releases, videos, shows, settings, etc.).

## Local Development

```bash
# install dependencies
cd studio
npm install

# start the studio
pm run dev   # http://localhost:3333
```

## TypeScript Types

After updating schemas, regenerate types consumed by the Astro front-end:

```bash
# from the repository root
npm run types
```

## Deployment (Vercel)

The Studio is deployed as a separate Vercel project and served at:

```
https://admin.boysgotojupiter.band
```

Key settings (already committed):

| Setting          | Value         | Source                 |
| ---------------- | ------------- | ---------------------- |
| Root directory   | `studio`      | Vercel project setting |
| Build command    | `npm run build` | `studio/package.json`  |
| Output directory | `dist`        | `studio/vercel.json`   |

No environment variables are required for the static build.

### Optional
If you need authenticated features (e.g. querying drafts in Vision), add:

- `SANITY_AUTH_TOKEN` – a **read** or **write** token from your Sanity project

## CORS configuration for deployment

When deploying the Studio to Vercel under the domain `admin.boysgotojupiter.band`, you need to allow this origin in your Sanity project settings.

If you have the Sanity CLI installed, you can add the origin via command line:

```bash
# Run from the `studio` directory
sanity cors add https://admin.boysgotojupiter.band --credentials

# (Optional) allow local development
sanity cors add http://localhost:3333 --credentials
```

Alternatively, navigate to **Project settings → API → CORS Origins** in the Sanity manage UI and add the same URLs, ensuring **Allow credentials** is enabled.
