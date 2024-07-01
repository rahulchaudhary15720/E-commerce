// src/components/navbar/Navbar.jsx

import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";
import logo from '../../Assets/logo1.png';
import './navbar.css';

const Navbar = () => {
  const cartItems = useSelector(state => state.cart.items);
  const itemCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
        <p>SHOPPING</p>
      </div>
      <ul className="nav-menu">
        <Link to="/"><li>Shop</li></Link>
        <Link to="/mens"><li>Men</li></Link>
        <Link to="/women"><li>Women</li></Link>
        <Link to="/kids"><li>Kids</li></Link>
      </ul>
      <div className="nav-login-cart">
        {/* <button>Login</button> */}
        <Link to="/cart">
          <FaCartShopping size={30} />
        </Link>
        <div className="count">{itemCount}</div>
      </div>
    </nav>
  );
};

export default Navbar;
