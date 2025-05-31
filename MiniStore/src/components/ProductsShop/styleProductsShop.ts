import styled from "styled-components";
// import { theme } from "../../styles/theme";
import { media, mixins } from "../../styles/theme/media";

export const Conteiner = styled.section`
    /* ${mixins.flexJustifyCenterColumn} */
    max-width: 49.1rem;
    width: 100%;
    margin-top: 80px;
    
    background-color: blue;

    //ipadMini 820px
    @media ${media.ipadMini}{
      width: 80%;
    }
    //tablet 768px
    @media ${media.tablet}{
      width: 84%;
    }

    //smallTablet 526px
    @media ${media.smallTablet}{
      width: 100%;
      /* min-width: 39.1rem; */
      /* padding: 1rem; */
      /* display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center; */
      background-color: orange;
    }
    //pixel7a 427px
    @media ${media.pixel7a}{
      width: 100%;
      /* min-width: 49.1rem; */
      /* padding: 1rem; */
      /* display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center; */
      background-color: orange;
    }
    //fold 426px
    @media ${media.fold}{
      width: 100%;
      /* min-width: 49.1rem; */
      /* padding: 1rem; */
      /* display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center; */
      background-color: orange;
    }
    //fold 426px
    @media ${media.iphoneXR}{
      width: 100%;
      /* margin-left: 1rem; */
      /* min-width: 49.1rem; */
      /* padding: 1rem; */
      /* display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center; */
      background-color: orange;
    }
`;

export const ResultsSortingConteiner = styled.div`
    ${mixins.flexSpaceBetween}
    width: 100%;
    background-color: orchid;
`;

export const ResultsTitle = styled.h3`
    color: #E0E0E0;
    font-size: 1rem;
    /* width: 100%; */
    background-color: olive;

     //fold 426px
    @media ${media.fold}{
      font-size: .8rem;
      text-align: left;
      /* width: 7.7rem; */
    }
`;

export const SortingTexto = styled.p`
    ${mixins.flexCenter}
    font-size: 1rem;
    color: #00BCD4;

    background-color: blue;

    //fold 426px
    @media ${media.fold}{
      font-size: .8rem;
    }
`;

// estilos do card dos produtos

export const CardContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;

  /* background-color: olive; */

     //fold 426px
    @media ${media.fold}{
      width: 100%;
      gap: 5px;
      /* padding: 3rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: orange; */
    }
     //fold 426px
    @media ${media.iphoneXR}{
      width: 100%;
      gap: 0;
      padding: 0;
      /* padding: 3rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: orange; */
    }

      //galaxyS 360px
    @media ${media.galaxyS}{
      width: 80%;
      padding: 0;
      align-items: start;
      justify-content: left;
      overflow: hidden;
      margin-left: -13px;
      /* background-color: black; */
    }
      //fold 320px
    @media ${media.mobileS}{
      width: 80%;
      padding: 0;
      align-items: start;
      justify-content: left;
      overflow: hidden;
      margin-left: 7px;
      /* background-color: black; */
    }
`;

// export const ProductsCardConteiner = styled.div`

// `;

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