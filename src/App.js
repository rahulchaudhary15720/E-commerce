// src/App.js

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setProducts } from './features/products/productsSlice';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import './App.css';
import all_Product from './Assets/all_product'; // Import your JSON data

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Set products using static JSON data
    dispatch(setProducts(all_Product));
  }, [dispatch]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/mens" element={<ShopCategory category="men" />} />
        <Route path="/women" element={<ShopCategory category="women" />} />
        <Route path="/kids" element={<ShopCategory category="kid" />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
