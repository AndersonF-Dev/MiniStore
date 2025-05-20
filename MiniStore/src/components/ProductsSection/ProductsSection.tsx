// import React from 'react'
// import { FaShoppingCart } from 'react-icons/fa';
// import produto1 from '../../assets/img/v14_573.png'
// import ProductsCarousel from './ProductsCarousel';
// import {
//     Wrapper,
//     TitleBtnWrapper,
//     TitleSection,
//     BtnGoShop,
// } from './styleProductsSection'

// const ProductsSection = () => {
//   return (
//     <Wrapper>
//         <TitleBtnWrapper>
        
//             <TitleSection>
//                 Produtos Móveis
//             </TitleSection>
//             <BtnGoShop>
//                 Ir para a loja
//             </BtnGoShop>
//         </TitleBtnWrapper>
//         {/* <ItemsSliderWrapper>
//             <ItemsCardsConteiner>
//                 <ImageWrapper>
//                     <ImgProduct src={produto1} alt='Iphone 10'/>
//                     <BtnAddCart>
//                         Adicionar item 
//                         <FaShoppingCart />
//                     </BtnAddCart>
//                 </ImageWrapper>
//                 <TitlePrecoCconteiner>
//                     <NomeProduto>Iphone 10</NomeProduto>
//                     <PrecoProduto>R$ 1.000,00</PrecoProduto>
//                 </TitlePrecoCconteiner>
//                 </ItemsCardsConteiner>


//         </ItemsSliderWrapper> */}
//         <ProductsCarousel />
//         ProductsSection
//     </Wrapper>
//   )
// }

// export default ProductsSection

// ProductsSection.tsx


import { useEffect, useState } from 'react';
import ProductsCarousel from './ProductsCarousel'
import {
  Wrapper,
  TitleBtnWrapper,
  TitleSection,
  BtnGoShop,
} from './styleProductsSection'

// type Product = {
//   id: string; // ou slug, que você vai usar no link
//   image: string;
//   name: string;
//   price: string;
// };

// type ProductsSectionProps = {
//   title: string;
//   products: Product[];
// };

interface Product {
//   id: string; // ou slug, que você vai usar no link
  image: string;
  name: string;
  price: string;
}

interface ProductsSectionProps {
  title: string;
  endpoint?: string; // URL da API futura
  fallbackData?: Product[]; // dados mockados temporários
}

const ProductsSection = ({ title, endpoint, fallbackData = [] }: ProductsSectionProps) => {
  const [products, setProducts] = useState<Product[]>(fallbackData);

  useEffect(() => {
    if (endpoint) {
      fetch(endpoint)
        .then(res => res.json())
        .then((data: Product[]) => setProducts(data))
        .catch(err => {
          console.error('Erro ao carregar produtos da API:', err);
          setProducts(fallbackData); // fallback se a API falhar
        });
    }
  }, [endpoint, fallbackData]);

// const ProductsSection = ({ title, products }: ProductsSectionProps) => {
  return (
    <Wrapper>
      <TitleBtnWrapper>
        <TitleSection>{title}</TitleSection>
        <BtnGoShop>Ir para a loja</BtnGoShop>
      </TitleBtnWrapper>

      <ProductsCarousel products={products} title={title} />
    </Wrapper>
  )
}

export default ProductsSection;
