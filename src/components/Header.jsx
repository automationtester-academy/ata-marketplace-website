import React, { useState } from 'react';
import logoImg from '../images/ATA-logo.png';
import '../styles/Header.css';

const Header = () => {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    // Implement your logic to add an item to the cart
    // For example, you can increment the count when an item is added
    setCartCount(cartCount + 1);
  };

  return (
    <header className="header">
      <div className="left">
        <img src={logoImg} alt="Logo" className="logo-header" />
      </div>
      <div className="center">
        <ul className='header-list'>
            <li>Home</li>
            <li>A propos</li>
            <li>Contactez Nous</li>
        </ul>
      </div>
      <div className="right">
        <i className="fa fa-shopping-cart icon-shopping-cart" onClick={handleAddToCart}></i>
        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
      </div>
    </header>
  );
};

export default Header;
