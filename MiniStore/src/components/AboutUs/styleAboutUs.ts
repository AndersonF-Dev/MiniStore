import styled from "styled-components";
import { media, mixins, colors } from "../../styles/theme/media";

export const Conteiner = styled.section`
  ${mixins.flexCenter}
  max-width: 72.75rem;
  width: 100%;
  height: auto;
  margin: 0 0 80px 0;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  ${mixins.flexSpaceBetween}
  gap: 20px;
  max-width: 50.1rem;
  width: 100%;

  //laptop: "1024px",
  @media ${media.laptop} {
    padding: 0 2rem;
  }
  //ipadMini: "820px",
  @media ${media.ipadMini} {
    margin-top: 80px;
  }

  //Blackberry: "600px",
  @media ${media.Blackberry} {
    gap: 0.5rem;
    flex-direction: column;
    margin-top: 40px;
  }
`;

export const Img = styled.img`
  max-width: 21.25rem;
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 1.563rem;
  flex: 1;
`;

export const InfortWrapper = styled.div`
  width: 100%;
  text-align: left;
  flex: 1;
`;

export const Title = styled.h2`
  font-size: clamp(1.1rem, 2.5vw, 1.875rem);
  ${colors.title}
  padding: 0.5rem 0;
`;

export const TextInfor = styled.p`
  font-size: clamp(0.86rem, 1.5vw, 1rem);
  ${colors.subtitle}
  margin-bottom: .4rem;
`;

export const BtnStore = styled.button`
  padding: 1rem 1rem;
  cursor: pointer;
  border: none;
  border-radius: 0.938rem;
  color: #3a3a3a;
  font-weight: bold;
  margin-top: 1rem;
  background-color: #00bcd4;

  &:hover {
    background-color: rgb(5, 211, 238);
  }
`;
