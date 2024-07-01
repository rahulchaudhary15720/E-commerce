// src/pages/Cart.jsx

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateCartQuantity } from '../features/cart/cartSlice';
import './cart.css'


const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart({ id }));
  };

  const handleUpdateQuantity = (id, quantity) => {
    dispatch(updateCartQuantity({ id, quantity }));
  };

  return (
    <div className='cart-container'>
      <h1>Cart</h1>
      <div className='list-cont'>
        {cartItems.map(item => (
          <div className='list-item' key={item.id}>
            <h5>{item.name}</h5>
            <img src={item.image} alt="" />
            <p>Quantity: 
              <input 
                type="number" 
                value={item.quantity} 
                onChange={(e) => handleUpdateQuantity(item.id, Number(e.target.value))} 
              />
            </p>
            <button onClick={() => handleRemoveFromCart(item.id)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
