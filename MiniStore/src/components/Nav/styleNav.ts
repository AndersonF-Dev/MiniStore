import styled from "styled-components";
import type {
  SubmenuProps,
  ArrowProps,
  NavbarItemProps,
  SubmenuItemProps,
} from "./interfaceNav";
import { media, mixins, colors } from "../../styles/theme/media";

export const Conteiner = styled.div`
  width: 100%;
  ${mixins.flexJustifyCenter}
`;

export const Conteiter = styled.div`
  max-width: 72.75rem;
  width: 100%;
  ${mixins.flexSpaceBetweenWrap}
  padding: 0.5rem 1rem;
  ${colors.background}
`;

export const Logo = styled.img`
  object-fit: cover;

  @media ${media.ipadMini} {
    display: none;
  }
`;

export const ConteinerNavbarRightIcon = styled.div`
  width: 37.5rem;
`;

export const Vavbar = styled.nav`
  max-width: 39.5rem;
  width: 100%;
  ${mixins.flexSpaceBetween}
  font-weight: bold;

  @media ${media.ipadMini} {
    width: 7.5rem;
  }
`;

export const NavbarList = styled.ul<{ mobileMenuOpen?: boolean }>`
  display: flex;
  gap: 1.5rem;

  @media ${media.ipadMini} {
    max-width: 10rem;
    width: 100%;
    flex-direction: column;
    position: absolute;

    top: 60px;
    left: 0;
    padding: 1rem 2rem;
    ${colors.background_SubMenu};

    display: ${({ mobileMenuOpen }) => (mobileMenuOpen ? "flex" : "none")};
    z-index: 1000;
  }
`;

export const NavbarItem = styled.li<NavbarItemProps>`
  list-style: none;
  ${colors.accent};
  position: relative;
  cursor: pointer;
  padding-bottom: 4px;

  a{
    ${colors.accent};
    text-decoration: none;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;

    width: ${({ active }) => (active ? "100%" : "0")};
    background-color: #00bcd4;
    transition: width 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const Submenu = styled.ul<SubmenuProps>`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #3a3a3a;

  padding: 0.5rem 0;
  border-radius: 0.25rem;
  display: ${({ visible }) => (visible ? "block" : "none")};
  z-index: 10;
`;

export const SubmenuItem = styled.li<SubmenuItemProps>`
  white-space: nowrap;
  list-style: none;
  cursor: pointer;

  padding: 0.5rem 1rem;
  padding-bottom: 4px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;

    width: ${({ active }) => (active ? "100%" : "0")};
    background-color: #00bcd4;
    transition: width 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const Arrow = styled.span<ArrowProps>`
  font-size: 1rem;
  margin-left: 0.3rem;
  display: inline-block;
  ${colors.accent};
  transition: transform 0.3s ease;
  transform: ${({ open }) => (open ? "rotate(180deg)" : "rotate(0deg)")};
`;

export const IconContainer = styled.div`
  ${mixins.flexAlignItemsCenter}
  gap: 1.5rem;
`;

export const IconWrapper = styled.div`
  font-size: 1.5rem;
  cursor: pointer;
  ${colors.muted};

  &:hover {
    ${colors.accent};
  }
`;

export const MobileMenuButton = styled.button<{ open: boolean }>`
  display: none;
  ${mixins.center}

  background: transparent;
  border: none;

  cursor: pointer;
  font-size: 1.8rem;
  color: ${({ open }) => (open ? "#00BCD4" : "#A0A0A0")};
  transform: ${({ open }) =>
    open ? "rotate(20deg) scale(1.1)" : "rotate(0deg) scale(1)"};
  transition: ${({ theme }) => theme.transitions.default};

  @media ${media.ipadMini} {
    display: flex;
  }

  &:hover {
    ${colors.accent};
    transform: scale(1.2);
  }
`;

export const CartBadge = styled.span`
  ${mixins.flexCenter}
  position: absolute;
  top: -6px;
  right: -6px;

  background-color: #ff0000;

  color: #fff;
  font-size: 0.75rem;
  font-weight: bold;

  padding: 2px 6px;
  border-radius: 50%;
`;
