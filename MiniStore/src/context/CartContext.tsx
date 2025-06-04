// src/context/CartContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}


interface CartContextType {
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  getQuantity: (productId: number) => number;
  removeFromCart: (productId: number) => void;
}


// // Adicione ao tipo do contexto
// addToCart: (product: ProductTypes) => void;



const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const storedCart = sessionStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    sessionStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const removeFromCart = (productId: number) => {
  setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
};

  const addToCart = (product: CartItem) => {
  setCart(prevCart => {
    const existingItem = prevCart.find(item => item.id === product.id);

    if (existingItem) {
      // Soma a nova quantidade com a anterior
      return prevCart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + product.quantity }
          : item
      );
    } else {
      // Adiciona novo item
      return [...prevCart, product];
    }
  });
};


  const updateQuantity = (productId: number, quantity: number) => {
    setCart((prevCart) => {
      if (quantity <= 0) {
        return prevCart.filter((item) => item.id !== productId);
      }
      return prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      );
    });
  };

  const getQuantity = (productId: number): number => {
    return cart.find((item) => item.id === productId)?.quantity ?? 0;
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, getQuantity,removeFromCart}}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
};