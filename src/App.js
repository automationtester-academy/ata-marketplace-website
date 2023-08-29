import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from './components/Login'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} exact />
      </Routes>
    </Router>
  );
}


export default App;
