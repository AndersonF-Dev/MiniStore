import React, { useRef, useEffect } from 'react';

// import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import type { Product } from '../../types/ProductTypes'; // Certifique-se de que o caminho está correto
import {
  Overlay,
  ModalBox,
  Title,
  ProductList,
  ProductItem,
  ProductImage,
  ProductInfo,
  FooterButtons,
  Button,
} from './styleCartModal'

// interface Product {
//   id: string | number;
//   name: string;
//   image: string;
//   price: number;
//   quantity: number;
// }

interface CartModalProps {
  isVisible: boolean;
  onClose: () => void;
  product?: Product | null | undefined;
}

const CartModal: React.FC<CartModalProps> = ({ isVisible, onClose }) => {
  const { cart } = useCart();
  // const navigate = useNavigate();
  const modalRef = useRef<HTMLDivElement>(null);

  // Fechar modal se clicar fora dele (no overlay)
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isVisible, onClose]);

  if (!isVisible) return null; // não renderiza nada se não estiver visível
  return (
    <Overlay isVisible={isVisible}>
      <ModalBox ref={modalRef} isVisible={isVisible}>

        <Title>
          Produto(s) adicionado(s):
        </Title>

        <ProductList>
          {cart.map(item => (
            <ProductItem key={item.id}>
              <ProductImage src={item.image} alt={item.name} />
              <ProductInfo>
                <div><strong>{item.name}</strong></div>
                {/* <div key={item.id}>
                  Preço: {item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</div> */}
                  <div>
                    Preço: {item.price != null
                      ? item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                      : 'R$ 0,00'}
                  </div>
                <div>Quantidade: {item.quantity}</div>
              </ProductInfo>
            </ProductItem>
          ))}
        </ProductList>

        <FooterButtons>

          <Button 
            variant="primary" 
            onClick={() => window.open('/cart', '_blank')}>
            Ver Carrinho
          </Button>

          <Button
            variant="secondary" 
            onClick={() => window.open('/checkout', '_blank')}>
              Comprar Agora
          </Button>

        </FooterButtons>
      </ModalBox>
    </Overlay>
  );
};

export default CartModal;
