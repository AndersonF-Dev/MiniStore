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
    width: 100%;
    /* height: 72px; */
    /* background-color:rgb(199, 26, 26); */
`;

export const Conteiter = styled.div`
    width: 1365px;
    display: flex;
    padding: 0.5rem 1rem ;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background-color: #3A3A3A;
`;

export const ConteinerNavbarRightIcon = styled.div`
    width: 600px;
`;

export const Vavbar = styled.nav`
    width: 600px;
    /* background-color: blueviolet; */
    font-weight: 700;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const NavbarList = styled.ul<{ mobileMenuOpen?: boolean }>`
    display: flex;
    gap: 1.5rem;
    /* position: relative; */

    @media (max-width: 820px) {
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 30%;
    background:rgba(58, 58, 58, 0.79);
    padding: 1rem 2rem;
    display: ${({ mobileMenuOpen }) => (mobileMenuOpen ? 'flex' : 'none')};
    z-index: 1000;
  }
`;

export const NavbarItem = styled.li<NavbarItemProps>`
    list-style: none;
    color: #00BCD4;
    position: relative;
    cursor: pointer;
    padding-bottom: 4px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: ${({ active }) => (active ? '100%' : '0')};
    background-color: #00BCD4; /* amarelo, escolha a cor que quiser */
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
  background-color: #3A3A3A; /* tailwind gray-700 */
  /* margin-top: 0.5rem; */
  padding: 0.5rem 0;
  border-radius: 0.25rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  z-index: 10;
`;

export const SubmenuItem = styled.li<SubmenuItemProps>`
  padding: 0.5rem 1rem;
  white-space: nowrap;
  list-style: none;
  cursor: pointer;
  padding-bottom: 4px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: ${({ active }) => (active ? '100%' : '0')};
    background-color: #00BCD4; /* amarelo, escolha a cor que quiser */
    transition: width 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const Arrow = styled.span<ArrowProps>`
  margin-left: 0.3rem;
  display: inline-block;
  transition: transform 0.3s ease;
  transform: ${({ open }) => (open ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;

export const IconWrapper = styled.div`
  font-size: 1.5rem;
  cursor: pointer;
  color: #A0A0A0;

  &:hover {
    color: #00BCD4; // amarelo ao passar o mouse
  }
`;

export const MobileMenuButton = styled.button<{ open: boolean }>`
  /* display: none;
  background: transparent;
  color: #A0A0A0;
  border: none;
  font-size: 2rem;
  cursor: pointer;

  @media (max-width: 820px) {
    display: block;
  } */
    display: none;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.8rem;
  color: ${({ open }) => (open ? '#00BCD4' : '#A0A0A0')};
  transform: ${({ open }) => (open ? 'rotate(20deg) scale(1.1)' : 'rotate(0deg) scale(1)')};
  transition: all 0.3s ease;

  @media (max-width: 820px) {
    display: flex;
  }

  &:hover {
    color: #00BCD4;
    transform: scale(1.2);
  }
`;