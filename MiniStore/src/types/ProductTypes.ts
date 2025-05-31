// types/Product.ts
export type ProductTypes = {
  id: number;
  image: string;
  name: string;
  price: string;
  stock: number;
  colors: string[]; // <- opcional
  size: string[];
};
