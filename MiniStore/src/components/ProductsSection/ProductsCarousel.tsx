
import { useState, useEffect } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import ProductCard from './ProductCard';
// import produto1 from '../../assets/img/v14_573.png'

// const products = [
//   { image: produto1, name: 'Produto 1', price: 'R$ 100,00' },
//   { image: produto1, name: 'Produto 2', price: 'R$ 200,00' },
//   { image: produto1, name: 'Produto 3', price: 'R$ 100,00' },
//   { image: produto1, name: 'Produto 4', price: 'R$ 200,00' },
//   { image: produto1, name: 'Produto 5', price: 'R$ 100,00' },
//   { image: produto1, name: 'Produto 6', price: 'R$ 200,00' },
//   { image: produto1, name: 'Produto 7', price: 'R$ 100,00' },
//   { image: produto1, name: 'Produto 8', price: 'R$ 200,00' },
//   { image: produto1, name: 'Produto 9', price: 'R$ 100,00' },
//   { image: produto1, name: 'Produto 10', price: 'R$ 200,00' },
//   // até 10 produtos
// ];

// const ProductsCarousel = () => {
//     const [currentSlide, setCurrentSlide] = useState(0);
//     const [isPlaying, setIsPlaying] = useState(true);
//     const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
//     slides: { perView: 4, spacing: 10 },
//     loop: true,
//     slideChanged(s) {
//       setCurrentSlide(s.track.details.rel);
//     },
//   });

// //   // autoplay com setInterval
// //   useEffect(() => {
// //     if (!slider) return;

// //     const interval = setInterval(() => {
// //       slider.next();
// //     }, 3000); // troca a cada 3 segundos

// //     return () => clearInterval(interval);
// //   }, [slider]);
//     useEffect(() => {
//     if (!slider?.current) return;

//     const intervalId = window.setInterval(() => {
//         if (!isPlaying) return;  // só troca se autoplay estiver ativo

//         const currentIndex = slider.current.track.details.rel;
//         const nextIndex = (currentIndex + 1) % slider.current.track.details.slides.length;
//         slider.current.moveToIdx(nextIndex);
//     }, 3000);

//     return () => clearInterval(intervalId);
//     }, [slider, isPlaying]);  // <--- adiciona isPlaying aqui

//    return (
//     <>
//         <div 
//             ref={sliderRef} 
//             className="keen-slider"
//             onMouseEnter={() => setIsPlaying(false)}
//             onMouseLeave={() => setIsPlaying(true)}
//         >
//         {products.map((product, index) => (
//           <div className="keen-slider__slide" key={index}>
//             <ProductCard {...product} />
//           </div>
//         ))}
//       </div>

//       {/* Barra de progresso */}
//       <div style={{
//         marginTop: '12px',
//         display: 'flex',
//         justifyContent: 'center',
//         gap: '6px'
//       }}>
//         {products.map((_, i) => (
//           <div key={i} style={{
//             width: 22,
//             height: 4,
//             backgroundColor: i === currentSlide ? '#111' : '#ccc',
//             borderRadius: 2,
//             transition: 'background-color 0.3s ease'
//           }} />
//         ))}
//       </div>
//     </>
//   );
// };

// export default ProductsCarousel;

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
    slides: { perView: 4, spacing: 10 },
    loop: true,
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
      {/* <h2 style={{ textAlign: 'center', marginBottom: '12px' }}>{title}</h2> */}

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

