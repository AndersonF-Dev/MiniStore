import styled from "styled-components";

interface ProgressProps {
  progress: number;
}


export const SliderWrapper = styled.div`
  width: 1367px;
  height: 300px;
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
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 150px;
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

