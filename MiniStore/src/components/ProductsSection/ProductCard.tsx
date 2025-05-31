
import React from 'react';
import { motion } from "framer-motion";
// import { product } from '../../data/productsData';
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
  ButtonsWrapper,
  OutOfStockBadge
} from './styleProductsSection'; // ou seu arquivo de estilos

type Props = {
  id: number;
  image: string;
  name: string;
  price: string;
  colors: string[];
  size: string[];
  stock?: number; // novo
};

const ProductCard: React.FC<Props> = ({ id, image, name, price, stock = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3 }}
  >
    <CardWrapper>
      <ImageWrapper>
        <ProductImage src={image} alt={name} />

        {stock <= 0 && (
          <OutOfStockBadge>Esgotado</OutOfStockBadge>
        )}

        <ButtonsWrapper className="buttons-wrapper">
          <BtnAddCart disabled={stock <= 0}>
            Adicionar ao <FaShoppingCart />
          </BtnAddCart>
          <BtnVerProduct
             onClick={() => {
              window.open(`/product/${id}`, '_blank');
            }}
          >
            Ver produto
          </BtnVerProduct>
        </ButtonsWrapper>
      </ImageWrapper>
      <Info>
        <ProductName>{name}</ProductName>
        <ProductPrice>{price}</ProductPrice>
      </Info>
    </CardWrapper>
  </motion.div>
);

export default ProductCard;
