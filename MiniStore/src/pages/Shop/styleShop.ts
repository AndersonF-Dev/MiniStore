import styled from "styled-components";
import { media, mixins, colors, fonts } from "../../styles/theme/media";

export const Conteiner = styled.section`
    width: 100%;
    max-width: 72.75rem;
    ${fonts.secondary};
    ${mixins.flexColumnCenterEvenly}
`;

export const ProductsSidebarWrapper = styled.section`
    ${mixins.flexSpaceEevenly}
    gap: 2rem;
    
    padding: 0 0.3rem;
    width: 100%;
    
     @media ${media.laptop}{
         gap: 1rem;
      }
`;

export const Button = styled.button`
  display: none;
  background: transparent;
  color: white;
  border: none;
  font-size: 1.25rem;
  padding: 0.313rem 0.625rem;
  margin-bottom: 2.5rem;

  cursor: pointer;

  @media (max-width: 600px) {
    display: block;
  }

  &:hover {
    ${colors.accent}
  }
`;