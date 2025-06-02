// src/context/CartContext.tsx
import React, { createContext, useContext, useState } from 'react';

interface CartItem {
  productId: string;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  updateQuantity: (productId: string, quantity: number) => void;
  getQuantity: (productId: string) => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const updateQuantity = (productId: string, quantity: number) => {
    setCart((prevCart) => {
      const exists = prevCart.find((item) => item.productId === productId);
      if (exists) {
        return prevCart.map((item) =>
          item.productId === productId ? { ...item, quantity } : item
        );
      } else {
        return [...prevCart, { productId, quantity }];
      }
    });
  };

  const getQuantity = (productId: string): number => {
    return cart.find((item) => item.productId === productId)?.quantity ?? 1;
  };

  return (
    <CartContext.Provider value={{ cart, updateQuantity, getQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
};
