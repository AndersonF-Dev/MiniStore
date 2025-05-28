
import { useState, useEffect } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import ProductCard from './ProductCard';


interface Product {
  image: string;
  name: string;
  price: string;
}

interface ProductsCarouselProps {
  title: string;
  products: Product[];
}

const ProductsCarousel = ({ products }: ProductsCarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

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
            <ProductCard {...product} />
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
    </>
  );
};

export default ProductsCarousel;

