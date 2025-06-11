import styled from "styled-components";
// import { theme } from "../../styles/theme";
import { media } from "../../styles/theme/media";

export const Conteiner = styled.section`
    width: 100%;
    max-width: 72.75rem;
    font-family: ${({ theme}) => theme.fonts.secondary};
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    /* background-color: olive; */

    //laptop: "1024px",  Laptops pequenos
     /* @media ${media.laptop}{
        width: 63.9rem;
    } */
    //ipadMini: "820px", 
    /* @media ${media.ipadMini}{
        width: 49.7rem;
    } */
      //smallTablet: "526px",
    /* @media ${media.smallTablet}{

    } */
    //fold: "426px",
    /* @media ${media.fold} {
        width: 26.3rem;
    } */

    //galaxyS: "360px",
    /* @media ${media.galaxyS}{
        width: 22.3rem;
    } */
`;

export const ProductsSidebarWrapper = styled.section`
    display: flex;
    justify-content: space-evenly;
    gap: 2rem;
    padding: 0 1rem;
    width: 100%;

     @media ${media.laptop}{
         gap: 1rem;
         /* width: 99%; */
         
         /* background-color: olive; */

    }

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