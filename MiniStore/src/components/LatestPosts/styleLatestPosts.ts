import styled from "styled-components";
import { Link } from 'react-router-dom';
import { media, mixins, colors } from "../../styles/theme/media";

export const Conteiner = styled.section`
    max-width: 72.75rem;
    width: 100%;

    ${mixins.flexColumnJustifyCentert}

    height: auto;
    padding: 0.625rem;
    margin: 5rem 0;
`;

export const TitleBtnWrapper = styled.div`
    width: 100%;
    ${mixins.flexSpaceBetween}
    padding: .5rem 0;
`;

export const Title = styled.h3`
     font-size: clamp(1rem, 2.5vw, 1.575rem);
    ${colors.title}
`;

export const BtnReadBlogs = styled.button`
    width: 6.125rem;
    background: none;
    cursor: pointer;
    
    ${colors.accent}
    border: none;
    border-bottom: 0.188rem solid #43C5D5;
`;

export const PostsWrapper = styled.div`
    width: 100%;
    max-width: 59rem;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
    gap: 1.0rem;

    padding: 0;
    margin: 0 auto; 

    //ipadMini: "837px",
    @media ${media.ipadMini} {
        grid-template-columns: repeat(2, 1fr);
   
        width: 70%;
        gap: 1.9rem;
        text-align: center;
        padding: .1rem;
    }
    //Blackberry: "600px",
    @media ${media.Blackberry} {
        grid-template-columns: repeat(2, 1fr);
        width: 100%;
        gap: 1.0rem;

    }
    //smallTablet: "526px",
    @media ${media.smallTablet} {
     grid-template-columns: repeat(2, 1fr);
     width: 100%;
     text-align: center;
     place-items: center;
    }
    //pixel7a: "427px",
    @media ${media.pixel7a}{
    grid-template-columns: 1fr;
    text-align: center;
    }
`;

export const Posts = styled.div`
    width: auto;
    height: auto;
    overflow: hidden;

    ${mixins.flexJustifyCenterColumn}
`;

export const ImgPost = styled.img`
    width: 98%;
    max-width: 16.85rem;
    height: 17.625rem;
    border-radius: 0.958rem;
    margin-bottom: 0.8rem;
    
     //laptop: "1024px", 
    @media ${media.laptop}{
        width: 14.0rem;
        height: 15.7rem;
    }

    @media ${media.smallTablet}{
        width: 14.4rem;
    }
`;

export const InforPostWrapper = styled.div`
    width: 100%;
    max-width: 16.85rem;

    ${mixins.flexColumn}
    gap: .5rem;

    padding-top: .5rem;
    text-align: left;

    //pixel7a: "427px",
   @media ${media.pixel7a}{
    text-align: center;
   }
`;

export const DatePost = styled.span`
    font-size: 0.813rem;
    ${colors.subtitle}
`;

export const TitlePost = styled.h2`
    font-size: 1.15rem;
    ${colors.title}
    transform: scale(1);
    transition: transform 0.3s ease;

     &:hover {
        transform: scale(.97);    
      ${colors.accent}
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  ${colors.title}
  font-weight: 500;

  &:hover {
      ${colors.accent}
      text-decoration: underline;
  }
`;