// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout'
import { useState } from 'react';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Shop from './pages/Shop/shop';
// import ProductPage from './pages/ProductPage/ProductPage';
// import Cart from './pages/Cart/Cart';
// import Checkout from './pages/Checkout/Checkout';
// import Blog from './pages/Blog/Blog';
// import BlogPost from './pages/BlogPost/BlogPost';
// import Contact from './pages/Contact/Contact';

function App() {
  const [loadingDone, setLoadingDone] = useState(false);

   if (!loadingDone) {
    return <LoadingScreen onFinish={() => setLoadingDone(true)} />;
   }
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
      {/* <Route path="/product/:id" element={<ProductPage />} /> */}
      {/* <Route path="/cart" element={<Cart />} /> */}
      {/* <Route path="/checkout" element={<Checkout />} /> */}
      {/* <Route path="/blog" element={<Blog />} /> */}
      {/* <Route path="/blog/:slug" element={<BlogPost />} /> */}
      {/* <Route path="/contact" element={<Contact />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
