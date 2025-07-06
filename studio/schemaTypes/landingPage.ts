import { FiHome } from 'react-icons/fi'
import type { Rule } from '@sanity/types'

export default {
  name: 'landingPage',
  type: 'document',
  title: 'Landing Page',
  icon: FiHome,
  fields: [
    {
      name: 'meta',
      type: 'meta',
      title: 'Page Meta',
      description: 'Override global SEO metadata for this page',
      options: { collapsible: true, collapsed: true },
    },
    {
      name: 'components',
      type: 'array',
      title: 'Page Components',
      description: 'Drag and drop to reorder components on the landing page',
      of: [
        {
          type: 'object',
          name: 'letterCanvas',
          title: 'Letter Canvas',
          icon: FiHome,
          fields: [
            {
              name: 'enabled',
              type: 'boolean',
              title: 'Enable Letter Canvas',
              description: 'Show the interactive letter canvas component',
              initialValue: true,
            },
          ],
          preview: {
            prepare() {
              return {
                title: 'Letter Canvas',
                subtitle: 'Interactive letter component',
              }
            },
          },
        },
        {
          type: 'object',
          name: 'fullBleedImage',
          title: 'Full Bleed Image',
          icon: FiHome,
          fields: [
            {
              name: 'image',
              type: 'image',
              title: 'Image',
              description: 'Image that spans the full width of the page',
              validation: (Rule: Rule) => Rule.required(),
              options: {
                hotspot: true,
              },
            },
            {
              name: 'alt',
              type: 'string',
              title: 'Alt Text',
              description: 'Alternative text for accessibility',
              validation: (Rule: Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              media: 'image',
              title: 'alt',
            },
            prepare(value: { media: any; title: string }) {
              return {
                title: 'Full Bleed Image',
                subtitle: value.title || 'No alt text',
                media: value.media,
              }
            },
          },
        },
        {
          type: 'object',
          name: 'insetImage',
          title: 'Inset Image',
          icon: FiHome,
          fields: [
            {
              name: 'image',
              type: 'image',
              title: 'Image',
              description: 'Inset image displayed within page content width',
              validation: (Rule: Rule) => Rule.required(),
              options: {
                hotspot: true,
              },
            },
            {
              name: 'alt',
              type: 'string',
              title: 'Alt Text',
              description: 'Alternative text for accessibility',
              validation: (Rule: Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              media: 'image',
              title: 'alt',
            },
            prepare(value: { media: any; title: string }) {
              return {
                title: 'Inset Image',
                subtitle: value.title || 'No alt text',
                media: value.media,
              }
            },
          },
        },
      ],
      validation: (Rule: Rule) =>
        Rule.custom((components: any[]) => {
          if (!components) return true
          
          // Check that Letter Canvas appears at most once
          const letterCanvasCount = components.filter(
            (component) => component._type === 'letterCanvas'
          ).length
          
          if (letterCanvasCount > 1) {
            return 'Letter Canvas can only appear once on the page'
          }
          
          return true
        }),
    },
    // Orderable plugin field
    {
      name: 'orderRank',
      type: 'string',
      hidden: true,
      initialValue: 'first',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Landing Page',
      }
    },
  },
} 