import { useState } from "react";
import PageHeader from '../../components/PageHeader/PageHeader';
import Newsletter from '../../components/Newsletter/Newsletter';
import InstagramFeed from '../../components/InstagramFeed/InstagramFeed';
import ProductsShop from '../../components/ProductsShop/ProductsShop';
import Shopsidebar from '../../components/Shopsidebar/Shopsidebar'
import { 
    Conteiner,
    ProductsSidebarWrapper,
    Button
} from './styleShop'

const shop = () => {
    const token = "IGQVJ..."; // Depois virá da sua API em Node.js
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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
            <ProductsShop />
            {/* <Shopsidebar /> */}
        <Shopsidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        </ProductsSidebarWrapper>
        <Newsletter />
        <InstagramFeed token={token} />
    </Conteiner>
    </>
  )
}

export default shop