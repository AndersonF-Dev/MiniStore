// QuantityButtons.tsx
import React, { useState, useEffect } from 'react';
// import { useCart } from '../../context/CartContext';
import { Container, Button, QuantityDisplay } from './styleQuantityButtons';

interface QuantityButtonsProps {
  productId: number;
  quantity: number;
  onChange: (quantity: number) => void; // 👈 nova prop para avisar o pai da quantidade
  min?: number;
  max?: number;
}

const QuantityButtons: React.FC<QuantityButtonsProps> = ({
  // productId,
  quantity: propQuantity,
  onChange,
  min = 1,
  max = 99,
  // onChange,
}) => {
 const [quantity, setQuantity] = useState(propQuantity);

  // 🟡 Sempre sincroniza com a prop (ex: ao abrir página de carrinho)
  useEffect(() => {
    setQuantity(propQuantity);
  }, [propQuantity]);

  const handleDecrease = () => {
    if (quantity > min) {
      const newQty = quantity - 1;
      setQuantity(newQty);
      onChange(newQty); // avisa o pai
    }
  };

  const handleIncrease = () => {
    if (quantity < max) {
      const newQty = quantity + 1;
      setQuantity(newQty);
      onChange(newQty); // avisa o pai
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
