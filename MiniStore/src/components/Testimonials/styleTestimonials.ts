import styled from "styled-components";
import { media, mixins, colors } from "../../styles/theme/media";

export const Conteiner = styled.section`
    width: 100%;
    max-width: 72.75rem;
    height: auto;

    overflow: hidden;
    ${mixins.flexSpaceBetween}
    padding: 1rem;
`;

export const Content = styled.div`
    width: 100%;
    max-height: 15rem;

    ${mixins.flexJustifyCenterColumn}
    gap: 1rem;
    overflow: hidden;
    word-wrap: break-word; 

`;


export const ArrowWrapper = styled.div`
  cursor: pointer;
  ${mixins.flexCenter}
  /* color: #D7DDDF; */
  ${colors.arrow}
  font-size: 32px;
`;

export const Img = styled.img`
    width: 4rem;
`;

export const Review = styled.p`
    width: 100%;
    color: #E0E0E0;
    font-size: 1.5rem;
    font-size: clamp(0.7rem, 1.2vw, 1.5rem); 
    font-weight: 300;
    white-space: normal;
    word-wrap: break-word;
    overflow-wrap: break-word;
    padding: 0 .6rem;

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