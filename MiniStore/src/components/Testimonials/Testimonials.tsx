
// import quote from '../../assets/icon/double-quote.svg'
// import {
//     Conteiner,
//     Content,
//     Img,
//     Review,
//     ArrowLeft,
//     ArrowRight,
//     ReviewStarNameConteiner,
//     StarContenter,
//     Star,
//     NameAutor
// } from './styleTestimonials'

// const Testimonials = () => {
//   return (
//     <Conteiner>
//         <ArrowLeft />
//             <Content>
//                 <Img src={quote} alt="icon"/>
//                 <Review>
//                     “O desempenho desse celular me surpreendeu! Rápido, fluido e com um design elegante. A bateria dura o dia todo mesmo com uso intenso, e a qualidade da câmera é excelente — perfeita para registrar todos os momentos. Estou muito satisfeito com a minha escolha!”
//                 </Review>
//                 <ReviewStarNameConteiner>
//                     <StarContenter>
//                         <Star />
//                         <Star />
//                         <Star />
//                         <Star />
//                         <Star />
//                     </StarContenter>
//                     <NameAutor>
//                         Emma Chamberlin
//                     </NameAutor>
//                 </ReviewStarNameConteiner>
//             </Content>
//         <ArrowRight />
//     </Conteiner>
//   )
// }

// export default Testimonials

import { useEffect, useState } from 'react';
import { testimonialsData } from '../../data/testimonialsData';
import type { Testimonial } from '../../data/testimonialsData';
import { SlArrowLeft, SlArrowRight  } from "react-icons/sl";
import { FaStar } from "react-icons/fa";
import quote from '../../assets/icon/double-quote.svg';
import {
    Conteiner,
    Content,
    Img,
    Review,
    ArrowWrapper,
    ReviewStarNameConteiner,
    StarContenter,
    NameAutor,
    StyledIconWrapper
} from './styleTestimonials';


const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch('/api/testimonials');
        if (!res.ok) throw new Error('Erro na API');
        const data = await res.json();
        setTestimonials(data);
      } catch (err) {
        console.warn('Usando dados locais (fallback):', err);
        setTestimonials(testimonialsData); // fallback local
      }
    };

    fetchTestimonials();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials]);

  if (testimonials.length === 0) return null;

  const current = testimonials[currentIndex];

  const goToPrev = () => {
    setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex(prev => (prev + 1) % testimonials.length);
  };

  return (
    <Conteiner>
        <ArrowWrapper onClick={goToPrev}>
            <SlArrowLeft />
        </ArrowWrapper>
      <Content>
        <Img src={quote} alt="icon" />
        <Review>“{current.text}”</Review>
        <ReviewStarNameConteiner>
          <StarContenter>
                {[...Array(5)].map((_, i) => (
                    <StyledIconWrapper key={i} isActive={i < current.stars}>
                    <FaStar />
                    </StyledIconWrapper>
                ))}
            </StarContenter>
          <NameAutor>{current.author}</NameAutor>
        </ReviewStarNameConteiner>
      </Content>
        <ArrowWrapper onClick={goToNext}>
            <SlArrowRight />
        </ArrowWrapper>
    </Conteiner>
  );
};

export default Testimonials;
