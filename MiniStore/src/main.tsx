// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import { BrowserRouter } from 'react-router-dom'
// import App from './App.tsx'
// import './index.css'
// import { theme } from './styles/theme';

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <BrowserRouter theme={theme}>
//       <App />
//     </BrowserRouter>
//   </StrictMode>
// )

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'   // <-- importe aqui
import App from './App.tsx'
import './index.css'
import { theme } from './styles/theme'
import { GlobalStyle } from './styles/GlobalStyle';
import { CartProvider } from './context/CartContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider> {/* ⬅️ envolve tudo aqui */}
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </CartProvider>
    </BrowserRouter>
  </StrictMode>
)
