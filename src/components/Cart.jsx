import React, { useState } from 'react';
import '../styles/Cart.css'

const Cart = () => {
  const [cartCount, setCartCount] = useState(0);

  const incrementCartCount = () => {
    setCartCount(cartCount + 1);
  };

  const decrementCartCount = () => {
    if (cartCount > 0) {
      setCartCount(cartCount - 1);
    }
  };

  return (
    <div>
      <button onClick={incrementCartCount} className='btn-add-cart'>Ajouter au panier</button>
      {/* <button onClick={decrementCartCount}>Remove from Cart</button> */}
    </div>
  );
};

export default Cart;