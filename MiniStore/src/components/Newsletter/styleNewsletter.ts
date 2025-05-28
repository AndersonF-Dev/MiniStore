import styled from "styled-components";
import { media } from "../../styles/theme/media";

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

    /* //laptop: "1024px",
    @media ${media.laptop} {
      width: 51rem;
       background-color:rgb(204, 58, 58); 
    } */

    //ipadMini: "820px",
    @media ${media.ipadMini} {
      width: 51rem;
      /* background-color:rgb(204, 58, 58); */
    }

   //tablet: "768px",
   @media ${media.tablet}{
    flex-direction: column;
    width: 48.1rem;
    height: 9.2rem;
    /* background-color: orange; */
   }
   //smallTablet: "526px",
   @media ${media.smallTablet}{
    flex-direction: column;
    height: 9.2rem;
    /* background-color: orange; */
   }

   //galaxyS: "360px",
   @media ${media.galaxyS}{
    flex-direction: column;
    width: 22.3rem;
    height: 9.2rem;
    /* background-color: orange; */
   }
   //mobileS: "320px",
   @media ${media.mobileS}{
    flex-direction: column;
    width: 20.0rem;
    height: 9.2rem;
    /* background-color: orange; */
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

     //tablet: "768px",
   @media ${media.tablet}{
    width: 25.1rem;
   }
     //galaxyS: "360px",
   @media ${media.galaxyS}{
    width: 25.1rem;
   }
    //mobileS: "320px",
   @media ${media.mobileS}{
    width: 20.1rem;
   }
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
  min-width: 140px;
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

  //laptop: "1024px",
  @media ${media.laptop}{
    margin-left: 3.9rem;
  }
  //ipadMini: "820px",
  @media ${media.ipadMini}{
    margin-left: 3.9rem;
  }
  //tablet: "768px",
  @media ${media.tablet}{
    margin-left: 2.7rem;
  }
  //smallTablet: "526px",
  @media ${media.smallTablet}{
    margin-left: 4.1rem;
  }

  //mobileS: "320px", 
  @media ${media.mobileS}{
    margin-left: 1.5rem;
  }
`;