// studio/schemaTypes/post.ts

import { preparePreview } from "../utils/preparePreview";

export default {
    name: 'post',
    type: 'document',
    title: 'Post',
    fields: [
      {
        name: 'title',
        type: 'string',
      },
      {
        name: 'slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
      },
      {
        name: 'body',
        type: 'array',
        of: [{ type: 'block' }],
      },
      {
        name: 'meta',
        type: 'meta',
        title: 'Page Meta',
        description: 'Override global SEO metadata for this post',
        options: { collapsible: true, collapsed: true },
      },
    ],
    preview: {
      select: { title: 'title', slug: 'slug.current' },
      prepare: preparePreview('/preview'),
    },
  }