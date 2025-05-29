import styled from "styled-components";
// import { media } from "../../styles/theme/media";

export const Conteiner = styled.div`
    max-width: 1366px;
    min-width: 100%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    /* overflow: hidden; */
    /* justify-content: center; */
    /* border: 1px solid orange;
    width: 72.75rem; */
    /* background-color: orange; */
    /* width: 500px;
    height: 500px; */

     @media (max-width: ${({ theme}) => theme.breakpoints.ipadMini}) {
     /* grid-template-columns: 1fr; */
     max-width: 60rem;
     text-align: center;
     place-items: center;
     /* background-color: aqua; */
   }
`;