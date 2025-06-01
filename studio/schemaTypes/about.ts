import { FiUser } from 'react-icons/fi'

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
      of: [
        { type: 'block' },
        { type: 'image' },
      ],
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