import React, { useRef, useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';
import type { CartModalProps } from './interfaceCartModal'; 
import {
  Overlay,
  ModalBox,
  Title,
  ProductList,
  ProductItem,
  ProductImage,
  ProductCenterContent,
  FooterButtons,
  Button,
  CloseButton,
  DeleteButton,
} from './styleCartModal'


const CartModal: React.FC<CartModalProps> = ({ isVisible, onClose }) => {
  const { cart, removeFromCart } = useCart();

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
        <CloseButton onClick={onClose}>×</CloseButton>

        <Title>
          Produto(s) adicionado(s):
        </Title>

        <ProductList>
          {cart.map(item => (
            <ProductItem key={item.id}>
              <ProductImage src={item.image} alt={item.name} />
              <ProductCenterContent>
                <div><strong>{item.name}</strong></div>
                <div>
                  Preço: {item.price != null
                    ? item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                    : 'R$ 0,00'}
                </div>
                <div>Quantidade: {item.quantity}</div>
              </ProductCenterContent>

              <DeleteButton onClick={() => removeFromCart(item.id)} title="Remover item">
                <FaTrash />
              </DeleteButton>

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
