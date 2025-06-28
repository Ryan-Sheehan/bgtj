# Boys Go To Jupiter

Official website for Boys Go To Jupiter - "they say the boys went to jupiter / to drown out the noise of the universe / packed a couple sandwiches and piled in the car / for the boys boys boys it was just the start..."

Built with Astro and Sanity CMS for a fast, content-managed music artist website.

## ✨ Features

- **CMS-Driven Content**: Fully managed through Sanity Studio
- **Dynamic Landing Page**: Drag-and-drop components with Letter Canvas and Full Bleed Images
- **Music Releases**: Support for both traditional releases and Untitled.stream embeds
- **Video Gallery**: YouTube integration with custom styling
- **Show Listings**: Seated.com widget integration with custom theming
- **Mailing List**: Supascribe integration with custom styling
- **Responsive Design**: Mobile-first approach with 14-column grid system
- **Custom Typography**: Smokum, Courier Prime, and EB Garamond font system

## 🏗️ Tech Stack

- **Frontend**: [Astro](https://astro.build) - Static site generator with islands architecture
- **CMS**: [Sanity](https://sanity.io) - Headless CMS with real-time collaboration  
- **Styling**: CSS with custom properties and modern layout techniques
- **Typography**: Google Fonts (Smokum, Courier Prime, EB Garamond)
- **Deployment**: Vercel with server-side rendering
- **Type Safety**: Auto-generated TypeScript types from Sanity schemas

## 🚀 Project Structure

```text
/
├── public/
│   ├── letters/           # Letter canvas image assets
│   ├── fonts/            # Custom font files
│   └── favicon.svg
├── src/
│   ├── components/       # Reusable UI components
│   ├── layouts/          # Page layout templates
│   ├── pages/            # Route pages (index, music, videos, shows, about)
│   ├── lib/              # Sanity client and queries
│   ├── types/            # Auto-generated TypeScript types
│   └── styles/           # Global CSS
├── studio/               # Sanity Studio configuration
│   ├── schemaTypes/      # Content schema definitions
│   └── sanity.config.ts  # Studio configuration
└── package.json
```

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   Create `.env` file with your Sanity credentials:
   ```
   SANITY_STUDIO_PROJECT_ID=your_project_id
   SANITY_STUDIO_DATASET=your_dataset
   SANITY_STUDIO_API_VERSION=2023-05-03
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```
   Site will be available at `http://localhost:4321`

4. **Start Sanity Studio** (in separate terminal):
   ```bash
   cd studio
   npm run dev
   ```
   Studio will be available at `http://localhost:3333`

### Available Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Install dependencies                             |
| `npm run dev`             | Start local dev server at `localhost:4321`      |
| `npm run build`           | Build production site to `./dist/`              |
| `npm run preview`         | Preview build locally before deploying          |
| `npm run types`           | Generate TypeScript types from Sanity schemas   |
| `npm run astro ...`       | Run Astro CLI commands                          |

### Sanity Studio Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `cd studio && npm run dev` | Start Sanity Studio at `localhost:3333`        |
| `npm run types:extract`   | Extract schema from Sanity studio               |
| `npm run types:generate`  | Generate types and copy to main project         |
| `npm run types`           | Full type generation workflow                    |

## 📝 Content Management

### Content Types

- **Landing Page**: Drag-and-drop components (Letter Canvas, Full Bleed Images)
- **Releases**: Music releases with artwork and streaming links, plus Untitled.stream embeds
- **Videos**: YouTube video gallery with custom titles
- **About**: Rich text content with images
- **Settings**: Site-wide settings (mailing list configuration)
- **Store**: External store link management

### TypeScript Types

This project uses auto-generated TypeScript types from Sanity schemas:

- **Generate types**: `npm run types` (run after schema changes)
- **Generated file**: `src/types/sanity.types.ts`
- **Import example**: `import type { LandingPage, Release, Video } from './types/sanity.types'`

All content types use these auto-generated types for full type safety and schema synchronization.

## 🎨 Design System

### Typography Hierarchy
- **Smokum**: Large display titles, headings, event dates
- **Courier Prime**: Interface elements, navigation, buttons, video titles  
- **EB Garamond**: Body text, descriptions, content

### Grid System
- 14-column responsive grid
- Mobile-first approach
- Consistent spacing with `grid-column: 2 / -2` for content areas

### Color System
- CSS custom properties for theming
- Consistent color tokens throughout the application
- Dark/light theme support via CSS variables

## 🚢 Deployment

The site is deployed on Vercel with automatic deployments from the main branch.

### Build Process
1. Astro builds the static site
2. TypeScript types are validated
3. Sanity content is fetched at build time
4. Assets are optimized and deployed

## 📱 Third-Party Integrations

- **Supascribe**: Mailing list signup forms
- **Seated.com**: Concert listings and ticket sales
- **Untitled.stream**: Music streaming embeds
- **YouTube**: Video content embedding

## 🤝 Contributing

1. Make changes in a feature branch
2. Ensure TypeScript types are up to date: `npm run types`
3. Test the build: `npm run build`
4. Submit a pull request

## 📄 License

All rights reserved - Boys Go To Jupiter
