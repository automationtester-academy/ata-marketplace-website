import React from 'react';
import Header from './Header';
import Footer from './Footer';

import ActionAreaCardOne from './ActionAreaCardOne';
import ActionAreaCardTwo from './ActionAreaCardTwo';
import ActionAreaCardThree from './ActionAreaCardThree';
import ActionAreaCardFor from './ActionAreaCardFor';

import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <Header />
      <div className="content">
        <div className="left">
          <h1>Products</h1>
        </div>
        <div className="right">
          <div className="search-bar">
            <input type="text" placeholder="Rechercher ici" />
            <button>
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
      </div>
      <div className='homepage-cards'>
        <div className='grid-container'>
          <ActionAreaCardOne />
          <ActionAreaCardTwo />
          <ActionAreaCardThree />
          <ActionAreaCardFor />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default HomePage;
