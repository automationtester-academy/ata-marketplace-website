import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from './components/Login'; 
import Signup from './components/Signup';
import HomePage from './components/HomePage'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} exact />
        <Route path="/signup" element={<Signup />} exact />
        <Route path="/home" element={<HomePage />} exact />
      </Routes>
    </Router>
  );
}


export default App;
