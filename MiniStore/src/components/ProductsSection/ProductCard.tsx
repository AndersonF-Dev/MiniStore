
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

import {
  CardWrapper,
  ImageWrapper,
  ProductImage,
  Info,
  ProductName,
  ProductPrice,
  BtnAddCart,
  BtnVerProduct,
  ButtonsWrapper
} from './styleProductsSection'; // ou seu arquivo de estilos

type Props = {
  image: string;
  name: string;
  price: string;
};

const ProductCard: React.FC<Props> = ({ image, name, price }) => (
  <CardWrapper>
    <ImageWrapper>
        <ProductImage src={image} alt={name} />
        
      <ButtonsWrapper className="buttons-wrapper">
        <BtnAddCart>
          Adicionar ao <FaShoppingCart />
        </BtnAddCart>

        <BtnVerProduct>
          Ver produto 
        </BtnVerProduct>
      </ButtonsWrapper>
    </ImageWrapper>
    <Info>
      <ProductName>{name}</ProductName>
      <ProductPrice>{price}</ProductPrice>
    </Info>
  </CardWrapper>
);

export default ProductCard;
