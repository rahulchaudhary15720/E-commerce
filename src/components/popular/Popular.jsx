
import React from 'react';
import { useDispatch} from 'react-redux';

import { addToCart } from '../../features/cart/cartSlice';

import './propular.css'
import data_product from '../../Assets/data'
import Item from '../item/Item'
const Popular = () => {

  const dispatch = useDispatch();
 

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <>
    <div className="popular">
        <h1>POPULAR IN WOMEN</h1>

        <div className="popular-item">
{
    data_product.map((item)=>{
        return <Item  name={item.name} image={item.image} newPrice={item.new_price} oldPrice={item.old_price}    onAddToCart={() => handleAddToCart(item)}/>
    })
}
        </div>
    </div>
    </>
  )
}

export default Popular