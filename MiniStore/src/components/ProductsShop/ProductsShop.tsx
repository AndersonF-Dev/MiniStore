import ProductCard from '../../components/ProductsSection/ProductCard';
import { product } from "../../data/productsData";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { 
    Conteiner,
    ResultsSortingConteiner,
    ResultsTitle,
    SortingTexto,
    PaginationWrapper,
    PageButton
} from './styleProductsShop'

const PRODUCTS_PER_PAGE = 9;

const ProductsShop: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(product.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const currentProducts = product.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE
  );
  return (
    <Conteiner>
        <ResultsSortingConteiner>
            <ResultsTitle>
                Mostrando {startIndex + 1}–
                {Math.min(startIndex + PRODUCTS_PER_PAGE, product.length)} de {product.length} resultados
            </ResultsTitle>
            <SortingTexto>
                Classificação padrão
                <FiChevronDown />
            </SortingTexto>
        </ResultsSortingConteiner>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        {currentProducts.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
        />
        ))}
        </div>

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