import styled from "styled-components";
import { media, mixins, colors } from "../../styles/theme/media";

export const Wrapper = styled.section`
  width: 100%;
  max-width: 72.75rem;
  padding: 0.625rem;
  margin: 0 0 30px 0;
  ${mixins.flexColumnJustifyCentert}
`;

export const TitleBtnWrapper = styled.div`
  width: 100%;
  ${mixins.flexBetween}
  gap: 1rem;
`;

export const TitleSection = styled.h3`
  font-size: clamp(1.1rem, 2vw + 0.5rem, 1.575rem);
  ${colors.title}
    
`;

export const BtnGoShop = styled.button`
  width: 6.125rem;
  background: none;
  border: none;
  cursor: pointer;
  color: #43c5d5;
  border-bottom: 0.188rem solid #43c5d5;
`;

// Estilo dos Items & Slider

export const ItemsSliderWrapper = styled.section`
    max-width: 15.375rem;
    height: auto;
    ${mixins.flexJustifyCenterWrap}
    padding: .5rem;
    gap: 5px; /* espaço entre os cards */
`;

export const CardWrapper = styled.div`
  width: 100%;
  max-width: 15.375rem;
  height: auto;

  ${mixins.flexColumn}
  margin: 0 auto;

  margin-top: 0.5rem;
  overflow: hidden;
  padding: .2rem;

`;

export const ProductImage = styled.img`
  border-radius: 1.563rem;
  width: 100%;
  height: auto;
  aspect-ratio: 4 / 5;
  object-fit: cover;
`;

export const Info = styled.div`
    width: 100%;
    ${mixins.flexSpaceBetween}
    padding: 0 0.5rem;
`;

export const ProductName = styled.p`
    font-size: clamp(0.9rem, 1vw + 0.4rem, 1rem);
    max-width: 7.0rem;
    height: auto;
    font-weight: 600;
    overflow: hidden;
    text-align: left;
    ${colors.title}
`;

export const ProductPrice = styled.span`
    ${colors.accent}
    font-size: 1rem;

      //tablet: "768px",
    @media ${media.tablet}{
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
  width: 10.625rem;
  gap: 8px;
  position: absolute;
  bottom: 0.625rem;
  left: 35px;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s ease;
  z-index: 2;
 

  &.buttons-wrapper {
    pointer-events: none;
  }

  button {
    pointer-events: auto;
  }

    @media ${media.tablet} {
      left: 35px;
    }
    @media ${media.pixel7a} {
      width: 130px;
      left: 34px;
    }
    @media ${media.galaxyS} {
      left: 47px;
    }
`;

export const BtnAddCart = styled.button`
  color: white;
  padding: 0.375rem 0.225rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  background-color: #272727;

  &:hover {
    background-color: #333;
}
`;

export const BtnVerProduct = styled.button`
  color: white;
  padding: 0.375rem 0.625rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  background-color: #43C5D5;

    &:hover {
    background-color:rgb(43, 184, 202);
}
`;

export const OutOfStockBadge = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;

  color: white;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  font-weight: bold;

  border-radius: 0.25rem;
  background-color: red;
`;


