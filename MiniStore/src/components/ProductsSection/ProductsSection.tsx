import { useEffect, useState } from 'react';
import type { Product } from './interfaces/ProductsSectionInterfaces'
import type { ProductsSectionProps } from './interfaces/ProductsSectionInterfaces'
import ProductsCarousel from './ProductsCarousel'
import {
  Wrapper,
  TitleBtnWrapper,
  TitleSection,
  BtnGoShop,
} from './styleProductsSection'

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

  // Aqui garantimos que cada produto tem o campo `id` como número e `price` como número
  const productsWithId = products.map((product, index) => ({
    ...product,
    id: typeof product.id === 'number' ? product.id : index,
    price: typeof product.price === 'number' ? product.price : Number(product.price),
  }));

  return (
    <Wrapper>
      <TitleBtnWrapper>
        <TitleSection>{title}</TitleSection>
        <BtnGoShop
          onClick={() => window.location.href = '/shop'}
        >Ir para a loja
        </BtnGoShop>
      </TitleBtnWrapper>

      <ProductsCarousel products={productsWithId} title={title} />
    </Wrapper>
  )
}

export default ProductsSection;
