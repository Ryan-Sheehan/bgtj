import { FiSettings } from 'react-icons/fi'

export default {
  name: 'settings',
  type: 'document',
  title: 'Settings',
  icon: FiSettings,
  fields: [
    {
      name: 'mailingList',
      type: 'object',
      title: 'Mailing List',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Newsletter Title',
          description: 'The main heading for the newsletter signup',
          initialValue: 'Stay Updated',
        },
        {
          name: 'description',
          type: 'text',
          title: 'Newsletter Description',
          description: 'The description text below the title',
          initialValue: 'Get the latest news and updates from Boys Go To Jupiter',
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Settings',
      }
    },
  },
} 