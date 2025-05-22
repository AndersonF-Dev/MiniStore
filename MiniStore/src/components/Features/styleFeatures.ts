import styled from "styled-components";
// import { theme } from "../../styles/theme";
// import { theme } from "../../styles/theme";

export const Conteiner = styled.section`
    width: 100%;
    width: 72.75rem;
    font-family: ${({ theme}) => theme.fonts.secondary};
    
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: bisque;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}){
        width: 49.7rem;
    }
`;

export const GridWrapper = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
  gap: .1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  background-color: orange;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
    /* width: 70%; */
    /* background-color: red; */
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const Conteiter = styled.div`
    /* display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); */
    width: 17.988rem;
    width: 100%;
    display: flex;
    gap: .5rem;
    margin: 80px 0 80px 0;

    /* padding: 1rem 0; */
    background-color: blue;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}){
        grid-template-columns: repeat(2, 1fr);
        margin: 10px 10px 10px 10px;
        /* align-items: center; */
        justify-content: center;
        /* background-color: red; */
        width: 22.988rem;
    }
`;

export const Icon = styled.img`
    /* margin-top: -14px; */
    height: 25px;
    /* background-color: black; */
`;

export const ConteinerText = styled.div`
    width: 14rem;
    text-align: left;
    /* background-color: cadetblue; */
`;

export const Title = styled.h4`
    font-size: 1.25rem;
    color: #E0E0E0;
`;

export const SubTitle = styled.p`
    font-size: 1rem;
    color: #B5B5B5;
`;