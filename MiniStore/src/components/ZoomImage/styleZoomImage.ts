import styled from 'styled-components';

export const Container = styled.div`
  width: 390px;
  border-radius: 25px;
  
  overflow: hidden;
  position: relative;

  &:hover img {
    transform: scale(2); /* nível do zoom */
  }
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  transform: scale(1);
  transform-origin: center center;
  pointer-events: none;
`;
