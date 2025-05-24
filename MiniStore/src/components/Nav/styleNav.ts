import styled from "styled-components";

interface SubmenuProps {
  visible: boolean;
}

interface ArrowProps {
  open: boolean;
}

interface NavbarItemProps {
    active?: boolean;
}
interface SubmenuItemProps {
    active?: boolean;
}


export const Conteiner = styled.div`
  ${({ theme }) => theme.mixins.fullWidth};
    /* width: 100%; */
  ${({ theme }) => theme.mixins.flexJustifyCenter}
    /* display: flex;
    justify-content: center; */
    
`;

export const Conteiter = styled.div`
    width: ${({ theme }) => theme.containers.xxl};
    /* width: 72.75rem; */
    ${({ theme }) => theme.mixins.flexSpaceBetween}
    flex-wrap: wrap;
    padding: ${({ theme }) => `${theme.spacing.xxxxs} ${theme.spacing.sm}`};

    background-color: ${({ theme }) => theme.colors.background};

     @media (max-width: ${({ theme }) => theme.breakpoints.smallTablet}) {
      width: ${({ theme }) => theme.sizes.largeContainer};
       /* width: 32.77rem; */
     }
     @media (max-width: ${({ theme }) => theme.breakpoints.fold}) {
      width: ${({ theme }) => theme.sizes.mediumContainer};
       /* width: 26.77rem; */
     }
     @media (max-width: ${({ theme }) => theme.breakpoints.galaxys}) {
      width: ${({ theme }) => theme.sizes.smallContainer};
       /* width: 22.77rem; */
     }
`;

export const Logo = styled.img`
  object-fit: cover;

  @media (max-width: ${({ theme }) => theme.breakpoints.ipadMini}) {
    display: none;
  }
`;

export const ConteinerNavbarRightIcon = styled.div`
    /* width: 600px; */
    width: ${({ theme }) => theme.containers.ssm};
`;

export const Vavbar = styled.nav`
  width: ${({ theme }) => theme.containers.ssm};
  /* width: 600px; */
  ${({ theme }) => theme.mixins.flexSpaceBetween}
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
  font-weight: ${({ theme }) => theme.fontWeights.bold}; 
  /* font-weight: 700; */

  @media (max-width: ${({ theme }) => theme.breakpoints.ipadMini}) {
    width: ${({ theme }) => theme.containers.ss};
    /* width: 120px; */
       
  }

`;
export const NavbarList = styled.ul<{ mobileMenuOpen?: boolean }>`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  /* gap: 1.5rem; */
    

  @media (max-width: ${({ theme }) => theme.breakpoints.ipadMini}) {
    width: ${({ theme }) => theme.layoutWidths.narrow};
    /* width: 30%; */
    flex-direction: column;
    position: absolute;

    top: ${({ theme }) => theme.spacing.xxl};
    /* top: 60px; */
    left: ${({ theme }) => theme.spacing.x};
    /* left: 0; */
    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.xl}`};
    /* padding: 1rem 2rem; */
    background: ${({ theme }) => theme.colors.background_SubMenu};
    /* background:rgba(58, 58, 58, 0.79); */

    display: ${({ mobileMenuOpen }) => (mobileMenuOpen ? 'flex' : 'none')};
    /* z-index: 1000; */
    z-index: ${({ theme }) => theme.zIndices.modal};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.fold}){
    width: ${({ theme }) => theme.layoutWidths.medium};
    /* width: 38%; */
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.galaxys}){
    /* width: 45%; */
    width: ${({ theme }) => theme.layoutWidths.wide};
  }
