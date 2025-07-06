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
    {
      name: 'meta',
      type: 'meta',
      title: 'Global Meta',
      description: 'Default SEO metadata applied site-wide',
      options: { collapsible: true, collapsed: true },
    },
    {
      name: 'socialLinks',
      type: 'socialLinks',
      title: 'Social Links',
      description: 'Links to your social media profiles',
      options: { collapsible: true, collapsed: true },
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