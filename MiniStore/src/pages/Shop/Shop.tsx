// import React from 'react'
import PageHeader from '../../components/PageHeader/PageHeader';
import Newsletter from '../../components/Newsletter/Newsletter';
import InstagramFeed from '../../components/InstagramFeed/InstagramFeed';
import ProductsShop from '../../components/ProductsShop/ProductsShop';
import { 
    Conteiner
} from './styleShop'

const shop = () => {
    const token = "IGQVJ..."; // Depois virá da sua API em Node.js
  return (
    <Conteiner>
        <PageHeader
            title="Produto"
            breadcrumbs={[
                { name: "Home", path: "/" },
                { name: "Produtos"},
            ]}
        />
        <ProductsShop />
        <Newsletter />
        <InstagramFeed token={token} />
    </Conteiner>
  )
}

export default shop