export function requireEnv(name: string): string {
    const value = process.env[name]
    if (typeof value === 'undefined') {
      console.warn(`[WARN] Missing required env var: ${name}`)
      return ''
    }
    return value
  }