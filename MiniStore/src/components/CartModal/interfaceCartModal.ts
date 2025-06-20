import type { Product } from '../../types/ProductTypes';

export interface CartModalProps {
  isVisible: boolean;
  onClose: () => void;
  product?: Product | null | undefined;
}