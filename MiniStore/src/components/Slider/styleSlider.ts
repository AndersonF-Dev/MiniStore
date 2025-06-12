import styled from "styled-components";

interface ProgressProps {
  progress: number;
}

export const SliderWrapper = styled.div`
  width: 100%;
  max-width: 1367px; /* opcional, para não estourar em telas muito grandes */
  aspect-ratio: 16 / 4; /* mantém proporção mesmo com redimensionamento */
  position: relative;
  overflow: hidden;
  margin: 0 auto; 
`;

export const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ProgressWrapper = styled.div`
  width: 30%;
  max-width: 9.375rem;
  height: 0.375rem;

  position: absolute;
  bottom: 0.625rem;
  left: 50%;
  transform: translateX(-50%);
  
  background-color: #ccc;
  border-radius: 0.625rem;
  overflow: hidden;
`;

export const ProgressBar = styled.div<ProgressProps>`
  height: 100%;
  background-color: #007bff;
  width: ${({ progress }) => progress}%;
  transition: width 0.1s linear;
`;

