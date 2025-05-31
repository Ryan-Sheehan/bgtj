export const postQuery = `*[_type == "post" && slug.current == $slug][0] {
    title,
    slug,
    body
  }`

export const videosQuery = `*[_type == "video"] | order(_createdAt desc) {
  _id,
  title,
  youtubeUrl
}`

export const releasesQuery = `*[_type == 'release'] | order(orderRank) {
  _id,
  type,
  embedCode,
  title,
  artwork,
  linkAggregator
}`
  