
import { useState, useEffect } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import ProductCard from './ProductCard';
import CartModal from '../../components/CartModal/CartModal';
import { useCart } from '../../context/CartContext'; 
import type { Product } from '../../types/ProductTypes'; // Certifique-se de que o caminho está correto
 // Certifique-se de que o caminho está correto


// interface Product {
//   id: number;
//   image: string;
//   name: string;
//   price: string;
//   stock?: number;
//   quantity?: number;
// }

// interface CartModalProps {
//   isVisible: boolean;
//   onClose: () => void;
//   product?: Product | null;
// }

interface ProductsCarouselProps {
  title: string;
  products: Product[];
}

const ProductsCarousel = ({ products }: ProductsCarouselProps) => {
  const { addToCart } = useCart();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { 
      perView: 4, 
      spacing: 10 
    },
     breakpoints: {
    "(max-width: 1280px)": {
      slides: { perView: 3, spacing: 10 },
    },
    "(max-width: 1024px)": {
      slides: { perView: 4, spacing: 10 },
    },

    "(max-width: 526px)": {
      slides: { perView: 3, spacing: 5 },
    },

    "(max-width: 427px)": {
      slides: { perView: 2, spacing: 5 },
    },

    "(max-width: 360px)": {
      slides: { perView: 1, spacing: 5 },
    },

    "(max-width: 320px)": {
      slides: { perView: 1, spacing: 5, origin: 'center'  },
    },
  },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
  });

  useEffect(() => {
    if (!slider?.current) return;

    const intervalId = window.setInterval(() => {
      if (!isPlaying) return;

      const currentIndex = slider.current.track.details.rel;
      const nextIndex = (currentIndex + 1) % slider.current.track.details.slides.length;
      slider.current.moveToIdx(nextIndex);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [slider, isPlaying]);

   const handleAddToCart = (product: Product) => {
    addToCart({
      id: Number(product.id),
      name: product.name,
      price: Number(product.price),
      image: product.image,
      quantity: 1,
    });
    setSelectedProduct({ ...product, quantity:1});
    setShowModal(true);
  };

  return (
    <>

      <div
        ref={sliderRef}
        className="keen-slider"
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
      >
        {products.map((product, index) => (
          <div className="keen-slider__slide" key={index}>
            <ProductCard
            key={product.id}
            {...product}
            id={Number(product.id)}
            price={String(product.price)}
            onAddToCart={() => handleAddToCart(product)}
          />
          </div>
        ))}
      </div>

      <div style={{
        marginTop: '12px',
        display: 'flex',
        justifyContent: 'center',
        gap: '6px'
      }}>
        {products.map((_, i) => (
          <div key={i} style={{
            width: 22,
            height: 4,
            backgroundColor: i === currentSlide ? '#111' : '#ccc',
            borderRadius: 2,
            transition: 'background-color 0.3s ease'
          }} />
        ))}
      </div>
      <CartModal
        isVisible={showModal}
        onClose={() => setShowModal(false)}
        product={selectedProduct}
      />
    </>
  );
};

export default ProductsCarousel;

