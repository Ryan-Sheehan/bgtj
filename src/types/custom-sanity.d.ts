export interface InsetImageBlock {
  _type: 'insetImage';
  _key: string;
  image?: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
    };
    _type: 'image';
  };
  alt?: string;
}