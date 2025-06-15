import { FiShoppingBag } from 'react-icons/fi'

export default {
  name: 'store',
  type: 'document',
  title: 'Store',
  icon: FiShoppingBag,
  fields: [
    {
      name: 'storeLink',
      type: 'url',
      title: 'Store Link',
      description: 'The URL where the store link should navigate to',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Store',
      }
    },
  },
} 