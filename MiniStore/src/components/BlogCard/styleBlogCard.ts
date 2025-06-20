import styled from "styled-components";
import { media, mixins, colors } from "../../styles/theme/media";
import { Link } from "react-router-dom";

export const Conteiner = styled.section`
  max-width: 15.75rem;
  width: 100%;
  height: auto;
  margin: 1rem 0;
  padding: 0.2rem;

  //ipadMini: "820px",
  @media ${media.ipadMini} {
    ${mixins.flexColumn}
  }
`;

// export const TitleBtnWrapper = styled.div`
//   width: 100%;
//   ${mixins.flexSpaceBetween}
// `;

export const Title = styled.h3`
  font-size: 1.575rem;
  ${colors.title}

  //galaxyS: "360px",
   @media ${media.galaxyS} {
    font-size: 1.2rem;
  }
`;

export const BtnReadBlogs = styled.button`
  width: 6.125rem;
  background: none;
  border: none;
  cursor: pointer;
  color: #43c5d5;
  border-bottom: 0.188rem solid #43c5d5;
`;

export const PostsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }

  @media ${media.customDesktop} {
    grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  }

  @media ${media.ipadMini} {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.9rem;
    text-align: center;
    padding: 0.1rem;
  }
  //smallTablet: "526px",
  @media ${media.smallTablet} {
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
    width: 100%;
  }

  //pixel7a: "427px",
  @media ${media.pixel7a} {
    grid-template-columns: 1fr;
  }
`;

export const Posts = styled.div`
  max-width: 15.15rem;
  width: 100%;
  height: 22.9rem;
  overflow: hidden;

  //ipadMini: "834px",
  @media ${media.ipadMini} {
    width: 15.2rem;
  }
`;

export const ImgPost = styled.img`
  max-width: 16.85rem;
  width: 100%;
  height: 17.625rem;
  border-radius: 0.958rem;
`;

export const InforPostWrapper = styled.div`
  width: 100%;
  ${mixins.flexColumn}
  gap: .5rem;
  padding-top: 0.5rem;
  text-align: left;
`;

export const DatePost = styled.span`
  font-size: 0.813rem;
  ${colors.subtitle}
`;

export const TitlePost = styled.h2`
  font-size: 1.25rem;
  ${colors.title}
`;

export const CategoryLink = styled(Link)`
  ${colors.accent}
  text-decoration: none;

  &:hover {
    ${colors.title}
    text-decoration: underline;
  }
`;

export const TitlePostLink = styled(Link)`
  ${colors.accent}
  text-decoration: underline;

  &:hover {
    text-decoration: none;
    ${colors.title}
  }
`;
