import React from 'react';
import Header from './Header';
import Footer from './Footer';

import ProductListItem from './ProductListItem';

import '../styles/HomePage.css';


const HomePage = () => {

  return (
    <div className="home-container">
      <Header />
      <div className="content">
        <div className="left">
          <h1 data-test='title-products' data-testid='title-products'>Products</h1>
        </div>
        <div className="right">
          <div className="search-bar">
            <input
              className='search-input'
              type="text"
              placeholder="Rechercher ici"
              data-test="search-products" 
              data-testid="search-products"
            />
            <button
              className='btn-search'
              data-test="input-search"
              data-testid="input-search"
            >
              <i className="fa fa-search" data-test='submit-search' data-testid='submit-search'></i>
            </button>
          </div>
        </div>
      </div>

      <div>
        <ProductListItem />
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
