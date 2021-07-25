import { createContext, useContext, useState, useEffect } from 'react';

export const CartContext = createContext();

import React from 'react';

const CartContextProvider = (props) => {
  let localState = [];

  if (typeof localStorage !== 'undefined' && localStorage.getItem('cart')) {
    localState = JSON.parse(localStorage.getItem('cart') || []);
  }
  const [cart, setCart] = useState(localState);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const cartItem = cart.find((item) => {
      return item._id === product._id && item.size === product.size;
    });
    if (cartItem) {
      const updatedCart = cart.map((item) => {
        if (item._id === cartItem._id && item.size === product.size) {
          item.quantity = item.quantity + product.quantity;
        }
        return item;
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, product]);
    }
  };

  const updateCartQuantity = (product) => {
    const cartItem = cart.find((item) => {
      return item._id === product._id && item.size === product.size;
    });
    if (cartItem) {
      const updatedCart = cart.map((item) => {
        if (item._id === cartItem._id && item.size === product.size) {
          item.quantity = product.quantity;
        }
        return item;
      });
      setCart(updatedCart);
    }
  };

  const removeFromCart = (product) => {
    setCart(
      cart.filter((item) => {
        return [item._id !== product._id, item.size !== product.size].some(
          (bool) => bool === true
        );
      })
    );
  };

  const getTotalPrice = () => {
    return cart
      .map((c) => parseInt(c.price) * c.quantity)
      .reduce((a, b) => {
        return a + b;
      }, 0);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateCartQuantity }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
