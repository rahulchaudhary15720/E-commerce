import React from 'react'
import footlog from '../../Assets/logo1.png'
import './footer.css'
import { FaInstagram , FaFacebookF , FaWhatsapp } from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
    <div className="footer">
    <div className="footer-logo">
        <img src={footlog} alt="" />
        <p>SHOPPING</p>
    </div>
    <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offers</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
    <div className="footer-social-icons">
        <div className="icons-container">
            <FaInstagram />
        </div>
        <div className="icons-container">
            <FaFacebookF />
        </div>
        <div className="icons-container">
            <FaXTwitter />
        </div>
        <div className="icons-container">
            <FaWhatsapp />
        </div>
    </div>
    <div className="footer-copyright">
        <hr />
        <p> &#169; @ 2024 - All</p>
    </div>
    </div>
    </>
  )
}

export default Footer