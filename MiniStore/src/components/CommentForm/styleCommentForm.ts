import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  margin: 2rem auto;
  
  color: #B5B5B5;
  /* background: #fff; */
  border-radius: 8px;
  /* box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1); */
  /* font-family: 'Arial', sans-serif; */
  text-align: left;
`;

export const Title = styled.h2`
  font-size: 24px;
  color: #E0E0E0;
  margin-bottom: 15px;
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  resize: vertical;
`;

export const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 15px;
  

  label {
    font-weight: normal;
  }
`;

export const Checkbox = styled.input`
  transform: scale(1.2);
  background-color: transparent;
  border: 1px solid #CCCCCC;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #1E1E1E;
  color: #E0E0E0;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #2C2C2C;
    transform: scale(1.1);
  }
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 0.875rem;
  margin-top: 5px;
`;
