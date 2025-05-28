
export const theme = {
  colors: {
    background: "#3A3A3A", // Cor principal de fundo do site
    background_SubMenu: "rgba(58, 58, 58, 0.79)", // Fundo do submenu com transparência
    subtitle: "#B5B5B5", // Cor de subtítulos ou textos secundários
    title: "#E0E0E0", // Cor de títulos ou textos principais
    accent: "#00BCD4", // Cor de destaque (botões, links)
    dark: "#272727", // Cor escura para contrastes ou fundos alternativos
    muted: "#A0A0A0",
  },

  fonts: {
    primary: "'Jost', sans-serif", // Fonte principal usada no layout
    secondary: "'Lato', sans-serif", // Fonte secundária para textos alternativos
  },

  fontSizes: {
    xs: "0.75rem", // Fonte extra pequena – labels, legendas
    sm: "0.875rem", // Fonte pequena – menus, botões
    base: "1rem", // Tamanho padrão para parágrafos
    lg: "1.25rem", // Fonte grande – subtítulos
    xl: "1.5rem", // Fonte extra grande – títulos
    xxl: '1.8rem',
    title: "2rem", // Tamanho de fonte para títulos principais
  },

  fontWeights: {
    light: 300, // Peso leve da fonte – textos suaves
    regular: 400, // Peso padrão – corpo do texto
    medium: 500, // Peso médio – ênfases leves
    bold: 700, // Peso negrito – destaque forte
  },

  spacing: {
    x: "0",
    xxs: "0.25rem",
    xxxs: "0.3rem",   // Espaçamento muito pequeno
    xxxxs: "0.5rem",    // Espaçamento extra pequeno
    xxxxxs: "0.125rem",
    sm: "1rem",      // Espaçamento pequeno
    md: "1.5rem",    // Espaçamento médio
    lg: "1.8rem",    // Espaçamento médio-grande
    xl: "2rem",      // Espaçamento grande
    xxl: "3.75rem",
  },

  radii: {
    none: "0", // Sem borda arredondada
    sm: "0.25rem", // Arredondamento pequeno – botões, inputs
    md: "8px", // Arredondamento médio – padrão visual
    lg: "16px", // Arredondamento grande – cards, modais
    full: "9999px", // Arredondamento completo – botões circulares
  },

  shadows: {
    sm: "0 1px 3px rgba(0,0,0,0.1)", // Sombra pequena – destaque sutil
    md: "0 4px 6px rgba(0,0,0,0.1)", // Sombra média – cards, menus
    soft: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    lg: "0 10px 15px rgba(0,0,0,0.15)", // Sombra grande – modais, elementos destacados
  },

  zIndices: {
    base: 0, // Elemento padrão
    dropdown: 10, // Menus suspensos
    overlay: 100, // Camadas sobrepostas
    modal: 1000, // Modais
    tooltip: 1100, // Dicas e balões de informação
  },

  transitions: {
    width: "width 0.3s ease-in-out",
    default: "all 0.3s ease", // Transição padrão para animações suaves
    fast: "all 0.15s ease", // Transição rápida para feedback rápido
    all: "all 0.3s ease-in-out", // transição completa
    slow: "all 0.5s ease-out", 
  },

  containers: {
    s: "0.125rem",
    ss: "7.5rem",
    sm: "33.75rem", // Largura pequena – celulares
    ssm: "37.5rem",
    md: "45rem", // Largura média – tablets
    lg: "60rem", // Largura grande – laptops
    xl: "71.25rem", // Largura extra grande – desktops
    xxl: "72.75rem",
  },

  breakpoints: {
    mobileS: "320px",       // iPhone SE
    galaxyS: "360px",       // Galaxy S8/S10/A50
    iphoneXR: "414px",      // iPhone XR / 11
    pixel7a: "427px",
    fold: "426px",          // Galaxy Fold fechado
    smallTablet: "526px",   // Dispositivos intermediários
    tablet: "768px",        // Tablets em retrato
    ipadMini: "820px",      // iPad Mini / Air em retrato
    laptop: "1024px",       // Laptops pequenos
    customDesktop: "1365px",// Resolução intermediária comum (ex: notebooks maiores)
    laptopL: "1440px",      // Desktops grandes
  },

   mixins: {
    flexCenter: `
      display: flex;
      justify-content: center;
      align-items: center;
    `,

    center: `
      justify-content: center;
      align-items: center;
    `,

     flexSpaceBetween: `
      display: flex;
      justify-content: space-between;
      align-items: center;
    `,

    flexJustifyCenter: `
      display: flex;
      justify-content: center;
    `,
    flexAlignItemsCenter: `
      display: flex;
      align-items: center;
    `,
    
    // ${({ theme }) => theme.mixins.fullWidth}
     fullWidth: `
      width: 100%;
    `,
    // opcionalmente:
    fullSize: `
      width: 100%;
      height: 100%;
    `,
  },

  sizes: {
    largeContainer: "32.77rem",  // usado para seções amplas
    mediumContainer: "26.77rem", // usado para seções médias
    smallContainer: "22.77rem",  // usado para blocos pequenos
  },

  layoutWidths: {
    narrow: "30%",   // usado para colunas pequenas
    medium: "38%",   // colunas médias
    wide: "45%",     // colunas largas
  },

  offsets: {
  belowFull: "100%",   // Posiciona exatamente abaixo do pai
  belowHalf: "50%",    // Posiciona no meio do pai
},

};

