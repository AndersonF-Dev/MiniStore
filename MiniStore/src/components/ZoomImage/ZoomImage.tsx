import React, { useState } from 'react';
import { Container, StyledImg } from './styleZoomImage';

interface ZoomImageProps {
  src: string;
  alt: string;
}

const ZoomImage: React.FC<ZoomImageProps> = ({ src, alt }) => {
  const [origin, setOrigin] = useState('center center');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setOrigin(`${x}% ${y}%`);
  };

  const handleMouseLeave = () => {
    setOrigin('center center');
  };

  return (
    <Container onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <StyledImg src={src} alt={alt} style={{ transformOrigin: origin }} />
    </Container>
  );
};

export default ZoomImage;
