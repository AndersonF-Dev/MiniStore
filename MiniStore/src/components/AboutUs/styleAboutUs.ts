import styled from "styled-components";
import { media, mixins } from "../../styles/theme/media";

export const Conteiner = styled.section`
    ${mixins.flexCenter}
    width: 72.75rem;
    margin: 0 0 80px 0;
    /* background-color: rebeccapurple; */
`;

export const Wrapper = styled.div`
    ${mixins.flexSpaceBetween}
    width: 50.1rem;
    /* background-color: orange; */
`;

export const Img = styled.img`
    max-width: 340px;
    /* height: 403px; */
`;

export const InfortWrapper = styled.div`
    width: 470px;
    text-align: left;
    /* background-color: red; */
`;

export const Title = styled.h2`
    font-size: 30px;
    color: #E0E0E0;
    padding: 0.5rem 0;
`;
export const TextInfor = styled.p`
    font-size: 1rem;
    color: #B5B5B5;
    margin-bottom: 1rem;
    /* white-space: pre-line; */
`;
export const BtnStore = styled.button`
    /* width: 230px; */
    padding: 1rem 1rem;
    cursor: pointer;
    border: none;
    border-radius: 15px;
    color: #3A3A3A;
    margin-top: 1rem;
    background-color: #00BCD4;

    &:hover {
    background-color:rgb(5, 211, 238);
  }
`;