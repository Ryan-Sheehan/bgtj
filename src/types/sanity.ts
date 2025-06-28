// Types for data returned from Sanity queries
// These match the structure of data fetched in your queries

export interface SanityImageAsset {
  _ref: string;
  _type: 'reference';
}

export interface SanityImage {
  _type: 'image';
  asset: SanityImageAsset;
}

// Video type based on videosQuery
export interface Video {
  _id: string;
  title: string;
  youtubeUrl: string;
}

// Release types based on releasesQuery
export interface BaseRelease {
  _id: string;
  type: 'release' | 'untitled';
}

export interface UntitledRelease extends BaseRelease {
  type: 'untitled';
  embedCode: string;
}

export interface MusicRelease extends BaseRelease {
  type: 'release';
  title: string;
  artwork: SanityImage;
  linkAggregator: string;
}

export type Release = UntitledRelease | MusicRelease;

// Post type (if used)
export interface Post {
  title: string;
  slug: {
    current: string;
  };
  body: any; // This would be PortableText content
}

// Settings type
export interface Settings {
  mailingList?: {
    title?: string;
    description?: string;
  };
} 