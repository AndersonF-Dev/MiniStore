export interface Product {
  id: string; // ou slug, que você vai usar no link
  image: string;
  name: string;
  price: number; // preço em centavos ou reais
  stock: number;
}

export interface ProductsSectionProps {
  title: string;
  endpoint?: string; // URL da API futura
  fallbackData?: Product[]; // dados mockados temporários
}