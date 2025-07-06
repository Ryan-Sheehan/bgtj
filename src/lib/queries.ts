export const postQuery = `*[_type == "post" && slug.current == $slug][0] {
    title,
    slug,
    body
  }`

export const videosQuery = `*[_type == "video"] | order(orderRank asc) {
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

export const aboutQuery = `*[_type == "about"][0] {
  content
}`

export const storeQuery = `*[_type == "store"][0] {
  storeLink
}`

export const settingsQuery = `*[_type == "settings" && _id == "settings"][0] {
  mailingList {
    title,
    description
  },
  meta {
    title,
    description,
    image
  }
}`

export const landingPageQuery = `*[_type == "landingPage" && _id == "landingPage"][0] {
  meta {
    title,
    description,
    image
  },
  components[] {
    _type,
    enabled,
    image,
    alt
  }
}`
  