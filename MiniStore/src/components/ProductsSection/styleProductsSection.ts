import styled from "styled-components";

export const Wrapper = styled.section`
    width: 72.75rem;
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;

    /* background-color: blueviolet; */
`;

export const TitleBtnWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
   
    /* background-color: olivedrab; */
`;

export const TitleSection = styled.h3`
    font-size: 1.575rem;
    color: #E0E0E0;
    /* width: 100%; */
    
`;

export const BtnGoShop = styled.button`
    width: 6.125rem;
    background: none;
    border: none;
    cursor: pointer;
    color: #43C5D5;
    border-bottom: 0.188rem solid #43C5D5;
`;

// Estilo dos Items & Slider

export const ItemsSliderWrapper = styled.section`
    width: 15.375rem;
    height: 521px;
    display: flex;
    flex-wrap: wrap; /* permite quebrar a linha quando não cabe mais */
    gap: 5px; /* espaço entre os cards */
    justify-content: center; /* centraliza os cards */
    
    /* background-color: aqua; */
`;

export const CardWrapper = styled.div`
    width: 15.375rem;
    height: 25.438rem;
    display: flex;
    flex-direction: column;
    margin-top: .5rem;
    overflow: hidden;
    /* background-color: burlywood; */
`;

export const ProductImage = styled.img`
    border-radius: 1.563rem;
    width: 15.375rem;
    height: 22.438rem;
`;

export const Info = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    /* background-color: orange; */
`;

export const ProductName = styled.p`
    font-size: 1.1rem;
    max-width: 130px;
    max-height: 42px;
    font-weight: 600;
    overflow: hidden;
    text-align: left;
    color: #E0E0E0;
    /* background-color: aqua; */
`;

export const ProductPrice = styled.span`
    color: #43C5D5;
`;

// export const BtnAddCart = styled.button`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     gap: 6px; /* espaçamento entre ícone e texto */
//     position: absolute;
//     width: 150px;
//     bottom: 10px;
//     left: 50%;
//     transform: translate(-50%, 20px);
//     background-color: #272727;
//     color: #fff;
//     padding: 8px 14px;
//     border: none;
//     border-radius: 6px;
//     opacity: 0;
//     pointer-events: none;
//     transition: opacity 0.3s ease, transform 0.3s ease;
//     transition-delay: 0s; /* sem delay inicialmente */
//     font-size: 14px;
//     cursor: pointer;

//     svg {
//     font-size: 16px;
//     }

//     &:hover {
//         background-color: #333;
//     }
// `;

// export const BtnVerProduct = styled.button`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     gap: 6px; /* espaçamento entre ícone e texto */
//     position: absolute;
//     width: 150px;
//     bottom: 30px;
//     left: 50%;
//     transform: translate(-70%, 20px);
//     background-color: #272727;
//     color: #fff;
//     padding: 8px 14px;
//     border: none;
//     border-radius: 6px;
//     opacity: 0;
//     pointer-events: none;
//     transition: opacity 0.3s ease, transform 0.3s ease;
//     transition-delay: 0s; /* sem delay inicialmente */
//     font-size: 14px;
//     cursor: pointer;

//     svg {
//     font-size: 16px;
//     }

//     &:hover {
//         background-color: #333;
//     }
// `;

export const ImageWrapper = styled.div`



   position: relative;
  overflow: hidden;

  &:hover .buttons-wrapper {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 170px;
  gap: 8px;
  position: absolute;
  bottom: 10px;
  left: 35px;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s ease;
  z-index: 2;
  /* background-color: aqua; */

  &.buttons-wrapper {
    pointer-events: none;
  }

  button {
    pointer-events: auto;
  }
`;

export const BtnAddCart = styled.button`
  background-color: #272727;
  color: white;
  padding: 6px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #333;
}
`;

export const BtnVerProduct = styled.button`
  background-color: #43C5D5;
  color: white;
  padding: 6px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

    &:hover {
    background-color:rgb(43, 184, 202);
}
`;

