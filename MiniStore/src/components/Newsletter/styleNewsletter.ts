import styled from "styled-components";

interface InputProps {
  hasError: boolean;
}

export const Conteiner = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 72.75rem;
    height: 10rem;
    background-color: #272727;

     @media (max-width: ${({ theme}) => theme.breakpoints.tablet}) {
      width: 51rem;
      background-color:rgb(204, 58, 58);
   }
`;

export const TextWrapper = styled.div`
    /* width: 29.563rem; */
    text-align: center;

    /* background-color: blueviolet; */
`;

export const Title = styled.h3`
    color: #E0E0E0;
`;

export const SubTitle = styled.p`
    color: #B5B5B5;
    font-weight: 300;
    font-size: 1rem;
`;

export const FormContent = styled.div`
    display: flex;
    width: 30rem;
    flex-direction: column;
    /* background-color: blue; */
`;
export const Form = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
`;

export const Input = styled.input<InputProps>`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid ${(props) => (props.hasError ? 'red' : '#ccc')};
  border-radius: 8px;
  width: 50%;
  min-width: 200px;
  outline: none;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ErrorMsg = styled.p`
  color: red;
  margin-top: 10px;
  font-size: 0.9rem;
  text-align: left;
  margin-left: .6rem;
`;