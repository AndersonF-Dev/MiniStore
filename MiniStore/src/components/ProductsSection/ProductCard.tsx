import React from 'react';
import { motion } from "framer-motion";
import { FaShoppingCart } from 'react-icons/fa';
import type {ProductCardProps} from './interfaces/ProductCard.interface'; // ajuste o caminho conforme necessário

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


const ProductCard: React.FC<ProductCardProps> = ({ 
  id, 
  image, 
  name, 
  price, 
  stock = 0,
  onAddToCart, 
}) => {

  return (
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
            <BtnAddCart disabled={stock <= 0} onClick={onAddToCart}>
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
          <ProductPrice>{Number(price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</ProductPrice>
        </Info>
      </CardWrapper>
    </motion.div>
  );
};

export default ProductCard;
