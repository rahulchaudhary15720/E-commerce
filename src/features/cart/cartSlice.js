// src/features/cart/cartSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // This will hold items added to the cart
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const existingItem = state.items.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1; // Increment quantity if item already in cart
      } else {
        state.items.push({ ...item, quantity: 1 }); // Add new item to cart
      }
    },
    removeFromCart(state, action) {
      state.items = state.items.filter(cartItem => cartItem.id !== action.payload.id);
    },
    updateCartQuantity(state, action) {
      const { id, quantity } = action.payload;
      const item = state.items.find(cartItem => cartItem.id === id);
      if (item) {
        item.quantity = quantity;
      }
    }
  }
});

export const { addToCart, removeFromCart, updateCartQuantity } = cartSlice.actions;

export default cartSlice.reducer;
