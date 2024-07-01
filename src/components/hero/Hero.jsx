import React from 'react'
import './hero.css'
import ban from '../../Assets/ban-png1.png'

export const Hero = () => {
  return (
    <>
    <div className="hero">
    <div className="her-left">
    <h1>New Arrivals Only</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat in hic consectetur iure cumque!</p>
    <a href="" className='button-56'>Shop Now</a>
    </div>
    <div className="her-right">
    <img src={ban} alt="" />
    </div>
    </div>
    </>
  )
}
