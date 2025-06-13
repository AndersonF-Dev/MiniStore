export type ProductCardProps = {
  id: number;
  image: string;
  name: string;
  price: string;
  colors?: string[];
  size?: string[];
  stock?: number;
  onAddToCart?: () => void;
};