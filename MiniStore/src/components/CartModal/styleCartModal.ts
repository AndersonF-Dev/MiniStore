import styled from 'styled-components';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
}

export const Overlay = styled.div<{ isVisible: boolean }>`
  position: fixed;
  inset: 0;
  background-color: rgba(0,0,0,0.4);
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  z-index: 1000;
`;

export const ModalBox = styled.div<{ isVisible: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 350px;
  background: #3a3a3a6a;
  /* box-shadow: -3px 0 10px rgba(0,0,0,0.3); */
  padding: 1.5rem;
  border-radius: 0 0 0 12px;

  /* animação sliding */
  transform: ${({ isVisible }) => (isVisible ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;
  z-index: 1001;

  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
`;

export const ProductList = styled.ul`
  flex: 1;
  overflow-y: auto;
  padding: 0;
  margin: 0;
`;

export const ProductItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  list-style: none;
  padding: 0.5rem 0;
  border-bottom: 1px solid;

   &:last-child {
    border-bottom: none;
  }
`;

export const ProductImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 6px;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterButtons = styled.div`
  margin-top: auto;
  display: flex;
  gap: 1rem;
`;

export const Button = styled.button<ButtonProps>`
     padding: 10px 20px;
      background-Color: #00BCD4;
      color: ${({ variant }) =>
    variant === 'secondary' ? '#E0E0E0' : '#272727'};
      border: none;
      border-Radius: 5px;
      cursor: pointer;
      font-Weight: bold;
       transition: background 0.3s;

  background-color: ${({ variant }) =>
    variant === 'secondary' ? '#1E1E1E' : '#00BCD4'};

     &:hover {
    opacity: 0.9;
  }
`;
