// import React from 'react'
import PageHeader from '../../components/PageHeader/PageHeader';
// import { product } from '../../data/productsData';
import InstagramFeed from '../../components/InstagramFeed/InstagramFeed';
import Newsletter from '../../components/Newsletter/Newsletter';
import {
    Conteiner
} from './styleCheckout';
const Checkout = () => {
    const token = "IGQVJ..."; // Depois virá da sua API em Node.js
    

  return (
    <Conteiner>
        <PageHeader
            title="Checkout"
            breadcrumbs={[
            { name: "Início", path: "/" },
            { name: "Produtos", path: "/shop" },
            { name: "Checkout" }
        ]}
            // variant="product"
        />
        Checkout
        <Newsletter />
        <InstagramFeed token={token} />
    </Conteiner>
  )
}

export default Checkout