import styled from 'styled-components';

export const FormWrapper = styled.div`
  width: 50%;
  margin: 2rem auto;
  padding: 2px;
  background-color: transparent;
  border-radius: 12px;
  
  /* background-color: orange; */

   @media (max-width: 600px){
    width: 95%;
    /* background-color: red; */
   }
   @media (max-width: 360px){
    width: 100%;
    /* background-color: red; */
   }
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 8px;
  color: #E0E0E0;
`;

export const Description = styled.p`
  font-size: 16px;
  margin-bottom: 24px;
  color: #B5B5B5;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Column = styled.div`
  flex: 1;
  min-width: 250px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 6px;
  font-weight: bold;
    color: #E0E0E0;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  resize: vertical;
`;

export const Button = styled.button`
  padding: 12px 20px;
  background-color: #00bcd4;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  align-self: flex-start;
  cursor: pointer;

  &:hover {
    background-color: #0097a7;
  }
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 0.875rem;
  margin-top: 4px;
`;
