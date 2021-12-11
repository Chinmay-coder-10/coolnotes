import React from 'react'
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes >
        </Routes>
      </Router>
    </>
  );
}

export default App;