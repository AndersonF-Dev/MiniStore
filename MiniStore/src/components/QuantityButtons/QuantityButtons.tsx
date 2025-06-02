// QuantityButtons.tsx
import React from 'react';
import { useCart } from '../../context/CartContext';
import { Container, Button, QuantityDisplay } from './styleQuantityButtons';

interface QuantityButtonsProps {
  productId: string;
  min?: number;
  max?: number;
}

const QuantityButtons: React.FC<QuantityButtonsProps> = ({
  productId,
  min = 1,
  max = 99,
}) => {
    const { updateQuantity, getQuantity } = useCart();
    const quantity = getQuantity(productId);

  const handleDecrease = () => {
    if (quantity > min) {
      updateQuantity(productId, quantity - 1);
    }
  };

  const handleIncrease = () => {
    if (quantity < max) {
      updateQuantity(productId, quantity + 1);
    }
  };

  return (
    <Container>
      <Button onClick={handleDecrease}>−</Button>
      <QuantityDisplay>{quantity}</QuantityDisplay>
      <Button onClick={handleIncrease}>+</Button>
    </Container>
  );
};

export default QuantityButtons;
