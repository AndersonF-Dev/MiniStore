// src/styles/media.ts
import { theme } from "../../styles/theme";

// Media queries
export const media = {
  mobileS: `(max-width: ${theme.breakpoints.mobileS})`,
  galaxyS: `(max-width: ${theme.breakpoints.galaxyS})`,
  iphoneXR: `(max-width: ${theme.breakpoints.iphoneXR})`,
  pixel7a: `(max-width: ${theme.breakpoints.pixel7a})`,
  fold: `(max-width: ${theme.breakpoints.fold})`,
  smallTablet: `(max-width: ${theme.breakpoints.smallTablet})`,
  tablet: `(max-width: ${theme.breakpoints.tablet})`,
  ipadMini: `(max-width: ${theme.breakpoints.ipadMini})`,
  laptop: `(min-width: ${theme.breakpoints.laptop})`,
  customDesktop: `(min-width: ${theme.breakpoints.customDesktop})`,
  laptopL: `(min-width: ${theme.breakpoints.laptopL})`,
};

// Cores
export const colors = {
  background: theme.colors.background,
  background_SubMenu: theme.colors.background_SubMenu,
  subtitle: theme.colors.subtitle,
  title: theme.colors.title,
  accent: theme.colors.accent,
  dark: theme.colors.dark,
  muted: theme.colors.muted,
};

// Fontes
export const fonts = {
  primary: theme.fonts.primary,
  secondary: theme.fonts.secondary,
};

// Tamanhos de fonte
export const fontSizes = {
  xs: theme.fontSizes.xs,
  sm: theme.fontSizes.sm,
  base: theme.fontSizes.base,
  lg: theme.fontSizes.lg,
  xl: theme.fontSizes.xl,
  xxl: theme.fontSizes.xxl,
  title: theme.fontSizes.title,
};

// Pesos de fonte
export const fontWeights = {
  light: theme.fontWeights.light,
  regular: theme.fontWeights.regular,
  medium: theme.fontWeights.medium,
  bold: theme.fontWeights.bold,
};

// Espaçamentos
export const spacing = {
  x: theme.spacing.x,
  xxs: theme.spacing.xxs,
  xxxs: theme.spacing.xxxs,
  xxxxs: theme.spacing.xxxxs,
  xxxxxs: theme.spacing.xxxxxs,
  sm: theme.spacing.sm,
  md: theme.spacing.md,
  lg: theme.spacing.lg,
  xl: theme.spacing.xl,
  xxl: theme.spacing.xxl,
};

// Bordas arredondadas
export const radii = {
  none: theme.radii.none,
  sm: theme.radii.sm,
  md: theme.radii.md,
  lg: theme.radii.lg,
  full: theme.radii.full,
};

// Sombras
export const shadows = {
  sm: theme.shadows.sm,
  md: theme.shadows.md,
  soft: theme.shadows.soft,
  lg: theme.shadows.lg,
};

// Breakpoints
export const breakpoints = {
  mobileS: theme.breakpoints.mobileS,
  galaxyS: theme.breakpoints.galaxyS,
  iphoneXR: theme.breakpoints.iphoneXR,
  fold: theme.breakpoints.fold,
  smallTablet: theme.breakpoints.smallTablet,
  tablet: theme.breakpoints.tablet,
  ipadMini: theme.breakpoints.ipadMini,
  laptop: theme.breakpoints.laptop,
  customDesktop: theme.breakpoints.customDesktop,
  laptopL: theme.breakpoints.laptopL,
};

// Mixins
export const mixins = {
  flexCenter: theme.mixins.flexCenter,
  center: theme.mixins.center,
  flexSpaceBetween: theme.mixins.flexSpaceBetween,
  flexJustifyCenterColumn: theme.mixins.flexJustifyCenterColumn,
  flexJustifyCenter: theme.mixins.flexJustifyCenter,
  flexAlignItemsStart: theme.mixins.flexAlignItemsStart,
  flexAlignStartColumn: theme.mixins.flexAlignStartColumn,
  flexAlignStartColumnCenter: theme.mixins.flexAlignStartColumnCenter,
  flexAlignItemsCenter: theme.mixins.flexAlignItemsCenter,
  fullWidth: theme.mixins.fullWidth,
  fullSize: theme.mixins.fullSize,
};

// Transições
export const transitions = {
  width: theme.transitions.width,
  default: theme.transitions.default,
  fast: theme.transitions.fast,
  all: theme.transitions.all,
  slow: theme.transitions.slow,
};

// Containers
export const containers = {
  s: theme.containers.s,
  ss: theme.containers.ss,
  sm: theme.containers.sm,
  ssm: theme.containers.ssm,
  md: theme.containers.md,
  lg: theme.containers.lg,
  xl: theme.containers.xl,
  xxl: theme.containers.xxl,
};

// Tamanhos
export const sizes = {
  largeContainer: theme.sizes.largeContainer,
  mediumContainer: theme.sizes.mediumContainer,
  smallContainer: theme.sizes.smallContainer,
};

// Larguras de layout
export const layoutWidths = {
  narrow: theme.layoutWidths.narrow,
  medium: theme.layoutWidths.medium,
  wide: theme.layoutWidths.wide,
};

// Offsets
export const offsets = {
  belowFull: theme.offsets.belowFull,
  belowHalf: theme.offsets.belowHalf,
};
