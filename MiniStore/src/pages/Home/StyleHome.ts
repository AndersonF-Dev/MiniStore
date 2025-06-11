import styled from "styled-components";

// export const Conteiner = styled.div`
//     max-width: 1350px;
//     min-width: 95%;
    
//     display: flex;
//     flex-direction: column;
//     align-items: center;
    /* overflow: hidden; */
    /* justify-content: center; */
    /* border: 1px solid orange;
    width: 72.75rem; */
    /* background-color: orange; */
    /* width: 500px;
    height: 500px; */

    //  @media (max-width: ${({ theme}) => theme.breakpoints.ipadMini}) {
     /* grid-template-columns: 1fr; */
    //  max-width: 60rem;
    //  text-align: center;
    //  place-items: center;
     /* background-color: aqua; */
//    }
// `;

export const Conteiner = styled.div`
  width: 100%;
  max-width: 1350px;
  min-width: 320px;
  margin: 0 auto;
  padding: 1rem;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-size: clamp(1rem, 1.5vw, 1.2rem);

  /* background-color: orange; */
`;
