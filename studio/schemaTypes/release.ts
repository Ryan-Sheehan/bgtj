import { Rule } from 'sanity'
import { FiMusic } from 'react-icons/fi'
import EmbedCodeInput from '../components/EmbedCodeInput'

export default {
  name: 'release',
  type: 'document',
  title: 'Release',
  icon: FiMusic,
  fields: [
    {
      name: 'type',
      type: 'string',
      title: 'Release Type',
      options: {
        list: [
          { title: 'Release', value: 'release' },
          { title: '[untitled] Embed', value: 'untitled' },
        ],
        layout: 'radio',
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    // [untitled] Embed fields
    {
      name: 'embedCode',
      type: 'string',
      title: '[untitled] Embed Code or URL',
      description: 'Paste the full iframe snippet, full URL, or just the code (e.g. Rf5mogONBgsP)',
      hidden: (params: { parent: any }) => (params.parent as any)?.type !== 'untitled',
      components: {
        input: EmbedCodeInput
      },
      validation: (Rule: Rule) =>
        Rule.custom((val, context) => {
          if ((context.parent as any)?.type === 'untitled') {
            if (!val) return 'Embed code or URL is required for Untitled embeds.'
            if (!/^[\w-]{8,}$/i.test(String(val).trim())) return `Could not extract embed code from "${val}". Please check your input.`
            return true
          }
          return true
        }),
    },
    // Release fields
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      hidden: (params: { parent: any }) => (params.parent as any)?.type !== 'release',
      validation: (Rule: Rule) =>
        Rule.custom((val, context) => {
          if ((context.parent as any)?.type === 'release' && !val) {
            return 'Title is required for releases.'
          }
          return true
        }),
    },
    {
      name: 'artwork',
      type: 'image',
      title: 'Album Artwork',
      hidden: (params: { parent: any }) => (params.parent as any)?.type !== 'release',
      validation: (Rule: Rule) =>
        Rule.custom((val, context) => {
          if ((context.parent as any)?.type === 'release' && !val) {
            return 'Artwork is required for releases.'
          }
          return true
        }),
    },
    {
      name: 'linkAggregator',
      type: 'url',
      title: 'Link Aggregator URL',
      hidden: (params: { parent: any }) => (params.parent as any)?.type !== 'release',
      validation: (Rule: Rule) =>
        Rule.custom((val, context) => {
          if ((context.parent as any)?.type === 'release') {
            if (!val) return 'Link Aggregator URL is required for releases.'
            if (!/^https?:\/\//.test(String(val))) return 'Link Aggregator URL must be a valid URL.'
          }
          return true
        }),
    },
    {
      name: 'preRelease',
      type: 'boolean',
      title: 'Pre-release?',
      hidden: (params: { parent: any }) => (params.parent as any)?.type !== 'release',
      initialValue: false,
    },
    {
      name: 'releaseDate',
      type: 'date',
      title: 'Release Date',
      options: { dateFormat: 'YYYY-MM-DD' },
      hidden: (params: { parent: any }) => (params.parent as any)?.type !== 'release' || !(params.parent as any)?.preRelease,
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
      type: 'type',
      title: 'title',
    },
    prepare(value: Record<string, any>) {
      return {
        title: value.type === 'untitled' ? '[untitled] embed' : value.title || 'Release',
      }
    },
  },
} 