// import React from 'react';
// import Nav from '../../components/Nav/Nav';
import Slider from '../../components/Slider/Slider';
import Features from '../../components/Features/Features';
import LatestPosts from '../../components/LatestPosts/LatestPosts';
import homeFeatures from '../../data/HomeFeaturesData';
import posts from '../../data/PostData';
import Sale from '../../components/Sale/Sale';
import ProductsSection from '../../components/ProductsSection/ProductsSection';
import { mobileProducts, watchProducts } from '../../data/productsData';
import {
    Conteiner
} from './StyleHome';

const Home = () => {
  return (
    <Conteiner>
        {/* <Nav /> */}
        <Slider />
        <Features items={homeFeatures} />
        <ProductsSection 
            title="Produtos Móveis"
            endpoint="/api/mobiles" // só para referência futura 
            fallbackData={mobileProducts} />
        <ProductsSection 
            title="Relógios Inteligentes"
            endpoint="/api/smartwatches" 
            fallbackData={watchProducts} />
        <Sale />
        <LatestPosts
          title="Últimas postagens"
          buttonText="Ler blogs"
          posts={posts}
          redirectTo="/blog"
        />

        <h1>Home</h1>
    </Conteiner>
  )
}

export default Home