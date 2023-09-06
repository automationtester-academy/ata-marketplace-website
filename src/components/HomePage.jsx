import React from 'react';
import Header from './Header';
import Footer from './Footer';

import ActionAreaCard from './ActionAreaCard';

import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <Header />
      <div className="content">
        <div className="left">
          <h1 data-cy='title-products'>Products</h1>
        </div>
        <div className="right">
          <div className="search-bar">
            <input
              className='search-input'
              type="text"
              placeholder="Rechercher ici"
              data-cy="search-products"
            />
            <button
              className='btn-search'
              data-cy="input-search"
            >
              <i className="fa fa-search" data-cy='submit-search'></i>
            </button>
          </div>
        </div>
      </div>

      <div>
        <ActionAreaCard />
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
