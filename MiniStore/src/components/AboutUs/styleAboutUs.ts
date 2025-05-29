import styled from "styled-components";
import { media, mixins } from "../../styles/theme/media";

export const Conteiner = styled.section`
    ${mixins.flexCenter}
    width: 72.75rem;
    margin: 0 0 80px 0;
    /* background-color: rebeccapurple; */
`;

export const Wrapper = styled.div`
    ${mixins.flexSpaceBetween}
    width: 50.1rem;
    

    /* background-color: orange; */

    //laptop: "1024px",  
    @media ${media.laptop}{
        width: 65.0rem;
        padding: 0 2rem;
    }
    //ipadMini: "820px",  
    @media ${media.ipadMini}{
        width: 51.0rem;
        padding: 0 2rem;
        margin-top: 80px;
    }
    //tablet: "768px",  
    @media ${media.tablet}{
        width: 47.7rem;
        padding: 0 2rem;
        margin-top: 80px;
    }

    //smallTablet: "526px",  
    @media ${media.smallTablet}{
        width: 32.7rem;
        gap: .5rem;
        flex-direction: column;
        margin-top: 40px;
    }
    //pixel7a: "427px",  
    @media ${media.pixel7a}{
        width: 26.6rem;
        gap: .5rem;
        flex-direction: column;
        margin-top: 40px;
    }
    //iphoneXR: "414px",  
    @media ${media.iphoneXR}{
        width: 25.7rem;
        gap: .5rem;
        flex-direction: column;
        margin-top: 40px;
    }
    //mobileS: "320px",  
    @media ${media.galaxyS}{
        width: 22.3rem;
        flex-direction: column;
        margin-top: 40px;
    }
    //mobileS: "320px",  
    @media ${media.mobileS}{
        flex-direction: column;
        margin-top: 40px;
    }
`;

export const Img = styled.img`
    max-width: 21.25rem;
    border-radius: 1.563rem;
    /* height: 403px; */

    //tablet: "768px",  
    @media ${media.tablet}{
        min-width: 22.25rem;
    }
    //smallTablet: "526px",  
    @media ${media.smallTablet}{
        min-width: 29.25rem;
    }
    //pixel7a: "427px",  
    @media ${media.pixel7a}{
        min-width: 24.25rem;
    }
    //iphoneXR: "414px",  
    @media ${media.iphoneXR}{
        min-width: 23.25rem;
    }
    //iphoneXR: "414px",  
    @media ${media.mobileS}{
        min-width: 18.0rem;
    }

    //galaxyS: "360px",  
    @media ${media.galaxyS}{
        min-width: 20.0rem;
    }
`;

export const InfortWrapper = styled.div`
    width: 470px;
    text-align: left;
    /* background-color: red; */

    //ipadMini: "820px",  
    @media ${media.ipadMini}{
        width: 23.25rem;
    }
    //tablet: "768px",  
    @media ${media.tablet}{
        width: 20.25rem;
    }
    //pixel7a: "427px",  
    @media ${media.pixel7a}{
        width: 24.25rem;
    }
    //iphoneXR: "414px",  
    @media ${media.iphoneXR}{
        width: 23.25rem;
    }
    //galaxyS: "360px",  
    @media ${media.galaxyS}{
        width: 20.0rem;
    }
    //mobileS: "320px",  
    @media ${media.mobileS}{
        width: 310px;
    }
`;

export const Title = styled.h2`
    font-size: 1.875rem;
    color: #E0E0E0;
    padding: 0.5rem 0;

     //ipadMini: "820px",  
    @media ${media.ipadMini}{
        font-size: 1.52rem;
    }
     //tablet: "768px",  
    @media ${media.tablet}{
        font-size: 1.39rem;
    }
     //smallTablet: "526px",  
    @media ${media.smallTablet}{
        font-size: 1.99rem;
    }
     //iphoneXR: "414px",  
    @media ${media.pixel7a}{
        font-size: 1.68rem;
    }
     //iphoneXR: "414px",  
    @media ${media.iphoneXR}{
        font-size: 1.6rem;
    }
    //galaxyS: "360px",  
    @media ${media.galaxyS}{
        font-size: 1.36rem;
    }
    //mobileS: "320px",  
    @media ${media.mobileS}{
        font-size: 1.313rem;
    }
`;

export const TextInfor = styled.p`
    font-size: 1rem;
    color: #B5B5B5;
    margin-bottom: .4rem;
    /* white-space: pre-line; */

     //ipadMini: "820px",  
    @media ${media.ipadMini}{
        font-size: 0.96rem;
    }
     //tablet: "768px",  
    @media ${media.tablet}{
        font-size: 0.97rem;
    }
`;

export const BtnStore = styled.button`
    /* width: 230px; */
    padding: 1rem 1rem;
    cursor: pointer;
    border: none;
    border-radius: 0.938rem;
    color: #3A3A3A;
    font-weight: bold;
    margin-top: 1rem;
    background-color: #00BCD4;

    &:hover {
    background-color:rgb(5, 211, 238);
  }
`;