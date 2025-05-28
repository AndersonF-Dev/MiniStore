import styled from "styled-components";
import { media } from "../../styles/theme/media";

// import { SlArrowLeft, SlArrowRight  } from "react-icons/sl";
// import { FaStar } from "react-icons/fa";

export const Conteiner = styled.section`
    width: 72.75rem;
    height: 15rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    /* background-color: violet; */

    //laptop: "1024px", 
    @media ${media.laptop}{
        width: 64.1rem;
        overflow: hidden;
        padding: 0 .6rem;
        
        /* background-color: violet; */
    }

    //ipadMini: "820px",
    @media ${media.ipadMini} {
      width: 51.1rem;
      padding: 0 .6rem;
      /* background-color:rgb(75, 204, 58); */
   }
    //tablet: "768px",
    @media ${media.tablet} {
      width: 47.9rem;
      padding: 0 .6rem;
      /* background-color:rgb(75, 204, 58); */
   }

    //smallTablet: "526px",
    @media ${media.smallTablet} {
      width: 32.6rem;
      padding: 0 .6rem;
      /* background-color:rgb(75, 204, 58); */
   }
    //pixel7a: "427px",
    @media ${media.pixel7a} {
      width: 26.5rem;
      padding: 0 .6rem;
      /* background-color:rgb(75, 204, 58); */
   }
    //fold: "426px",
    @media ${media.fold} {
      width: 26.5rem;
      padding: 0 .6rem;
      /* background-color:rgb(75, 204, 58); */
   }
    //mobileS: "320px",
    @media ${media.mobileS} {
      width: 20.0rem;
      padding: 0 .6rem;
      /* background-color:rgb(75, 204, 58); */
   }
    //galaxyS: "360px",
    @media ${media.galaxyS} {
      width: 22.4rem;
      padding: 0 .6rem;
      /* background-color:rgb(75, 204, 58); */
   }
`;

export const Content = styled.div`
    width: 60rem;
    max-height: 15rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    overflow: hidden;
    word-wrap: break-word; 

    /* background-color: cadetblue; */

    //pixel7a: "427px",
    @media ${media.pixel7a} {
        width: 20.1rem;
        height: 14.2rem;
    }
    //fold: "426px",
    @media ${media.fold} {
        width: 20.1rem;
        height: 14.2rem;
    }
    //galaxyS: "360px",
    @media ${media.galaxyS} {
        width: 17.0rem;
        height: 14.2rem;
    }
    //mobileS: "320px",
    @media ${media.mobileS} {
        width: 14.1rem;
        height: 14.2rem;
    }
`;


export const ArrowWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #D7DDDF;
  font-size: 32px;
`;

export const Img = styled.img`
    width: 4rem;
`;

export const Review = styled.p`
    width: 60rem;
    color: #E0E0E0;
    font-size: 1.5rem;
    font-weight: 300;
    white-space: normal;
    word-wrap: break-word;
    overflow-wrap: break-word;

    /* background-color: blue; */

    //ipadMini: "820px",
    @media ${media.ipadMini} {
      width: 40rem;
      font-size: 1.2rem;
      /* background-color:rgb(204, 58, 58); */
   }

   //smallTablet: "526px",
    @media ${media.smallTablet} {
        width: 27.0rem;
        font-size: 0.9rem;
    }
   //pixel7a: "427px",
    @media ${media.pixel7a} {
        width: 20.1rem;
        font-size: 0.9rem;
    }
   //fold: "426px",
    @media ${media.fold} {
        width: 20.1rem;
        font-size: 0.9rem;
    }
   //galaxyS: "360px",
    @media ${media.galaxyS} {
        width: 17.0rem;
        font-size: 0.7rem;
    }
   //mobileS: "320px",
    @media ${media.mobileS} {
        width: 14.0rem;
        font-size: 0.7rem;
    }
`;

export const ReviewStarNameConteiner = styled.div`
    width: 7.938rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: .3rem;
`;

export const StarContenter = styled.div`
    display: flex;
`;

export const StyledIconWrapper = styled.span<{ isActive: boolean }>`
    opacity: ${({ isActive }) => (isActive ? 1 : 0.3)};
    display: flex;
    align-items: center;
    justify-content: center;
    color: #00BCD4;    
    font-size: 1.375rem; 

    //pixel7a: "427px",
    @media ${media.pixel7a}{
        font-size: 1.0rem;
    }
`;

export const NameAutor = styled.span`
    color:  #B5B5B5;

    //pixel7a: "427px",
    @media ${media.pixel7a}{
        font-size: 0.8rem;
    }
`;