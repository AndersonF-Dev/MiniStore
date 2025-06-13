import styled, { keyframes } from 'styled-components';
import { media, mixins, colors } from "../../styles/theme/media";


export const Wrapper = styled.section`
    ${mixins.flexaligncenterJustifyaround}
    gap: 2rem;
    ${colors.background_suave}
    
    width: 100%;
    height: auto;

    padding: 2rem 1.0rem;
    text-align: center;

    //Blackberry: "600px",  
    @media ${media.tablet}{
      flex-direction: column;
      flex-direction: column-reverse;
    }
   
`;

export const InforConteinter = styled.div`
    ${mixins.flexJustifyCenterColumn}
    max-width: 24.0rem;
    width: auto;
    height: auto;
    padding: 1.5rem 0;
    
    //galaxyS: "360px",  
    @media ${media.galaxyS}{
      width: 21.1rem;
    }
    //mobileS: "320px",  
    @media ${media.mobileS}{
      width: 18.1rem;
    }

`;

export const TextoInfor = styled.p`
    font-size: clamp(1.4rem, 2vw + 0.5rem, 1.875rem);
    font-weight: 300;
    ${colors.dark}
    position: relative;
    margin-bottom: 0,625rem;
    

    &::before {
    content: '';
    display: inline-block;
    width: 2.5rem;
    height: 2px;
    ${colors.background_dark}
    margin: 0 0.5rem 0.25rem 0;
    vertical-align: middle;
  }

  //galaxyS: "360px",  
    @media ${media.galaxyS}{
      /* font-size: 1.8rem; */
      
    }
  //mobileS: "320px",  
    @media ${media.mobileS}{
      /* font-size: 1.4rem; */
      
    }
`;

export const TitleInfor = styled.h3`
    ${colors.title}
    font-size: clamp(2.8rem, 5vw + 2rem, 4.0rem);
    font-weight: 300;
    line-height: 1;

`;

const glow = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const BtnInfor = styled.button`
    padding: 0.625rem 1.25rem;
    background: linear-gradient(90deg, #111 0%, #222 100%);
    color: #fff;
    border: 1px solid #00ffe5;
    border-radius: 0.5rem;
    font-weight: bold;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    z-index: 1;
    transition: background 0.5s, transform 0.3s;
    margin-top: 0.5rem;

    &::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: radial-gradient(circle, #00BCD4 0%, transparent 70%);
        animation: ${glow} 2s linear infinite;
        opacity: 0.1;
        z-index: -1;
    }

    &:hover {
        transform: scale(1.05);
        background: linear-gradient(90deg, #00BCD4 0%, #006eff 100%);
    }
`;

export const ImgInfor = styled.img`
    max-width: 25.15rem;
    height: auto;
    aspect-ratio: 8 / 5;
    object-fit: cover;

       //ipadMini: "820px",  
    @media ${media.ipadMini}{
      max-width: 22.9rem;
    }
    //galaxyS: "360px",  
    @media ${media.galaxyS}{
      width: 20.1rem;
     
    }
    //mobileS: "320px",  
    @media ${media.mobileS}{
      width: 18.1rem;
    }
`;