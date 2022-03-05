import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth, db } from '../firebase';
import Home from './Home';
import Login from './Login';
import Notes from "./Notes"
import Register from './Register';

function App() {
  const [userinfo, setuserinfo] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        console.log("Yes");
        setuserinfo(user)
      }
      else {
        setuserinfo(null)
      }
    })
  }, []);
  return (
    <>
      <Router>
        <Routes >
          <Route path="/" element={<Home />} exact />
          <Route path="/notes" element={<Notes />} exact userinfo={userinfo} />
          <Route path="/register" element={<Register />} exact userinfo={userinfo} />
          <Route path="/login" element={<Login />} exact userinfo={userinfo} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
