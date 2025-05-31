import React from 'react'
import { set, unset } from 'sanity'
import type { StringInputProps } from 'sanity'
import { TextInput, Stack } from '@sanity/ui'

export default function EmbedCodeInput(props: StringInputProps) {
  const { value, onChange, elementProps } = props

  function extractCode(input: string) {
    // Try to match src="https://untitled.stream/embed/CODE"
    const srcMatch = input.match(/src=["']https:\/\/untitled\.stream\/embed\/([\w-]{8,})/i)
    if (srcMatch) return srcMatch[1]

    // Try to match a direct URL
    const urlMatch = input.match(/https:\/\/untitled\.stream\/embed\/([\w-]{8,})/i)
    if (urlMatch) return urlMatch[1]

    // If just the code is entered
    const codeMatch = input.match(/^[\w-]{8,}$/)
    if (codeMatch) return codeMatch[0]

    return ''
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const input = e.target.value
    const code = extractCode(input)
    if (code) {
      onChange(set(code))
    } else {
      onChange(unset())
    }
  }

  // Remove onChange from elementProps to avoid duplicate prop
  const { onChange: _ignored, ...safeElementProps } = elementProps || {}

  return (
    <Stack space={2}>
      <TextInput
        value={String(value ?? '')}
        onChange={handleChange}
        placeholder="Paste code, URL, or iframe snippet"
        spellCheck={false}
        {...safeElementProps}
      />
    </Stack>
  )
} 