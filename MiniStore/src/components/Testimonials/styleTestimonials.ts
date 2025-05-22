import styled from "styled-components";
// import { SlArrowLeft, SlArrowRight  } from "react-icons/sl";
// import { FaStar } from "react-icons/fa";

export const Conteiner = styled.section`
    width: 72.75rem;
    height: 15rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    /* background-color: violet; */

     @media (max-width: ${({ theme}) => theme.breakpoints.tablet}) {
      width: 50rem;
      background-color:rgb(75, 204, 58);
   }
`;

export const Content = styled.div`
    width: 60rem;
    max-height: 15rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    /* background-color: cadetblue; */

      /* @media (max-width: ${({ theme}) => theme.breakpoints.tablet}) {
      width: 40rem;
      background-color:rgb(58, 204, 82);
   } */
`;


export const ArrowWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #D7DDDF;
  font-size: 32px;

    /* @media (max-width: ${({ theme}) => theme.breakpoints.tablet}) {
      width: 50rem;
      background-color:rgb(204, 58, 58);
   } */
`;

export const Img = styled.img`
    width: 4rem;
`;

export const Review = styled.p`
    width: 60rem;
    color: #E0E0E0;
    font-size: 1.5rem;
    font-weight: 300;

      @media (max-width: ${({ theme}) => theme.breakpoints.tablet}) {
      width: 40rem;
      font-size: 1.2rem;
      background-color:rgb(204, 58, 58);
   }
`;

export const ReviewStarNameConteiner = styled.div`
    width: 7.938rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    color: #00BCD4;    
    font-size: 22px; 
`;

export const NameAutor = styled.span`
    color:  #B5B5B5;
`;