import styled, { keyframes } from 'styled-components';

export const fadeIn = keyframes`
  0% { opacity: 0; transform: scale(0.95); }
  100% { opacity: 1; transform: scale(1); }
`;

export const Overlay = styled.div`
   position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #272727; /* ou a cor do seu tema */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

export const Logo = styled.img`
  width: 220px;
  height: auto;
  margin-bottom: 2rem;
  opacity: 0;
  animation: fadeIn 1s ease-in forwards;

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`;

export const ProgressBar = styled.div`
  width: 60%;
  height: 8px;
  background: #333;
  border-radius: 4px;
  overflow: hidden;
`;

export const Progress = styled.div`
  height: 100%;
  background: #facc15; /* amarelo */
  transition: width 0.2s ease-in-out;
`;

// interface Props {
//   onFinish: () => void;
// }