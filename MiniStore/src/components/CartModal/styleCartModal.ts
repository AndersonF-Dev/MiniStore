import styled from "styled-components";
import { media, colors, mixins } from "../../styles/theme/media";

interface ButtonProps {
  variant?: "primary" | "secondary";
}

export const Overlay = styled.div<{ isVisible: boolean }>`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  z-index: 1000;
`;

export const ModalBox = styled.div<{ isVisible: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  max-width: 350px;
  width: 78%;
  background: #3a3a3a6a;

  padding: 1.5rem;

  /* animação sliding */
  transform: ${({ isVisible }) =>
    isVisible ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.3s ease-in-out;
  z-index: 1001;

  ${mixins.flexColumn}
`;

export const Title = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 1.5rem;

  @media ${media.galaxyS} {
    font-size: 1rem;
  }
`;

export const ProductList = styled.ul`
  flex: 1;
  overflow-y: auto;
  padding: 0;
  margin: 0;
`;

export const ProductItem = styled.li`
  ${mixins.flexSpaceBetween}
  padding: 1rem 0;
  border-bottom: 1px solid #ccc;
  gap: 0.1rem;

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

export const ProductCenterContent = styled.div`
  flex: 1;
  ${mixins.flexJustifyCenterColumn}

  text-align: center;
  font-size: 0.9rem;
  ${colors.title}
`;

export const FooterButtons = styled.div`
  margin-top: auto;
  display: flex;
  gap: 1rem;
`;

export const Button = styled.button<ButtonProps>`
  padding: 10px 20px;
  background-color: #00bcd4;
  color: ${({ variant }) => (variant === "secondary" ? "#E0E0E0" : "#272727")};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s;
  transform: scale(1);
  transition: transform 0.4s ease;

  background-color: ${({ variant }) =>
    variant === "secondary" ? "#1E1E1E" : "#00BCD4"};

  &:hover {
    transform: scale(1.1);
    opacity: 0.9;
  }

  @media ${media.galaxyS} {
    font-size: 0.7rem;
    padding: 10px 5px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: transparent;
  border: none;
  font-size: 1.8rem;
  font-weight: bold;
  color: rgb(248, 6, 6);
  cursor: pointer;
  transform: scale(1);
  transition: transform 0.4s ease;

  &:hover {
    transform: scale(1.2);
    color: rgb(248, 6, 6);
  }
`;

export const DeleteButton = styled.button`
  background: transparent;
  border: none;
  color: #e74c3c;
  font-size: 1.2rem;
  cursor: pointer;
  transition: color 0.2s ease;

  ${mixins.flexCenter}
  transform: scale(1);
  transition: transform 0.4s ease;

  &:hover {
    transform: scale(1.2);
    color: #c0392b;
  }
`;
