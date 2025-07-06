export default {
  name: 'socialLinks',
  type: 'object',
  title: 'Social Links',
  description: 'Links to your social media profiles',
  fields: [
    {
      name: 'instagram',
      type: 'url',
      title: 'Instagram',
      validation: (Rule: any) => Rule.uri({ scheme: ['http', 'https'] }),
    },
    {
      name: 'tiktok',
      type: 'url',
      title: 'TikTok',
      validation: (Rule: any) => Rule.uri({ scheme: ['http', 'https'] }),
    },
    {
      name: 'youtube',
      type: 'url',
      title: 'YouTube',
      validation: (Rule: any) => Rule.uri({ scheme: ['http', 'https'] }),
    },
    {
      name: 'spotify',
      type: 'url',
      title: 'Spotify',
      validation: (Rule: any) => Rule.uri({ scheme: ['http', 'https'] }),
    },
  ],
  options: {
    collapsible: true,
    collapsed: true,
  },
};