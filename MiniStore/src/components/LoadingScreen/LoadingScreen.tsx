// src/components/LoadingScreen.tsx
import  { useEffect, useState } from 'react';
import ministoreLogo from '../../assets/logo.svg'; // caminho ajustado
import {
    Overlay,
    Logo,
    ProgressBar,
    Progress
} from './StyleLoadingScreen'

interface LoadingScreenProps {
  onFinish: () => void;
}

const LoadingScreen = ({ onFinish }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 1;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => onFinish(), 500);
        }
        return next;
      });
    }, 25); // velocidade da barra

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <Overlay>
      <Logo src={ministoreLogo} alt="Logo" />
      <ProgressBar>
        <Progress style={{ width: `${progress}%` }} />
      </ProgressBar>
    </Overlay>
  );
};

export default LoadingScreen;
