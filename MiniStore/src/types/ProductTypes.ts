// types/Product.ts
export type ProductTypes = {
  id: number;
  image: string;
  name: string;
  price: number;
  briefDescription: string;
  stock: number;
  colors: string[]; // <- opcional
  size: string[];
  sku: string;               
  category: string;           
  tags: string[]; 
  brand?: string;
};

export interface Product {
  id: string | number;
  image: string;
  name: string;
  price: number;   // aqui price é number, importante padronizar
  quantity?: number; // opcional para modal, etc.
  stock?: number;
  colors?: string[];
  size?: string[];
}

