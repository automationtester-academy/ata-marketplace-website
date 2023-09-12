import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from './components/Login'; 
import Signup from './components/Signup';
import HomePage from './components/HomePage'; 
import ProductDetails from './components/ProductDetails'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />}  />
        <Route exact path="/signup" element={<Signup />}  />
        <Route exact path="/home" element={<HomePage />}  />
        <Route path="/details/:itemId" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}


export default App;
