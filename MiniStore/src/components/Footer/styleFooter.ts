import styled from "styled-components";
import { media, mixins, colors } from "../../styles/theme/media";

export const Conteiner = styled.footer`
  width: 100%;
  ${mixins.flexCenter}
  gap: 1rem;
  
  ${colors.title};
  ${colors.background_dark};
  padding: 2rem 0;

  //laptop: "1024px",
  @media ${media.ipadMini} {
    flex-direction: column;
  } 
`;

export const Company = styled.div`
  width: 100%;
  max-width: 28rem;

  ${mixins.flexColumnflexstart}
  padding: 0 0.5rem;
  
  //ipadMini: "820px",
  @media ${media.ipadMini} {
    align-items: center;
  }
`;

export const ImgLogo = styled.img`
  width: 13rem;
  padding: 1rem;
`;

export const InforCompany = styled.p`
  font-weight: 300;
  ${colors.subtitle};
  font-size: 1rem;
  margin-bottom: 1rem;

   //ipadMini: "820px",
  @media ${media.ipadMini} {
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
  transform: scale(1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.3);
    ${colors.accent};
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 0.8rem;
  padding: 1rem;

  @media ${media.ipadMini} {
    gap: 0.6rem;
    text-align: center;
    padding: 0.8rem;
  }

  @media ${media.smallTablet} {
    grid-template-columns: 1fr;
    text-align: center;
    place-items: center;
    padding: 0.5rem;
  }
`;

export const QuickLinksConteiner = styled.div`
  width: 100%;
  max-width: 10rem;
  text-align: left;

  @media ${media.smallTablet} {
    text-align: center;
  }
`;

export const QuickLinksTitle = styled.h2`
  font-size: 1.1rem;
  ${colors.title};
`;

export const QuickLinksList = styled.ul`
  list-style: none;
  text-align: left;
  margin: 0.2rem 0;
  padding: 0;

  @media ${media.smallTablet} {
    text-align: center;
  }
`;

export const QuickLinksItem = styled.li`
  ${colors.subtitle};
  font-size: .9rem;
  margin: 0.15rem 0;
  cursor: pointer;
  transition: color 0.3s ease, font-weight 0.3s ease, text-decoration 0.3s ease;

  &:hover {
    font-weight: 600;
    text-decoration: underline;
    ${colors.accent};
  }
`;

export const HelpInfoConteiner = styled.div`
  width: 100%;
  max-width: 11rem;
  text-align: left;
  /* background-color: olive; */

  @media ${media.smallTablet} {
    text-align: center;
  }
`;

export const HelpInfoTitle = styled.h2`
  font-size: 1.1rem;
  margin-bottom: 0.4rem;
  color: ${({ theme }) => theme.colors.title};
`;

export const HelpInfoList = styled.ul`
  list-style: none;
  font-size: .9rem;
  text-align: left;
  padding: 0;
  
  @media ${media.smallTablet} {
    text-align: center;
  }
`;

export const HelpInfoItem = styled.li`
  ${colors.subtitle};
  margin: 0.15rem 0;
  cursor: pointer;
   transition: color 0.3s ease, font-weight 0.3s ease, text-decoration 0.3s ease;

  &:hover {
    font-weight: 600;
    text-decoration: underline;
    ${colors.accent};
  }
`;

export const ContactUsConteiner = styled.div`
  width: 100%;
  max-width: 12rem;
  text-align: left;
  /* background-color: cadetblue; */

  @media ${media.smallTablet} {
    text-align: center;
  }
`;

export const ContactUsTitle = styled.h3`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.title};
  margin-bottom: 0.4rem;
`;

export const ContactUsInfor = styled.p`
  ${colors.subtitle};
  margin: 0.4rem 0;
  font-size: .9rem;
`;

export const ContactUsEmailPhone = styled.span`
  ${colors.title};
  font-size: 0.95rem;
  cursor: pointer;
  display: block;
  font-size: .8rem;
  transition: color 0.3s ease, font-weight 0.3s ease, text-decoration 0.3s ease;

  &:hover {
    font-weight: 600;
    text-decoration: underline;
    ${colors.accent};
  }
`;
