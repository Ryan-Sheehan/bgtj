import type { Rule } from '@sanity/types'
import { FiShoppingBag } from 'react-icons/fi'

export default {
  name: 'product',
  type: 'document',
  title: 'Shop Product',
  icon: FiShoppingBag,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'photo',
      type: 'image',
      title: 'Product Photo',
      options: {
        hotspot: true,
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'externalLink',
      type: 'url',
      title: 'External Link',
      validation: (Rule: Rule) => Rule.uri({ scheme: ['http', 'https'] }).required(),
    },
    // Orderable plugin field
    {
      name: 'orderRank',
      type: 'string',
      hidden: true,
      initialValue: 'last',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'photo',
    },
    prepare({ title, media }: { title: string; media: any }) {
      return {
        title: title || 'Shop Product',
        media,
      }
    },
  },
}