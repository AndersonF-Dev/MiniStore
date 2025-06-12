import styled from "styled-components";
import { media, mixins, colors, fonts } from "../../styles/theme/media";

export const Conteiner = styled.section`
    width: 100%;
    max-width: 72.75rem;
    ${mixins.flexaligncenterJustifyaround}
    ${fonts.secondary}
   

    //laptop: "1024px",  Laptops pequenos
     @media ${media.laptop}{
        width: 63.9rem;
    }
    //ipadMini: "820px", 
    @media ${media.ipadMini}{
        width: 49.7rem;
    }
    //pixel7a: "427px",
    @media ${media.pixel7a} {
        width: 26.3rem;
    }
    
    //galaxyS: "360px",
    @media ${media.galaxyS}{
        width: 22.3rem;
    }
`;

export const GridWrapper = styled.div`
    width: 100%;
    ${mixins.gridAlignItemsCenter}
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: .1rem;

    //ipadMini: "820px"
    @media ${media.ipadMini} {
        grid-template-columns: repeat(2, 1fr);
        ${mixins.center}
    }
    //smallTablet: "526px",
    @media ${media.smallTablet} {
        width: 64%;
        margin-bottom: 1.875rem;
    }
    //pixel7a: "427px",
    @media ${media.pixel7a} {
        width: 54%;
    }

    //fold: "426px",
    @media ${media.fold}  {
        width: 100%;
    }

    //galaxys 360
    @media ${media.galaxyS} {
        grid-template-columns: 1fr;
    }
`;

export const Wrapper = styled.div`
    width: 17.988rem;
    width: 100%;
    display: flex;
    gap: .5rem;
    margin: 5rem auto 5rem auto;

     //laptop: "1024px",  Laptops pequenos
     @media ${media.laptop}{
        width: 14.1rem;
     }
    //ipadMini: "820px", 
    @media ${media.ipadMini}{
        grid-template-columns: repeat(2, 1fr);
        margin: 1.25rem auto 1.25rem auto;
        justify-content: center;
        width: 22.988rem;
    }
    //smallTablet: "526px",
    @media ${media.smallTablet}{
        width: 12.988rem;
    }
    //pixel7a: "427px",
    @media ${media.pixel7a}{
        width: 10.988rem;
    }
    //fold: "426px"
    @media ${media.fold}{
        grid-template-columns: repeat(2, 1fr);
        margin: 0.938rem auto 0.5rem auto;
        width: 10.988rem;
    }
`;

export const Icon = styled.img`
    height: 1.563rem;

     //laptop: "1024px",  Laptops pequenos
     @media ${media.laptop}{
        height: 1.125rem;
     }

    //smallTablet: "526px",
    @media ${media.smallTablet}{
        height: 1.188rem;
    }
`;

export const ConteinerText = styled.div`
    width: 14rem;
    text-align: left;
`;

export const Title = styled.h4`
    font-size: 1.25rem;
    ${colors.title}

     //laptop: "1024px",  Laptops pequenos
     @media ${media.laptop}{
        font-size: 1.1rem;
     }

    //smallTablet: "526px",
    @media ${media.smallTablet}{
        font-size: 1.0rem;
    }

     //pixel7a: "427px",
    @media ${media.pixel7a}{
        font-size: .8rem;
    }

    //fold: "426px"
    @media ${media.fold}{
        font-size: 0.8rem;
    }
`;

export const SubTitle = styled.p`
    font-size: 1rem;
    ${colors.subtitle}

     //laptop: "1024px",  Laptops pequenos
     @media ${media.laptop}{
        font-size: .8rem;
     }

    //smallTablet: "526px",
    @media ${media.smallTablet}{
        font-size: 0.8rem;
    }
`;