`;

export const NavbarItem = styled.li<NavbarItemProps>`
  list-style: none;
  color: ${({ theme }) => theme.colors.accent};
  position: relative;
  cursor: pointer;
  padding-bottom: ${({ theme }) => theme.spacing.xxs};
  /* padding-bottom: 4px; */

  &::after {
    content: '';
    position: absolute;

    bottom: ${({ theme }) => theme.spacing.x};
    /* bottom: 0; */
    left: ${({ theme }) => theme.spacing.x};
    /* left: 0; */
    height: ${({ theme }) => theme.containers.s};
    /* height: 2px; */

    width: ${({ active }) => (active ? '100%' : '0')};
    background-color: ${({ theme }) => theme.colors.accent};
    /* background-color: #00BCD4;  */
    transition: width ${({ theme }) => theme.transitions.width};
    /* transition: width 0.3s ease-in-out; */
  }

  &:hover::after {
    /* width: 100%; */
    ${({ theme }) => theme.mixins.fullWidth}
  }
  
`;


export const Submenu = styled.ul<SubmenuProps>`
  position: absolute;

  top: ${({ theme }) => theme.offsets.belowFull};
  /* top: 100%; */
  left: ${({ theme }) => theme.spacing.x};
  /* left: 0; */

  background-color: ${({ theme }) => theme.colors.background};
  /* background-color: #3A3A3A;  */
  
  padding: ${({ theme }) => `${theme.spacing.xxxxs} ${theme.spacing.x}`};
  /* padding: 0.5rem 0; */
  border-radius: ${({ theme }) => theme.radii.sm};
  /* border-radius: 0.25rem; */
  box-shadow: ${({ theme }) => theme.shadows.soft};
  /* box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); */

  display: ${({ visible }) => (visible ? 'block' : 'none')};
  z-index: 10;
`;

export const SubmenuItem = styled.li<SubmenuItemProps>`
  white-space: nowrap;
  list-style: none;
  cursor: pointer;

  padding: ${({ theme }) => `${theme.spacing.xxs} ${theme.spacing.sm}`};
  /* padding: 0.5rem 1rem; */
  padding-bottom: 4px;
  position: relative;

  &::after {
    content: '';
    position: absolute;

    bottom: ${({ theme }) => theme.spacing.x};
    /* bottom: 0; */
    left: ${({ theme }) => theme.spacing.x};
    /* left: 0; */
    height: ${({ theme }) => theme.spacing.xxxxxs};
    /* height: 2px; */

    width: ${({ active }) => (active ? '100%' : '0')};
     background-color: ${({ theme }) => theme.colors.accent}; 
    transition: ${({ theme }) => theme.transitions.width};
    /* background-color: #00BCD4; 
    transition: width 0.3s ease-in-out; */
  }

  &:hover::after {
    ${({ theme }) => theme.mixins.fullWidth}
    /* width: 100%; */
  }
`;

export const Arrow = styled.span<ArrowProps>`
  font-size: ${({ theme }) => theme.fontSizes.base};
  /* margin-left: 0.3rem; */
  display: inline-block;
  /* color: ${({ theme }) => theme.colors.muted}; */
  transition: transform 0.3s ease;
  transform: ${({ open }) => (open ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

export const IconContainer = styled.div`
  ${({ theme }) => theme.mixins.flexAlignItemsCenter}
  /* display: flex;
  align-items: center; */
  gap: ${({ theme }) => theme.spacing.md};
  /* gap: 1.5rem; */
`;

export const IconWrapper = styled.div`
font-size: ${({ theme }) => theme.fontSizes.xl};
  /* font-size: 1.5rem; */
  cursor: pointer;
  color: ${({ theme }) => theme.colors.muted};
  /* color: #A0A0A0; */

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const MobileMenuButton = styled.button<{ open: boolean }>`
  display: none;
  ${({ theme }) => theme.mixins.center}
  
  background: transparent;
  border: none;
  
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  color: ${({ open, theme }) => (open ? theme.colors.accent : theme.colors.muted)};
  transform: ${({ open }) => (open ? 'rotate(20deg) scale(1.1)' : 'rotate(0deg) scale(1)')};
  transition: ${({ theme }) => theme.transitions.default};

  @media (max-width: ${({ theme }) => theme.breakpoints.ipadMini}) {
    display: flex;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    transform: scale(1.2);
  }
`;