import { FiUser } from 'react-icons/fi'
import { Rule } from '@sanity/types'

export default {
  name: 'about',
  type: 'document',
  title: 'About',
  icon: FiUser,
  fields: [
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      description: 'The main content for the about page',
      of: [
        { 
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'Quote', value: 'blockquote'}
          ]
        },
        { 
          type: 'image',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            }
          ]
        }
      ],
      validation: (rule: Rule) => rule.required()
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'About',
      }
    },
  },
} 