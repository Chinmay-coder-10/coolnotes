import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth, db } from '../firebase';
import Addnote from './Addnote';
import Home from './Home';
import Login from './Login';
import Notes from "./Notes"
import Register from './Register';

function App() {
  const [user, setuser] = useState(null);
  // useEffect(() => {
  //   auth.onAuthStateChanged(user => {
  //     if (user) {
  //       console.log("User logged in");
  //       setuser(user)
  //     }
  //     else {
  //       setuser(null)
  //       console.log("No user");
  //     }
  //   })
  // }, []);
  // console.log(user.uid)
  // auth.onAuthStateChanged(user => {
  //   if (user) {
  //     console.log("User logged in");
  //     setuser(user)
  //   }
  //   else {
  //     setuser(null)
  //     console.log("No user");
  //   }
  // })
  auth.onAuthStateChanged(user => {
    if (user) {
      console.log("User logged in");
      setuser(user)
    }
    else {
      setuser(null)
      console.log("No user");
    }
  })
  return (
    <>
      <Router>
        <Routes >
          <Route path="/" element={<Home />} exact />
          <Route path="/notes" element={<Notes />} exact />
          <Route path="/addnote" element={<Addnote user={user} />} exact />
          <Route path="/register" element={<Register />} exact />
          <Route path="/login" element={<Login />} exact />
        </Routes>
      </Router>
    </>
  );
}

export default App;
