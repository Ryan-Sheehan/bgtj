// studio/utils/preparePreview.ts

interface PreviewSelection {
    title?: string
    slug?: string
  }

export const preparePreview = (basePath: string) => {
    return (selection: PreviewSelection) => {
      const title = selection.title || '(Untitled)'
      const slug = selection.slug || ''
      return {
        title,
        subtitle: `${basePath}/${slug}`,
      }
    }
  }