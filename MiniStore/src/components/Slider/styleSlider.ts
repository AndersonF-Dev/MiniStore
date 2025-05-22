import styled from "styled-components";

interface ProgressProps {
  progress: number;
}


export const SliderWrapper = styled.div`
  /* width: 1367px;
  height: 300px;
  position: relative;
  overflow: hidden;
  margin: 0 auto; */
   width: 100%;
  max-width: 1367px; /* opcional, para não estourar em telas muito grandes */
  aspect-ratio: 16 / 4; /* mantém proporção mesmo com redimensionamento */
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  /* border-radius: 0.5rem; */
`;

export const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ProgressWrapper = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  /* width: 150px; */
  width: 30%;
  max-width: 150px;
  height: 6px;
  background-color: #ccc;
  border-radius: 10px;
  overflow: hidden;
`;

export const ProgressBar = styled.div<ProgressProps>`
  height: 100%;
  background-color: #007bff;
  width: ${({ progress }) => progress}%;
  transition: width 0.1s linear;
`;

