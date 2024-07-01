// src/components/item/Item.jsx

import React from 'react';
import './item.css';

const Item = ({ id, image, name, newPrice, oldPrice, onAddToCart }) => {
  return (

     
    <div className="item">
      <img src={image} alt="ProImg" />
      <p>{name}</p>
      <div className="func">
      <div className="item-prices">
        <div className="item-price-new">
         $ {newPrice}
        </div>
        <div className="item-price-old">
          $ {oldPrice}
        </div>
      </div>
      <button onClick={onAddToCart} className='button-84'>Add to Cart</button>
      </div>
    </div>
  );
};

export default Item;
