import styled from "styled-components";
import { media, mixins } from "../../styles/theme/media";

export const Conteiner = styled.section`
    width: 100%;
    max-width: 72.75rem;
    font-family: ${({ theme}) => theme.fonts.secondary};
    
    display: flex;
    align-items: center;
    flex-direction: column;
    /* justify-content: space-around; */

    /* margin-top: 80px; */

    /* background-color: blue; */
`;

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    /* height: 1500px; */
    /* flex-direction: column; */
    /* background-color: blueviolet; */
`;
export const ResultsSortingConteiner = styled.div`
    ${mixins.flexSpaceBetween}
    width: 100%;
    /* background-color: orchid; */
`;

export const ResultsTitle = styled.h3`
    color: #E0E0E0;
    font-size: 1rem;
    /* width: 100%; */
    /* background-color: olive; */

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
    display: none;

    /* background-color: blue; */

    //fold 426px
    @media ${media.fold}{
      font-size: .8rem;
    }
`;

export const Button = styled.button`
  position: absolute;
  top: 250px;
  /* right: ; */
  background: transparent;
  color: white;
  border: none;
  font-size: 20px;
  padding: 5px 10px;
  /* border-radius: 50%; */
  cursor: pointer;
  z-index: 1001;

  @media (min-width: 821px) {
    display: none;
  }

  &:hover {
    color: #0097a7;
  }
`;

export const ProductsSidebarWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    /* gap: 2rem; */
    padding: 0 1rem;
    width: 100%;
    /* margin-top: 80px; */

    /* background-color: orange; */

     /* @media ${media.laptop}{
         gap: 1rem;
         
         
         background-color: olive;

    } */

     //smallTablet 427px
    @media ${media.smallTablet}{
        padding: 0 0.3rem;
    }
     //pixel7a 427px
    @media ${media.pixel7a}{
        padding: 0 0.3rem;
    }
     //fold 426px
    @media ${media.fold}{
        padding: 0 0.3rem;
    }
     //fold 320px
    @media ${media.mobileS}{
        padding: 0 0.3rem;
        background-color: blueviolet;
        
    }
`;

// estilos do card dos produtos

export const CardContainer = styled.section`
width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* gap: 16px; */
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
