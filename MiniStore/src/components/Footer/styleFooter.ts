

import styled from "styled-components";
import { media } from "../../styles/theme/media";

export const Conteiner = styled.footer`
  max-width: 84.375rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  /* height: 23.375rem; */
  color: ${({ theme }) => theme.colors.title};
  background-color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.fonts.secondary};
  padding: 2rem 1rem;

  //laptop: "1024px",
  @media ${media.ipadMini} {
    
    flex-direction: column;
    width: 61rem;
  } 
`;

export const Wrapper = styled.div`
  max-width: 50.1rem;
  width: 100%;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
    gap: 1rem;
   
    /* background-color: brown; */

    //ipadMini: "820px",
    @media ${media.ipadMini}  {
      gap: 1.0rem;
      text-align: center;
      padding: 1rem;
     /* place-items: center; */
   }
    //tablet: "768px",
    @media ${media.tablet}  {
      max-width: 48.1rem;
      gap: 1.0rem;
      text-align: center;
      padding: 1rem;
     /* place-items: center; */
   }

    // smallTablet: "526px",
    @media ${media.smallTablet}  {
      grid-template-columns: 1fr;
      text-align: center;
      place-items: center;
   }
`;

export const Company = styled.div`
  width: 49%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 0.5rem;

  /* background-color: blue; */

   //ipadMini: "820px",
  @media ${media.ipadMini} {
    width: 100%;
    align-items: center;
  }

   //tablet: "768px",
    @media ${media.tablet} {
       width: 81%;
    }

  // pixel7a: "427px",
  @media ${media.pixel7a} {
    width: 45%;
    align-items: center;
  }
  // fold: "426px",
  @media ${media.fold} {
    width: 45%;
    align-items: center;
  }
  // iphoneXR: "414px",
  @media ${media.iphoneXR} {
    width: 45%;
    align-items: center;
  }

  // smallTablet: "526px",
  @media ${media.smallTablet} {
    width: 56%;
    align-items: center;
  }

   // galaxyS: "360px",
  @media ${media.galaxyS} {
    width: 38%;
    padding: 0 0.5rem;
    align-items: center;
  }
   // mobileS: "320px",
  @media ${media.mobileS} {
    width: 34%;
    padding: 0 0.5rem;
    align-items: center;
  }

  
`;

export const ImgLogo = styled.img`
  width: 13rem;
  padding: 1rem;
`;

export const Infor = styled.p`
  /* width: 15.1rem; */
  font-weight: 300;
  color: ${({ theme }) => theme.colors.subtitle};
  font-size: 1rem;
  margin-bottom: 1rem;

  /* background-color: olive; */

  //laptop: "1024px",
   @media ${media.laptop} {

   }

  // smallTablet: "526px",
  @media ${media.smallTablet} {
     text-align: center;
  }
`;

export const SocialList = styled.ul`
  display: flex;
  list-style: none;
  gap: 1rem;
  padding: 0;
`;

export const SocialItem = styled.li`
  font-size: 1.4rem;
  cursor: pointer;
`;

export const QuickLinksConteiner = styled.div`
  width: 10.1rem;
  text-align: left;

  /* background-color: red; */
`;

export const QuickLinksTitle = styled.h2`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.title};
`;

export const QuickLinksList = styled.ul`
    list-style: none;
    text-align: left;
    margin: 0.2rem 0;
    cursor: pointer;

    &:hover {
        color: ${({ theme }) => theme.colors.accent};
    }
`;

export const QuickLinksItem = styled.li`
  color: ${({ theme }) => theme.colors.title};
  margin: 0.2rem 0;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const HelpInfoConteiner = styled.div`
  width: 12.2rem;
  text-align: left;

  /* background-color: olive; */
`;

export const HelpInfoTitle = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.title};
`;

export const HelpInfoList = styled.ul`
  list-style: none;
  text-align: left;
  padding: 0;
`;

export const HelpInfoItem = styled.li`
  color: ${({ theme }) => theme.colors.title};
  margin: 0.2rem 0;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const ContactUsConteiner = styled.div`
  max-width: 13rem;
  text-align: left;
  text-align: left;

  // background-color: cadetblue;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallTablet}) {
    /* width: 100%; */
    text-align: center;
  }
`;

export const ContactUsTitle = styled.h3`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.title};
  margin-bottom: 0.5rem;
`;

export const ContactUsInfor = styled.p`
  color: ${({ theme }) => theme.colors.subtitle};
  margin: 0.5rem 0;
`;

export const ContactUsEmailPhone = styled.span`
  color: ${({ theme }) => theme.colors.title};
  font-size: 1rem;
  cursor: pointer;
  display: block;

  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.accent};
  }
`;
