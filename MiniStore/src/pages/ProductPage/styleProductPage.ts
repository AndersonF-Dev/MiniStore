import styled from "styled-components";
// import { theme } from "../../styles/theme";
// import { media } from "../../styles/theme/media";

interface ButtonProps {
  variant?: 'primary' | 'secondary';
}

export const Conteiner = styled.section`
    width: 100%;
    max-width: 72.75rem;
    font-family: ${({ theme}) => theme.fonts.secondary};
    
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;

    /* margin-top: 80px; */
`;

export const SingleProductContainer = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    margin-top: 80px;

    /* background-color: orange; */
`;

export const Img = styled.img`
    width: 390px;
    border-radius: 25px;
`;

export const ItemSummaryWrapper = styled.div`
    width: 340px;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;

    /* background-color: black; */
`;

export const ProductNome = styled.h2`
    color: #E0E0E0;
    font-size: 20px;
`;

export const Price = styled.p`
    color: #00BcD4;
    margin-top: 0.5rem;
`;

export const Description = styled.p`
    font-size: 16px;
    font-weight: 300;
    text-align: left;
    color: #B5B5B5;
    margin-top: 0.5rem;
`; 

//estilos cores dos produtos
export const ConteinerProductColor = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: start;
    margin-top: 0.5rem;
`;

export const TitleColor = styled.h3`
    font-size: .9rem;
    color: #E0E0E0;
`;
export const ColorLint = styled.ul`
    list-style: none;
    display: flex;
    gap: 5px;
`;

export const ColorItem = styled.li`
    /* color: #B5B5B5; */
     width: 22px;
  height: 22px;
  border-radius: 50%;
  /* border: 2px solid #ddd; */
  cursor: pointer;
  transition: transform 0.2s;

  &.selected {
    border: 2px solid #B5B5B5;
    box-shadow: 0 0 0 2px #0002;
    transform: scale(1.1);
  }

  &:hover {
  }
`;

//estilos Tamalhos dos produtos
export const ConteinerSize = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: start;
    margin-top: 0.5rem;
`;

export const TitleSize = styled.h3`
    font-size: .9rem;
    color: #E0E0E0;
`;
export const SizeLint = styled.ul`
    list-style: none;
    display: flex;
    gap: 5px;
`;

export const SizeItem = styled.li`
    color: #B5B5B5;
    cursor: pointer;
    transition: 0.3s;

     &.selected {
    /* background-color: #000; */
    color: #00BcD4;
    font-weight: bold;
    transform: scale(1.1);
    /* border-color: #000; */
  }

  &:hover {
     color: #00BcD4;
  }
`;

//estilos BTN Adicionar ao carrinho e Comprar

export const ConteinerBtn = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 0.5rem;
`;

export const Button = styled.button<ButtonProps>`
     padding: 10px 20px;
      background-Color: #00BCD4;
      color: ${({ variant }) =>
    variant === 'secondary' ? '#E0E0E0' : '#272727'};
      border: none;
      border-Radius: 5px;
      cursor: pointer;
      font-Weight: bold;
       transition: background 0.3s;

  background-color: ${({ variant }) =>
    variant === 'secondary' ? '#1E1E1E' : '#00BCD4'};

     &:hover {
    opacity: 0.9;
  }
`;

//Estilos do SKU, categoria e tags

export const ProductMetaInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-top: 0.5rem;
    /* padding-top: 1rem; */
  /* border-top: 1px solid #eee; */
`;

export const MetaItem = styled.div`
  margin-bottom: 0.5rem;
`;

export const MetaLabel = styled.span`
  font-weight: bold;
  margin-right: 0.5rem;
`;

export const MetaValue = styled.span`
    margin-left: 5px;

    color: #B5B5B5;
`;
