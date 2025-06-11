import styled from "styled-components";

export const Conteiner = styled.section`
    width: 100%;
    max-width: 72.75rem;
    font-family: ${({ theme}) => theme.fonts.secondary};
    
    display: flex;
    align-items: center;
    flex-direction: column;

    margin-top: 1.875rem;
    
    /* background-color: black; */
    
    
`;

export const CommentsWrapper = styled.div`
    width: 100%;
    text-align: left;
`;

export const InforText = styled.span`
    /* font-size: 30px; */
    font-size: clamp(1.5rem, 2vw, 2rem);
    color: #E0E0E0;
   
    /* background-color: olive; */
    
`;

export const CommentsConteint = styled.div`
    display: flex;
    align-items: center;
    gap: 0.625rem;
    margin-top: 0.625rem;

     @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const CommentsImg = styled.img`
    width: 6.625rem;
    border-radius: 5px;
    
`;

export const CommentsInforWrapper = styled.div` 
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
    
`;

export const CommentsNameAutor = styled.h4`
    font-size: 0.875rem;
    font-weight: 400;
    color: #E0E0E0;
`; 

export const CommentsData =styled.span`
    font-size: 0.875rem;
    font-weight: 300;
    color: #B5B5B5;
`;

export const CommentsText = styled.p`
    font-size: 1rem;
    font-weight: 300;
    color: #B5B5B5;
`;
