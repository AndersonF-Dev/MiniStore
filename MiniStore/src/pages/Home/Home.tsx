// import React from 'react';
import Nav from '../../components/Nav/Nav';
import Slider from '../../components/Slider/Slider';
import Features from '../../components/Features/Features';
import homeFeatures from '../../data/HomeFeaturesData';
import ProductsSection from '../../components/ProductsSection/ProductsSection'
// import produto1 from '../../assets/img/v14_573.png'
// import produto2 from '../../assets/img/relogio.png'
import { mobileProducts, watchProducts } from '../../data/productsData'
import {
    Conteiner
} from './StyleHome';

// const mobileProducts = [
//   { image: produto1, name: 'Iphone 10', price: 'R$ 1.000,00' },
//   { image: produto1, name: 'Samsung Galaxy', price: 'R$ 899,00' },
//   { image: produto1, name: 'Motorola G', price: 'R$ 799,00' },
// ]

// const smartwatchProducts = [
//   { image: produto2, name: 'Smartwatch X', price: 'R$ 299,00' },
//   { image: produto2, name: 'Smartwatch Y', price: 'R$ 399,00' },
// ]

const Home = () => {
  return (
    <Conteiner>
        <Nav />
        <Slider />
        <Features items={homeFeatures} />
        {/* <ProductsSection /> */}
        <ProductsSection 
            title="Produtos Móveis"
            endpoint="/api/mobiles" // só para referência futura 
            fallbackData={mobileProducts} />
        <ProductsSection 
            title="Relógios Inteligentes"
            endpoint="/api/smartwatches" 
            fallbackData={watchProducts} />
        <h1>Home</h1>
    </Conteiner>
  )
}

export default Home