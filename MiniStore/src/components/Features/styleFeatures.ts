import styled from "styled-components";
// import { theme } from "../../styles/theme";
import { media } from "../../styles/theme/media";

export const Conteiner = styled.section`
    width: 100%;
    max-width: 72.75rem;
    font-family: ${({ theme}) => theme.fonts.secondary};
    
    display: flex;
    align-items: center;
    justify-content: space-around;

    //laptop: "1024px",  Laptops pequenos
     @media ${media.laptop}{
        width: 63.9rem;
    }
    //ipadMini: "820px", 
    @media ${media.ipadMini}{
        width: 49.7rem;
    }
      //smallTablet: "526px",
    @media ${media.smallTablet}{

    }
    //fold: "426px",
    @media ${media.fold} {
        width: 26.3rem;
    }

    //galaxyS: "360px",
    @media ${media.galaxyS}{
        width: 22.3rem;
    }
`;

export const GridWrapper = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
  gap: .1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

    //ipadMini: "820px"
    @media ${media.ipadMini} {
        grid-template-columns: repeat(2, 1fr);
        justify-content: center;
        align-items: center;
    }

    //smallTablet: "526px",
    @media ${media.smallTablet} {
        grid-template-columns: repeat(2, 1fr);
        justify-content: center;
        align-items: center;
        width: 64%;
        margin-bottom: 30px;
    }
    //pixel7a: "427px",
    @media ${media.pixel7a} {
        width: 54%;
    }

    //fold: "426px",
    @media ${media.fold}  {
        grid-template-columns: repeat(2, 1fr);
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    //galaxys 360
    @media ${media.galaxyS} {
        grid-template-columns: 1fr;
        justify-content: center;
        align-items: center;
    }
`;

export const Conteiter = styled.div`
    width: 17.988rem;
    width: 100%;
    display: flex;
    gap: .5rem;
    margin: 80px auto 80px auto;

     //laptop: "1024px",  Laptops pequenos
     @media ${media.laptop}{
        width: 14.1rem;
     }

    //ipadMini: "820px", 
    @media ${media.ipadMini}{
        grid-template-columns: repeat(2, 1fr);
        margin: 20px auto 20px auto;
        justify-content: center;
        width: 22.988rem;
    }

    //smallTablet: "526px",
    @media ${media.smallTablet}{
        justify-content: center;
        width: 12.988rem;
    }

     //pixel7a: "427px",
    @media ${media.pixel7a}{
        width: 10.988rem;
    }

    //fold: "426px"
    @media ${media.fold}{
        grid-template-columns: repeat(2, 1fr);
        margin: 15px auto 8px auto;
        justify-content: center;
        width: 10.988rem;
    }
`;

export const Icon = styled.img`
    height: 25px;

     //laptop: "1024px",  Laptops pequenos
     @media ${media.laptop}{
        height: 18px;
     }

    //smallTablet: "526px",
    @media ${media.smallTablet}{
        height: 19px;
    }
`;

export const ConteinerText = styled.div`
    width: 14rem;
    text-align: left;
`;

export const Title = styled.h4`
    font-size: 1.25rem;
    color: #E0E0E0;

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
    color: #B5B5B5;

     //laptop: "1024px",  Laptops pequenos
     @media ${media.laptop}{
        font-size: .8rem;
     }

    //smallTablet: "526px",
    @media ${media.smallTablet}{
        font-size: 0.8rem;
    }
`;