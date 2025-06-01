import { PortableText } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'

export default function AboutContent({ value }: { value: PortableTextBlock[] }) {
  return <PortableText value={value} />
} 