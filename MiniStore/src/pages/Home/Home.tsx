// import React from 'react';
import Slider from '../../components/Slider/Slider';
import Features from '../../components/Features/Features';
import LatestPosts from '../../components/LatestPosts/LatestPosts';
import homeFeatures from '../../data/HomeFeaturesData';
import dataPost from '../../data/PostData';
import Sale from '../../components/Sale/Sale';
import Testimonials from '../../components/Testimonials/Testimonials';
import Newsletter from '../../components/Newsletter/Newsletter';
import InstagramFeed from '../../components/InstagramFeed/InstagramFeed';
import ProductsSection from '../../components/ProductsSection/ProductsSection';
import { mobileProducts, watchProducts } from '../../data/productsData';
// import CartModal from '../../components/CartModal/CartModal';
import {
    Conteiner
} from './StyleHome';

const Home = () => {
   const token = "IGQVJ..."; // Depois virá da sua API em Node.js
   const posts = dataPost.posts;


  return (
    <Conteiner>
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
        <Testimonials />
        <Newsletter />
        <InstagramFeed token={token} />
    </Conteiner>
  )
}

export default Home