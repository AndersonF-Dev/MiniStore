import styled from "styled-components";
// import { theme } from "../../styles/theme";
import { media, mixins, colors } from "../../styles/theme/media";

export const Conteiner = styled.section`
    max-width: 49.1rem;
    width: 100%;
    overflow: hidden;
    padding: 0 0.5rem;
`;

export const ResultsSortingConteiner = styled.div`
    ${mixins.flexSpaceBetween}
    width: 100%;
`;

export const ResultsTitle = styled.h3`
    ${colors.title}
    font-size: 1rem;

     //fold 426px
    @media ${media.fold}{
      font-size: .8rem;
      text-align: left;
    }
`;

export const SortingTexto = styled.p`
    ${mixins.flexCenter}
    ${colors.accent}
    font-size: 1rem;

    //fold 426px
    @media ${media.fold}{
      font-size: .8rem;
    }
`;

// estilos do card dos produtos

export const CardContainer = styled.section`
  ${mixins.flexCenter}
  gap: 16px;
  flex-wrap: wrap;

     //fold 426px
    @media ${media.fold}{
      width: 100%;
      gap: 5px;
    }
     //fold 426px
    @media ${media.iphoneXR}{
      width: 100%;
      gap: 0;
      padding: 0;
    }
 
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
    width: 100%; 
    ${mixins.flexCenter}
    flex-wrap: wrap;
    gap: 8px;
    margin: 32px 0;
`;

export const PageButton = styled.button<{ active?: boolean }>`
  padding: 0.5rem 0.875rem;
  border-radius: 0.375rem;
  border: 1px solid ${({ active }) => (active ? '#00BCD4' : '#ccc')};
  background-color: ${({ active }) => (active ? '#00BCD4' : '#fff')};
  color: ${({ active }) => (active ? '#fff' : '#333')};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #00BCD4;
    color: white;
  }
`;