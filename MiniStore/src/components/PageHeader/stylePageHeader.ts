import styled from "styled-components";
// import { theme } from "../../styles/theme";
interface VariantProps {
  variant?: 'default' | 'product';
}

export const Container = styled.div`
width: 100%;
  padding: 2rem 1rem;
  /* border-bottom: 1px solid #ccc; */
`;

export const Title = styled.h1<VariantProps>`
  /* font-size: 5.188rem;
  margin-bottom: 0.5rem;
  color: #E0E0E0; */

  font-size: ${({ variant }) => (variant === 'product' ? '3rem' : '5.188rem')};
  margin-bottom: 0.5rem;
  color: ${({ variant }) =>
    variant === 'product' ? '#333' : '#E0E0E0'};
`;

export const Breadcrumb = styled.div<VariantProps>`
  font-size: 1rem;

  a {
    text-decoration: none;
    /* color: #D8D4D4; */
    color: ${({ variant }) => (variant === 'product' ? '#777' : '#D8D4D4')};
    transition: color 0.2s;

    &:hover {
      color: ${({ variant }) => (variant === 'product' ? '#007B8A' : '#00BCD4')};
      /* color: #00BCD4; */
    }
  }
`;
