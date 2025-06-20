import styled from "styled-components";
import { media, mixins, colors, fonts } from "../../styles/theme/media";

export const Conteiner = styled.section`
  width: 100%;
  max-width: 72.75rem;
  ${fonts.secondary};
  ${mixins.flexAlignCentertColumn}
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;

export const ResultsSortingConteiner = styled.div`
  ${mixins.flexSpaceBetween}
  width: 100%;
`;

export const ResultsTitle = styled.h3`
  ${colors.title}
  font-size: 1rem;

  //fold 426px
  @media ${media.fold} {
    font-size: 0.8rem;
    text-align: left;
  }
`;

export const SortingTexto = styled.p`
  ${mixins.flexCenter}
  font-size: 1rem;
  ${colors.accent}
  display: none;

  //fold 426px
  @media ${media.fold} {
    font-size: 0.8rem;
  }
`;

export const Button = styled.button`
  display: none;
  background: transparent;
  color: white;
  border: none;
  font-size: 1.25rem;
  padding: 0.313rem 0.625rem;
  margin-bottom: 2.5rem;

  cursor: pointer;

  @media (max-width: 767px) {
    display: block;
  }

  &:hover {
    ${colors.accent}
  }
`;

export const ProductsSidebarWrapper = styled.section`
  ${mixins.flexColumnEvenly}
  padding: 0 1rem;
  width: 100%;

  //smallTablet 427px
  @media ${media.smallTablet} {
    padding: 0 0.3rem;
  }
`;

// estilos do card dos posts do blog

export const CardContainer = styled.section`
  width: 100%;
  ${mixins.flexCenterWrap}
`;

export const PaginationWrapper = styled.div`
  width: 100%;
  ${mixins.flexCenterWrap}
  gap: 8px;
  margin: 32px 0;
`;

export const PageButton = styled.button<{ active?: boolean }>`
  padding: 8px 14px;
  border-radius: 6px;
  border: 1px solid ${({ active }) => (active ? "#00BCD4" : "#ccc")};
  background-color: ${({ active }) => (active ? "#00BCD4" : "#fff")};
  color: ${({ active }) => (active ? "#fff" : "#333")};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #00bcd4;
    color: white;
  }
`;
