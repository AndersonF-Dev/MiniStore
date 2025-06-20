import styled from "styled-components";
import { media, mixins, colors } from "../../styles/theme/media";

export const Conteiner = styled.section`
  width: 100%;
  max-width: 72.75rem;
  height: auto;

  ${mixins.flexSpaceBetween}

  overflow: hidden;
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
  ${colors.arrow}
  font-size: 32px;
`;

export const Img = styled.img`
  width: 4rem;
`;

export const Review = styled.p`
  width: 100%;
  color: #e0e0e0;
  font-size: clamp(0.7rem, 1.2vw, 2.9rem);
  font-weight: 300;
  text-align: center;
  white-space: normal;
  word-wrap: break-word;
  overflow-wrap: break-word;
  padding: 0 0.6rem;
`;

export const ReviewStarNameConteiner = styled.div`
  width: 7.938rem;

  ${mixins.flexJustifyCenterColumn}
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
  color: #00bcd4;
  font-size: 1.375rem;

  //pixel7a: "427px",
  @media ${media.pixel7a} {
    font-size: 1rem;
  }
`;

export const NameAutor = styled.span`
  ${colors.subtitle}
  font-size: 0.8rem;
`;
