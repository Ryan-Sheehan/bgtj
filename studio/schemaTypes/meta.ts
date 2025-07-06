import { FiTag } from 'react-icons/fi'
import type { Rule } from '@sanity/types'

export default {
  name: 'meta',
  type: 'object',
  title: 'Meta',
  icon: FiTag,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Meta Title',
      description: 'Text that appears in the browser tab and social cards',
      validation: (Rule: Rule) => Rule.max(60),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Meta Description',
      description: 'Brief description used for SEO and social sharing',
      rows: 3,
      validation: (Rule: Rule) => Rule.max(160),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Meta Image',
      description: 'Image used for social sharing (recommended 1200x630)',
      options: { hotspot: true },
    },
  ],
  preview: {
    select: { title: 'title', media: 'image' },
    prepare(value: { title?: string; media?: any }) {
      return {
        title: value.title || 'Meta',
        subtitle: value.title ? 'Custom meta' : 'Default meta',
        media: value.media,
      }
    },
  },
}