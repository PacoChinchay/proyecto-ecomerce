export interface Product {
  description: string;
  images: string[];
  inStock: number;
  price: number;
  sizes: size[];
  slug: string;
  tags: string[];
  title: string;
  type: ValidType;
  gender: Category;
}

export type Category = 'men'|'women'|'kid'|'unisex';
export type size = 'XS'|'S'|'M'|'L'|'XL'|'XXL'|'XXXL';
export type ValidType = 'shirts'|'pants'|'hoodies'|'hats';