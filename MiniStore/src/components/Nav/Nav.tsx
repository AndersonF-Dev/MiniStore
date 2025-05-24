// import React from 'react'
import { FaSearch, FaUser, FaShoppingCart  } from 'react-icons/fa';
import { useState, useRef, useEffect } from 'react';
import logo from '../../assets/logo.svg';
import ministoreLogo from '../../assets/ministore-logo.svg';

import {
    Conteiner,
    Conteiter,
    Logo,
    Vavbar,
    NavbarItem,
    NavbarList,
    Arrow,
    Submenu,
    SubmenuItem,
    IconContainer,
    IconWrapper,
    MobileMenuButton
} from './styleNav';

const Nav = () => {
  const [activeItem, setActiveItem] = useState('HOME');
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const submenuRef = useRef<HTMLLIElement>(null); // refere-se ao <NavbarItem> que contém o submenu

    // Fecha submenu ao clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (submenuRef.current && !submenuRef.current.contains(event.target as Node)) {
        setShowSubmenu(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <Conteiner>
        <Conteiter>
            <Logo src={logo} alt="Logo" />

            <MobileMenuButton open={mobileMenuOpen} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                
                <img src={ministoreLogo} alt="MiniStore Logo" style={{ width: '44px', height: '44px' }} />

            </MobileMenuButton>
            <Vavbar>
                <NavbarList mobileMenuOpen={mobileMenuOpen}>
                    <NavbarItem
                        active={activeItem === 'HOME'}
                        onClick={() => setActiveItem('HOME')}
                    >
                        HOME
                    </NavbarItem>
                    <NavbarItem
                    ref={submenuRef}
                    onClick={() => {
                        setActiveItem('PÁGINAS');
                        setShowSubmenu((prev) => !prev);
                    }}
                    active={activeItem === 'PÁGINAS'}
                    >
                        PÁGINAS
                    <Arrow open={showSubmenu}>▼</Arrow>
                    <Submenu visible={showSubmenu}>
                        <SubmenuItem
                            active={activeItem === 'PRODUTOS'}
                            onClick={() => setActiveItem('PRODUTOS')}
                        >
                            PRODUTOS
                        </SubmenuItem>
                        <SubmenuItem
                        active={activeItem === 'CARRINHO'}
                        onClick={() => setActiveItem('CARRINHO')}
                        >
                            CARRINHO
                        </SubmenuItem>
                    </Submenu>
                    </NavbarItem>
                    <NavbarItem
                        active={activeItem === 'SOBRE'}
                        onClick={() => setActiveItem('SOBRE')}
                    >
                        SOBRE
                    </NavbarItem>
                    <NavbarItem
                        active={activeItem === 'BLOG'}
                        onClick={() => setActiveItem('BLOG')}
                    >
                        BLOG
                    </NavbarItem>
                    <NavbarItem
                    active={activeItem === 'CONTATO'}
                    onClick={() => setActiveItem('CONTATO')}
                    >
                        CONTATO
                    </NavbarItem>
                </NavbarList>

                <IconContainer>
                <IconWrapper>
                    <FaSearch />
                </IconWrapper>
                <IconWrapper>
                    <FaUser />
                </IconWrapper>
                <IconWrapper>
                    <FaShoppingCart />
                </IconWrapper>
                </IconContainer>
            </Vavbar>

           
        </Conteiter>

    </Conteiner>
  )
}

export default Nav;