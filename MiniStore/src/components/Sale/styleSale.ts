import styled, { keyframes } from 'styled-components';
import { media } from "../../styles/theme/media";


export const Wrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-around;
    
    width: 100%;
    height: 27.5rem;
    background-color: #9A9FA3;

    //laptop: "1024px",
     @media ${media.laptop} {
      /* width: 88%; */
      padding: 0 4.0rem;
      /* width: 64.1rem; */
    }
    
    //ipadMini: "820px",
    @media ${media.ipadMini} {
      gap: 1.0rem;
      text-align: center;
      padding: 1rem;
      width: 86%;
      /* place-items: center; */
    }
    
    //tablet: "768px",  
    @media ${media.tablet}{
      width: 80%;
      height: 23.5rem;
      /* background-color: orange; */
    }
    //smallTablet: "526px",  
    @media ${media.smallTablet}{
      flex-direction: column;
      flex-direction: column-reverse;
      width: 64.2%;
      overflow: hidden;
      height: 40.5rem;
      /* background-color: orange; */
    }
    //pixel7a: "427px",  
    @media ${media.pixel7a}{
      flex-direction: column;
      flex-direction: column-reverse;
      width: 52%;
      overflow: hidden;
      height: 40.5rem;
      /* background-color: orange; */
    }
    //fold: "426px",  
    @media ${media.fold}{
      flex-direction: column;
      flex-direction: column-reverse;
      width: 52%;
      overflow: hidden;
      height: 40.5rem;
      /* background-color: orange; */
    }
    //iphoneXR: "414px",  
    @media ${media.iphoneXR}{
      flex-direction: column;
      flex-direction: column-reverse;
      width: 50.5%;
      overflow: hidden;
      height: 40.5rem;
      /* background-color: orange; */
    }
    //galaxyS: "360px",  
    @media ${media.galaxyS}{
      flex-direction: column;
      flex-direction: column-reverse;
      width: 44%;
      overflow: hidden;
      height: 30.5rem;
      /* background-color: orange; */
    }
    //mobileS: "320px",  
    @media ${media.mobileS}{
      flex-direction: column;
      flex-direction: column-reverse;
      width: 39%;
      overflow: hidden;
      height: 30.5rem;
      /* background-color: orange; */
    }
`;

export const InforConteinter = styled.div`
    width: 37.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    /* background-color: orchid; */

    //laptop: "1024px",
     @media ${media.laptop}{
      /* font-size: 4.1rem; */
      width: 31.1rem;
     }

     //ipadMini: "820px",
     @media ${media.ipadMini}{
      width: 45.1rem;
      /* background-color: orange; */
     }

    //smallTablet: "526px",  
    @media ${media.smallTablet}{
      width: 26.1rem;
    }
    //pixel7a: "427px",  
    @media ${media.pixel7a}{
      width: 23.1rem;
    }

    //fold: "426px",  
    @media ${media.fold}{
      width: 23.1rem;
    }

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
    font-size: 1.875rem;
    font-weight: 300;
    color: #272727;
    position: relative;
    margin-bottom: 0,625rem;
    

    &::before {
    content: '';
    display: inline-block;
    width: 40px;
    height: 2px;
    background-color: #272727;
    margin: 0 8px 4px 0;
    /* margin-right: 8px;
    margin-bottom: 4px; */
    vertical-align: middle;
  }

  //galaxyS: "360px",  
    @media ${media.galaxyS}{
      font-size: 1.8rem;
      
    }
  //mobileS: "320px",  
    @media ${media.mobileS}{
      font-size: 1.4rem;
      
    }
`;

export const TitleInfor = styled.h3`
    color: #E0E0E0;
    font-size: 5.188rem;
    font-weight: 300;
    line-height: 1;

    //laptop: "1024px",
     @media ${media.laptop}{
      font-size: 4.1rem;
     }

    @media ${media.ipadMini} {
      font-size: 3.7rem;
    }

    //tablet: "768px",  
    @media ${media.tablet}{
      font-size: 3.5rem;
    }

    //galaxyS: "360px",  
    @media ${media.galaxyS}{
      font-size: 3.2rem;
    }
    //mobileS: "320px",  
    @media ${media.mobileS}{
      font-size: 2.8rem;
    }
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
    padding: 10px 20px;
    background: linear-gradient(90deg, #111 0%, #222 100%);
    color: #fff;
    border: 1px solid #00ffe5;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    z-index: 1;
    transition: background 0.5s, transform 0.3s;
    margin-top: 8px;

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
    max-width: 32.75rem;
    max-height: 25.875rem;
    overflow: hidden;
    /* background-color:rgb(43, 184, 202); */

    //laptop: "1024px",
     @media ${media.laptop}{
      width: 28.0rem; 
     }

       //ipadMini: "820px",  
    @media ${media.ipadMini}{
      width: 40.1rem;
      /* background-color: red; */
    }
       //tablet: "768px",  
    @media ${media.tablet}{
      width: 39.1rem;
      /* background-color: red; */
    }

     //smallTablet: "526px",  
    @media ${media.smallTablet}{
      width: 29.1rem;
    }
     //pixel7a: "427px",  
    @media ${media.pixel7a}{
      width: 25.1rem;
    }
     //fold: "426px",  
    @media ${media.fold}{
      width: 25.1rem;
    }
     //fold: "414px",  
    @media ${media.iphoneXR}{
      width: 25.1rem;
    }

    //galaxyS: "360px",  
    @media ${media.galaxyS}{
      width: 22.1rem;
      /* background-color: red; */
    }
    //mobileS: "320px",  
    @media ${media.mobileS}{
      width: 18.1rem;
    }
`;