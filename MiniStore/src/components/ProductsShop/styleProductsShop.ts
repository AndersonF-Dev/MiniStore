import styled from "styled-components";
// import { theme } from "../../styles/theme";
import { media, mixins } from "../../styles/theme/media";

export const Conteiner = styled.section`
    width: 75%;
    max-width: 72.75rem;
    /* background-color: beige; */
    ${mixins.flexAlignStartColumn}
`;

export const ResultsSortingConteiner = styled.div`
    ${mixins.flexSpaceBetween}
    width: 100%;
    /* background-color: orchid; */
`;

export const ResultsTitle = styled.h3`
    color: #E0E0E0;
    font-size: 1.0rem;
    /* width: 100%; */
    /* background-color: olive; */
`;

export const SortingTexto = styled.p`
    ${mixins.flexCenter}
    font-size: 1rem;
    color: #00BCD4;
    /* background-color: blue; */
`;

// estilos do card dos produtos

export const ProductsConteiner = styled.section`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    /* background-color: lightcoral; */
`;

export const ProductsCardConteiner = styled.div`

`;

export const OutOfStockBadge = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  background-color: red;
  color: white;
  padding: 4px 8px;
  font-size: 12px;
  font-weight: bold;
  border-radius: 4px;
`;

export const PaginationWrapper = styled.div`
    width: 100%; /* ocupa toda a largura */
    display: flex;
    justify-content: center;
    align-items: center; /* vertical opcional */
    gap: 8px;
    margin: 32px 0;
    flex-wrap: wrap;
`;

export const PageButton = styled.button<{ active?: boolean }>`
  padding: 8px 14px;
  border-radius: 6px;
  border: 1px solid ${({ active }) => (active ? '#333' : '#ccc')};
  background-color: ${({ active }) => (active ? '#333' : '#fff')};
  color: ${({ active }) => (active ? '#fff' : '#333')};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #333;
    color: white;
  }
`;