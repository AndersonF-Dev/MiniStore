import ProductCard from '../../components/ProductsSection/ProductCard';
// import { product } from "../../data/productsData";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { 
    Conteiner,
    ResultsSortingConteiner,
    ResultsTitle,
    SortingTexto,
    PaginationWrapper,
    PageButton,
    CardContainer
} from './styleProductsShop'
import type { ProductTypes } from '../../types/ProductTypes';

type Props = {
  products: ProductTypes[];
};

const PRODUCTS_PER_PAGE = 9;

const ProductsShop: React.FC<Props> = ({ products}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const currentProducts = products.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE
  );
  return (
    <Conteiner>
        <ResultsSortingConteiner>
            <ResultsTitle>
                Mostrando {startIndex + 1}–
                {Math.min(startIndex + PRODUCTS_PER_PAGE, products.length)} de {products.length} resultados
            </ResultsTitle>
            
            <SortingTexto>
                Classificação padrão
                <FiChevronDown />
            </SortingTexto>
        </ResultsSortingConteiner>
        <CardContainer style={{ display: "flex", alignItems: "center",justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
        {currentProducts.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          image={product.image}
          name={product.name}
          price={product.price.toLocaleString('pt-BR', {style: 'currency',currency: 'BRL',})}
          stock={product.stock}
        />
        ))}
        </CardContainer>

        {/* Paginação com estilo e números */}
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
  )
}

export default ProductsShop