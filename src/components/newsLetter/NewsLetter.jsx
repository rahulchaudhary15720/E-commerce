import React from 'react'
import './newsLetter.css'

const NewsLetter = () => {
  return (
    <>
    <div className="bg-blur">
    <div className="newsletter">
        <h1>Get Exclusive Offers On Your Mail</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div className="">
            <input type="email" placeholder='Your Email id' />
            <button>Subscribe</button>
        </div>
    </div>
    </div>
    </>
  )
}

export default NewsLetter