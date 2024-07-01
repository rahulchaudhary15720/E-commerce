// src/pages/ShopCategory.jsx

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterProductsByCategory } from '../features/products/productsSlice';
import { addToCart } from '../features/cart/cartSlice';
import Item from '../components/item/Item';
import './shopCategory.css';

const ShopCategory = ({ category }) => {
  const dispatch = useDispatch();
  const allProducts = useSelector(state => state.products.allProducts);
  const filteredProducts = useSelector(state => state.products.filteredProducts);

  useEffect(() => {
    if (allProducts.length > 0) {
      dispatch(filterProductsByCategory(category));
    }
  }, [allProducts, category, dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="category-products">
      <h1>{category} Products</h1>
      <div className="products">
        {filteredProducts.map(product => (
          <Item
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
            newPrice={product.new_price}
            oldPrice={product.old_price}
            onAddToCart={() => handleAddToCart(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default ShopCategory;
