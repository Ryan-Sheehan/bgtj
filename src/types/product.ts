export type Product = {
  _id: string;
  _type: 'product';
  _createdAt?: string;
  _updatedAt?: string;
  _rev?: string;
  title?: string;
  photo?: {
    asset?: {
      _ref: string;
      _type: 'reference';
    };
    _type: 'image';
  };
  externalLink?: string;
  orderRank?: string;
};