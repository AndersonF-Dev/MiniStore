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
    justify-content: center;

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