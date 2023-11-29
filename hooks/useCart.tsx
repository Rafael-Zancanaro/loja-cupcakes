"use client";
import { PropsWithChildren, useContext, useState } from "react";
import { CartContextData, CartItens } from "../@types/cart";
import { CartContext } from "../contexts/CartContext";

export function CartProvider({ children }: PropsWithChildren) {
  const [cart, setCart] = useState<CartItens[]>([]);

  function addItem(id: number, amount: number) {
    const _cart = [...cart];
    const cartItem = _cart.find((coffee) => coffee.id === id);

    if (cartItem) {
      cartItem.amount = cartItem.amount + amount;
      setCart(_cart);

      return;
    }

    setCart((state) => [...state, { id, amount }]);
  }

  function removeItem(id: number, amount: number) {
    const _cart = [...cart];
    const cartItem = _cart.find((coffee) => coffee.id === id);

    if (cartItem) {
      const _amount = cartItem.amount - amount;

      if (_amount > 0) {
        setCart(
          _cart.map((product) =>
            product.id === id ? { ...product, amount: _amount } : product
          )
        );
        return;
      }

      setCart((state) => state.filter((product) => product.id !== id));
    }
  }

  function removeItemFromCart(id: number) {
    setCart((state) => state.filter((product) => product.id !== id));
  }

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, removeItemFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  return useContext(CartContext);
}
