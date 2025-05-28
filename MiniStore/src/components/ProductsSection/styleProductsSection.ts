import styled from "styled-components";
import { media } from "../../styles/theme/media";
import { theme } from "../../styles/theme";

export const Wrapper = styled.section`
  width: 100%;
  max-width: 72.75rem;
  padding: 10px ;
  margin: 0 0 30px 0;
  /* margin: 0 .9rem 5rem auto; */
  display: flex;
  flex-direction: column;
  justify-content: center;

    /* background-color: blueviolet; */

    //ipadMini: "820px",
    @media ${media.laptop}{
      padding: 10px ;
      max-width: 63.9rem;
      /* background-color: orange; */
    }
    //ipadMini: "820px",
    @media ${media.ipadMini}{
      padding: 10px ;
      max-width: 51.2rem;
      /* background-color: orange; */
    }

    /* //tablet: "768px",
    @media ${media.tablet}{
      max-width: 47.9rem;
    } */
    //tablet: "768px",
    @media ${media.tablet}{
      max-width: 47.9rem;
    }
      //smallTablet: "526px",
     @media ${media.smallTablet}{
      max-width: 32.8rem;
      /* margin-left: 5rem;
      max-width: 12rem; */
    }
    //pixel7a: "427px",
     @media ${media.pixel7a}{
      max-width: 26.6rem;
      /* margin-left: 5rem;
      max-width: 12rem; */
    }
    //galaxyS: "360px", 
    @media ${media.galaxyS}{
      max-width: 22.3rem;
    }
    //mobileS: "320px", 
    @media ${media.mobileS}{
      max-width: 19.9rem;
      
    }
`;

export const TitleBtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
   
    /* background-color: olivedrab; */
`;

export const TitleSection = styled.h3`
    font-size: 1.575rem;
    color: #E0E0E0;
    /* width: 100%; */
    
    @media ${media.galaxyS}{
      font-size: 1.1rem;
    }

    @media ${media.mobileS}{
      font-size: 1.1rem;
    }
`;

export const BtnGoShop = styled.button`
    /* width: 6.125rem;
    background: none;
    border: none;
    cursor: pointer;
    color: #43C5D5;
    border-bottom: 0.188rem solid #43C5D5; */

    width: 6.125rem;
  background: none;
  border: none;
  cursor: pointer;
  color: #43c5d5;
  border-bottom: 0.188rem solid #43c5d5;
`;

// Estilo dos Items & Slider

export const ItemsSliderWrapper = styled.section`
    width: 15.375rem;
    height: 521px;
    display: flex;
    padding: .5rem;
    flex-wrap: wrap; /* permite quebrar a linha quando não cabe mais */
    gap: 5px; /* espaço entre os cards */
    justify-content: center; /* centraliza os cards */
    
    background-color: aqua;

     @media ${media.pixel7a}{
      /* gap: 2px; */
      /* margin-left: 5rem;
      max-width: 12rem; */
    }
`;

export const CardWrapper = styled.div`
    /* width: 15.375rem;
    height: 25.438rem;
    display: flex;
    flex-direction: column;
    margin-top: .5rem;
    overflow: hidden; */
  width: 100%;
  max-width: 15.375rem;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
  overflow: hidden;
  padding: .3rem;

    /* background-color: burlywood; */

    @media (max-width: ${theme.breakpoints.ipadMini}) {
      max-width: 12rem;
      /* padding: .5rem; */
    }

    @media (max-width: ${theme.breakpoints.smallTablet}) {
      max-width: 10rem;
    }

      //smallTablet: "526px",
     @media ${media.smallTablet}{
      padding: 0;
     }

    @media ${media.pixel7a}{
      padding: 0;
      margin-left: 0.8rem;
      max-width: 11rem;
    }
    @media ${media.galaxyS}{
      margin-left: 5rem;
      max-width: 12rem;
    }
    @media ${media.mobileS}{
      margin-left: 3rem;
      max-width: 12rem;
    }
`;

export const ProductImage = styled.img`
    /* border-radius: 1.563rem;
    width: 15.375rem;
    height: 22.438rem; */
     border-radius: 1.563rem;
  width: 100%;
  height: auto;
  aspect-ratio: 4 / 5;
  object-fit: cover;
`;

export const Info = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    /* background-color: orange; */
`;

export const ProductName = styled.p`
    font-size: 1.1rem;
    max-width: 130px;
    /* min-width: 90px; */
    max-height: 42px;
    font-weight: 600;
    overflow: hidden;
    text-align: left;
    color: #E0E0E0;

    /* background-color: aqua; */

    @media (max-width: ${({ theme }) => theme.breakpoints.ipadMini}) {
      font-size: 1.2rem;
      max-width: 90px;
    }

     //tablet: "768px",
    @media ${media.tablet}{
      font-size: 1rem;
    }

      //smallTablet: "526px",
     @media ${media.smallTablet}{
      font-size: .9rem;
     }
`;

export const ProductPrice = styled.span`
    color: #43C5D5;

      //tablet: "768px",
    @media ${media.tablet}{
      font-size: .8rem;
    }

      //smallTablet: "526px",
     @media ${media.smallTablet}{
      font-size: .8rem;
     }
`;

export const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;

  &:hover .buttons-wrapper {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 170px;
  gap: 8px;
  position: absolute;
  bottom: 10px;
  left: 35px;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s ease;
  z-index: 2;
  /* background-color: aqua; */

  &.buttons-wrapper {
    pointer-events: none;
  }

  button {
    pointer-events: auto;
  }

    @media (max-width: ${({ theme }) => theme.breakpoints.ipadMini}) {
      width: 150px;
      left: 15px;
    }
`;

export const BtnAddCart = styled.button`
  background-color: #272727;
  color: white;
  padding: 6px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #333;
}
`;

export const BtnVerProduct = styled.button`
  background-color: #43C5D5;
  color: white;
  padding: 6px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

    &:hover {
    background-color:rgb(43, 184, 202);
}
`;

