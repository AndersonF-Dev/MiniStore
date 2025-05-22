// src/styles/GlobalStyle.ts
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-family: ${({ theme }) => theme.fonts.primary};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.title};
    /* scroll-behavior: smooth; */
  }

  body {
    min-height: 100vh;
    /* width: 100%; */
  }
`;
