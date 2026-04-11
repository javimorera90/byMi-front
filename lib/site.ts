/** Canonical site URL for metadata and OG tags. Set in production via NEXT_PUBLIC_SITE_URL. */
export function getSiteUrl(): string {
  const env = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  if (env) {
    try {
      const u = new URL(env)
      return u.origin
    } catch {
      /* invalid */
    }
  }
  return 'http://localhost:3000'
}
