import { useEffect, useState } from "react";
import PageHeader from '../../components/PageHeader/PageHeader';
import Newsletter from '../../components/Newsletter/Newsletter';
import InstagramFeed from '../../components/InstagramFeed/InstagramFeed';
import ProductsShop from '../../components/ProductsShop/ProductsShop';
import { product } from "../../data/productsData"; // ajuste se necessário
import type { ProductTypes } from "../../types/ProductTypes";
import Shopsidebar from '../../components/Shopsidebar/Shopsidebar';
import { 
    Conteiner,
    ProductsSidebarWrapper,
    Button
} from './styleShop'

const shop = () => {
    const token = "IGQVJ..."; // Depois virá da sua API em Node.js
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
     // Estado dos filtros
    const [activeFilter, setActiveFilter] = useState({
      categories: "",
      tags: "",
      brands: "",
      prices: "",
    });
     // Produtos filtrados
    const [filteredProducts, setFilteredProducts] = useState<ProductTypes[]>(product);
    // Função para simular filtragem local (vai ser substituída pela API depois)
    useEffect(() => {
      let filtered = [...product];

      if (activeFilter.categories && activeFilter.categories !== "All") {
        filtered = filtered.filter((p) => p.category === activeFilter.categories);
      }

      if (activeFilter.tags) {
        filtered = filtered.filter((p) => p.tags?.includes(activeFilter.tags));
      }

      if (activeFilter.brands) {
        filtered = filtered.filter((p) => p.brand === activeFilter.brands);
      }

      if (activeFilter.prices) {
        filtered = filtered.filter((p) => {
          const price = p.price;
          switch (activeFilter.prices) {
            case "Abaixo de R$100":
              return price < 100;
            case "R$100 - R$300":
              return price >= 100 && price < 300;
            case "R$300 - R$500":
              return price >= 300 && price < 500;
            case "Acima de R$500":
              return price >= 500;
            default:
              return true;
          }
        });
      }

      setFilteredProducts(filtered);
    }, [activeFilter]);

  return (
    <>
    <Conteiner>
        
        <PageHeader
            title="Produto"
            breadcrumbs={[
                { name: "Home", path: "/" },
                { name: "Produtos"},
            ]}
        />

        {/* Botão que aparece apenas no mobile para abrir a sidebar */}
      <Button onClick={() => setIsSidebarOpen(true)} className="toggle-button">
        ☰ Filtros
      </Button>
       
        <ProductsSidebarWrapper>
            <ProductsShop products={filteredProducts} />

        <Shopsidebar 
          isOpen={isSidebarOpen} 
          setIsOpen={setIsSidebarOpen} 
          context="shop"
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter} 
        />
        </ProductsSidebarWrapper>
        <Newsletter />
        <InstagramFeed token={token} />
    </Conteiner>
    </>
  )
}

export default shop

