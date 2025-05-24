import styled from "styled-components";

export const Conteiner = styled.div`
    display: flex;
    min-width: 95%;
    flex-direction: column;
    overflow: hidden;
    /* justify-content: center; */
    align-items: center;
    /* border: 1px solid orange;
    width: 72.75rem; */
    max-width: 1350px;
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
