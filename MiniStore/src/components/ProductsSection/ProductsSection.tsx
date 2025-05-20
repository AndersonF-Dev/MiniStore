


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
