import ProductCard from '../../components/ProductsSection/ProductCard';
import { useEffect, useState } from "react";
import type { ProductTypes } from '../../types/ProductTypes';

import {
  Conteiner,
  ResultsSortingConteiner,
  ResultsTitle,
  SortingTexto,
  PaginationWrapper,
  PageButton,
  CardContainer
} from './styleProductsShop'

type Props = {
  products: ProductTypes[];
};


const ProductsShop: React.FC<Props> = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(9);

  // Atualiza o número de produtos por página com base na largura da tela
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width <= 526) {
        setProductsPerPage(5);
      } else if (width <= 834) {
        setProductsPerPage(10);
      } else {
        setProductsPerPage(9);
      }
    };

    handleResize(); // Aplica na primeira renderização

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const totalPages = Math.ceil(products.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + productsPerPage);

  return (
    <Conteiner>
      <ResultsSortingConteiner>
        <ResultsTitle>
          {products.length > 0 ? (
            <>
              Mostrando {startIndex + 1}–{Math.min(startIndex + productsPerPage, products.length)} de {products.length} resultados
            </>
          ) : (
            'Nenhum produto encontrado'
          )}
        </ResultsTitle>

        <SortingTexto>
          {/* Aqui pode vir um dropdown ou filtro de ordenação futuramente */}
        </SortingTexto>
      </ResultsSortingConteiner>

      <CardContainer
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        {currentProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            name={product.name}
            price={product.price} // recebe número e formata no ProductCard
            stock={product.stock}
          />
        ))}
      </CardContainer>

      <PaginationWrapper>
        {[...Array(totalPages)].map((_, index) => (
          <PageButton
            key={index}
            active={currentPage === index + 1}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </PageButton>
        ))}
      </PaginationWrapper>
    </Conteiner>
  );
};

export default ProductsShop;
