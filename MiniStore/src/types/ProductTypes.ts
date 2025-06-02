// types/Product.ts
export type ProductTypes = {
  id: number;
  image: string;
  name: string;
  price: string;
  briefDescription: string;
  stock: number;
  colors: string[]; // <- opcional
  size: string[];
  sku: string;               
  category: string;           
  tags: string[]; 
};
