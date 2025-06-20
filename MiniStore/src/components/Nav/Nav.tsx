import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';
import { useState, useRef, useEffect } from 'react';
import logo from '../../assets/logo.svg';
import { useCart } from '../../context/CartContext';
import CartModal from '../../components/CartModal/CartModal';
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
    MobileMenuButton,
    CartBadge,
} from './styleNav';

const Nav = () => {
    const [isCartModalVisible, setIsCartModalVisible] = useState(false);

    const [activeItem, setActiveItem] = useState('HOME');
    const [showSubmenu, setShowSubmenu] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const submenuRef = useRef<HTMLLIElement>(null); // refere-se ao <NavbarItem> que contém o submenu
    const { cart } = useCart();
    const cartQuantity = cart.reduce((total, item) => total + item.quantity, 0);



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
                                >
                                    <a href="/shop"
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        onClick={() => setActiveItem('PRODUTOS')}
                                    >
                                        PRODUTOS
                                    </a>
                                </SubmenuItem>
                                <SubmenuItem
                                    active={activeItem === 'CARRINHO'}
                                >
                                    <a href="/cart"
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        onClick={() => setActiveItem('CARRINHO')}
                                    >
                                        CARRINHO
                                    </a>
                                </SubmenuItem>
                            </Submenu>
                        </NavbarItem>
                        <NavbarItem
                            active={activeItem === 'SOBRE'}
                        >
                            <a href="/about"
                                target='_blank'
                                rel='noopener noreferrer'
                                onClick={() => setActiveItem('SOBRE')}
                            >
                                SOBRE
                            </a>
                        </NavbarItem>
                        <NavbarItem
                            active={activeItem === 'BLOG'}
                        >
                            <a href="/blog"
                                target='_blank'
                                rel='noopener noreferrer'
                                onClick={() => setActiveItem('BLOG')}
                            >
                                BLOG
                            </a>
                        </NavbarItem>
                        <NavbarItem
                            active={activeItem === 'CONTATO'}
                        >
                            <a href="/contact"
                                target='_blank'
                                rel='noopener noreferrer'
                                onClick={() => setActiveItem('CONTATO')}
                            >
                                CONTATO
                            </a>
                        </NavbarItem>
                    </NavbarList>

                    <IconContainer>
                        <IconWrapper>
                            <FaSearch />
                        </IconWrapper>
                        <IconWrapper>
                            <FaUser />
                        </IconWrapper>
                        <IconWrapper
                            style={{ position: 'relative', cursor: 'pointer' }}
                            onClick={() => setIsCartModalVisible(true)}
                        >
                            <FaShoppingCart />
                            <CartBadge>{cartQuantity}</CartBadge>
                        </IconWrapper>

                    </IconContainer>
                </Vavbar>


            </Conteiter>
            <CartModal
                isVisible={isCartModalVisible}
                onClose={() => setIsCartModalVisible(false)}
            />

        </Conteiner>
    )
}

export default Nav;