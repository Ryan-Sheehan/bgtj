import type { Rule } from '@sanity/types'
import { FiPlayCircle } from 'react-icons/fi'

export default {
  name: 'video',
  type: 'document',
  title: 'Video',
  icon: FiPlayCircle,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'youtubeUrl',
      type: 'url',
      title: 'YouTube Link',
      validation: (Rule: Rule) => Rule.uri({ scheme: ['https'] })
    },
    {
      name: 'orderRank',
      type: 'string',
      hidden: true,
      initialValue: 'last',
    },
  ]
} 