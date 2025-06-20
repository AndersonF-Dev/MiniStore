import styled from "styled-components";
import { media, mixins } from "../../styles/theme/media";

export const Conteiner = styled.div`
  ${mixins.flexAlignCentertColumn}
  width: 100%;
  max-width: 1365px;
  min-width: 320px;

  margin: 0 auto;
  box-sizing: border-box;
  font-size: clamp(1rem, 1.5vw, 1.2rem);

  padding: 0 0.5rem;


  @media ${media.ipadMini} {
    text-align: center;
    place-items: center;
  }
`;
