export type ProductCardProps = {
  id: number;
  image: string;
  name: string;
  price: number;
  colors?: string[];
  size?: string[];
  stock?: number;
  onAddToCart?: () => void;
};