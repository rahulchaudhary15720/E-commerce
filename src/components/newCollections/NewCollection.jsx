import React from 'react'
import './newCollection.css'
import new_collection from "../../Assets/new_collections"
import Item from '../item/Item'
import { useDispatch} from 'react-redux';

import { addToCart } from '../../features/cart/cartSlice';

const NewCollection = () => {
  const dispatch = useDispatch();
 

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  return (
   <>
   <div className="new-collections">
    <h1>NEW COLLECTIONS</h1>
    <div className="collections">
{
new_collection.map((item)=>{
return  <Item  name={item.name} image={item.image} newPrice={item.new_price} oldPrice={item.old_price}    onAddToCart={() => handleAddToCart(item)}/>
})
}
    </div>
   </div>
   
   </>
  )
}

export default NewCollection