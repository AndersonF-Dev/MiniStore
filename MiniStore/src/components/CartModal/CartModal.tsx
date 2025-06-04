import React, { useRef, useEffect } from 'react';

// import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
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

interface CartModalProps {
  isVisible: boolean;
  onClose: () => void;
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

        {/* <h3>Produto(s) adicionado(s):</h3>
        <ul style={{ flex: 1, overflowY: 'auto', padding: 0, margin: 0 }}>
          {cart.map(item => (
            <li key={item.id} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', listStyle: 'none' }}>
              <img src={item.image} alt={item.name} width={60} height={60} style={{ objectFit: 'cover', borderRadius: '6px' }} />
              <div>
                <div><strong>{item.name}</strong></div>
                <div>Preço: {item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</div>
                <div>Quantidade: {item.quantity}</div>
              </div>
            </li>
          ))}
        </ul>
        <div style={{ marginTop: 'auto', display: 'flex', gap: '1rem' }}>

          <button onClick={() => navigate('/cart')}>Ver Carrinho</button>
          <button onClick={() => navigate('/checkout')}>Comprar Agora</button>
        </div> */}
        <Title>
          Produto(s) adicionado(s):
        </Title>

        <ProductList>
          {cart.map(item => (
            <ProductItem key={item.id}>
              <ProductImage src={item.image} alt={item.name} />
              <ProductInfo>
                <div><strong>{item.name}</strong></div>
                <div>Preço: {item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</div>
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
