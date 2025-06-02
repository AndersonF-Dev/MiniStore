// styleQuantityButtons.ts
import styled from 'styled-components';
// import { theme } from "../../styles/theme";
// import { media } from "../../styles/theme/media";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 0.5rem;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.subtitle};
  color: #3A3A3A;
  border: none;
  width: 32px;
  height: 32px;
  font-size: 20px;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const QuantityDisplay = styled.span`
  font-size: 18px;
  min-width: 24px;
  text-align: center;
  font-weight: bold;
`;
