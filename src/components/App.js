import React from 'react'
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import Home from './Home';
import Navbar from './Navbar';

function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Routes >
        <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
