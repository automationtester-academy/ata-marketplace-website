import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from './components/Login'; 
import Signup from './components/Signup'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} exact />
        <Route path="/signup" element={<Signup />} exact />
      </Routes>
    </Router>
  );
}


export default App;
