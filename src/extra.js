To achieve filtering of data using Redux Toolkit when navigating through the "mens," "womens," and "kids" routes, you can follow these steps:

1. *Setup Redux Store*: Ensure you have your Redux store setup with slices to manage the product data.

2. *Create a Product Slice*: Create a slice for managing products with an action to filter products based on the category.

3. *Connect Redux to Your Components*: Use React-Redux hooks (useSelector and useDispatch) to connect your components to the Redux store.

Here’s a step-by-step guide:

### Step 1: Setup Redux Store

Ensure you have redux, react-redux, and @reduxjs/toolkit installed in your project:

bash
npm install redux react-redux @reduxjs/toolkit


### Step 2: Create a Product Slice

Create a file productSlice.js inside your features/products folder:

javascript
// src/features/products/productSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allProducts: [], // This will hold all products data
  filteredProducts: [] // This will hold filtered products based on category
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
    }
  }
});

export const { setProducts, filterProductsByCategory } = productSlice.actions;

export default productSlice.reducer;


### Step 3: Configure Store

Configure your store in a file like store.js:

javascript
// src/store.js

import { configureStore } from '@reduxjs/toolkit';
import productReducer from './features/products/productSlice';

const store = configureStore({
  reducer: {
    products: productReducer
  }
});

export default store;


### Step 4: Provide Store to Your App

Wrap your application with the Provider from react-redux in your main entry file (e.g., index.js):

javascript
// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


### Step 5: Connect Components to Redux

Update your ShopCategory component to dispatch the filter action and select the filtered products:

javascript
// src/pages/ShopCategory.jsx

import {React, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterProductsByCategory } from '../features/products/productSlice';

const ShopCategory = ({ category }) => {
  const dispatch = useDispatch();
  const filteredProducts = useSelector(state => state.products.filteredProducts);

  useEffect(() => {
    dispatch(filterProductsByCategory(category));
  }, [category, dispatch]);

  return (
    <div>
      <h1>{category} Products</h1>
      <div>
        {filteredProducts.map(product => (
          <div key={product.id}>{product.name}</div>
        ))}
      </div>
    </div>
  );
};

export default ShopCategory;


### Step 6: Fetch and Set Products

Ensure you fetch and set the products data, ideally in a component like App or a dedicated Products component:

javascript
// src/App.js

import {React, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { setProducts } from './features/products/productSlice';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import './App.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch products from an API or any source
    const fetchProducts = async () => {
      const response = await fetch('/api/products');
      const products = await response.json();
      dispatch(setProducts(products));
    };

    fetchProducts();
  }, [dispatch]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/mens" element={<ShopCategory category="mens" />} />
        <Route path="/women" element={<ShopCategory category="women" />} />
        <Route path="/kids" element={<ShopCategory category="kids" />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;


By following these steps, you’ll be able to filter the product data based on the category using Redux Toolkit, making your application state more manageable and scalable.