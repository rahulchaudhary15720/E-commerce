// src/features/products/productSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allProducts: [], // This will hold all products data
  filteredProducts: [], // This will hold filtered products based on category
  selectedProduct: null // This will hold the selected product for the detail page
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action) {
      state.allProducts = action.payload;
    },
    filterProductsByCategory(state, action) {
      state.filteredProducts = state.allProducts.filter(
        product => product.category === action.payload
      );
    },
    selectProductById(state, action) {
      state.selectedProduct = state.allProducts.find(
        product => product.id === action.payload
      );
    }
  }
});

export const { setProducts, filterProductsByCategory, selectProductById } = productSlice.actions;

export default productSlice.reducer;
