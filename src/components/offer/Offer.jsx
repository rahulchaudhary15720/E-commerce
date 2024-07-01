import React from 'react'
import './offer.css'
import img from '../../Assets/of2.png'
const Offer = () => {
  return (
  <>
  <div className="offers">
    <div className="offers-left">
        <h1>SPECIAL OFFER</h1>
        <p>Lorem ipsum dolor sit amet.</p>
        <a href="" className='button-56'>Visit Now</a>
    </div>
    <div className="offers-right">
        <img src={img} alt="" />
    </div>
  </div>
  </>
  )
}

export default Offer