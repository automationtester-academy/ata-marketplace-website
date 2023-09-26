import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from 'react-router-dom';
import Login from './components/Login';
import HomePage from './components/HomePage';
import Signup from './components/Signup';
import ProductDetails from './components/ProductDetails';

import './App.css'

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/"
          element={
            loggedIn ? (
              <Outlet />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        >
          <Route path="/home" element={<HomePage />} />
          <Route path="/details/:itemId" element={<ProductDetails />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

