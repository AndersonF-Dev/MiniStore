// Slider.tsx
import React, { useEffect, useRef, useState } from "react";
import banner1 from '../../assets/Banner1.png';
import banner2 from '../../assets/Banner2,2.png';
import banner3 from '../../assets/Banner3,3.png';
import {
    SliderWrapper,
    BannerImage,
    ProgressWrapper,
    ProgressBar
}from './styleSlider'

const images = [
  banner1,
  banner2,
  banner3,
];

const Slider: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<number | null>(null);


  useEffect(() => {
    const duration = 5000;
    const interval = 100;
    const increment = 100 / (duration / interval);

    intervalRef.current = window.setInterval(() => {
    setProgress((prev) => {
      if (prev + increment >= 100) {
        if (intervalRef.current !== null) {
          clearInterval(intervalRef.current);
        }
        setTimeout(() => {
          setIndex((prevIndex) => (prevIndex + 1) % images.length);
          setProgress(0);
        }, 200);
        return 100;
      }
      return prev + increment;
    });
  }, interval);

  return () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }
  };
}, [index]);

  return (
    <SliderWrapper>
      <BannerImage src={images[index]} alt={`Banner ${index + 1}`} />
      <ProgressWrapper>
        <ProgressBar progress={progress} />
      </ProgressWrapper>
    </SliderWrapper>
  );
};

export default Slider;
