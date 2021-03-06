import React from 'react'
import Logo from "../images/logo.png"
import "../css/Navbar.css"
import { NavLink } from 'react-router-dom'
import { auth } from '../firebase'

const Navbar = ({ color }) => {
    return (
        <>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to="/"><img alt="logo" src={Logo} className="logo" /></NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul  className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink style={{ color: color }} className="nav-link" aria-current="page" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink style={{ color: color }}  className="nav-link" aria-current="page" to="/notes">My Notes</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink style={{ color: color }}  className="nav-link" aria-current="page" to="/addnote">Add Note</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink style={{ color: color }}  className="nav-link" aria-current="page" onClick={()=>{auth.signOut()}} to="#">Log out</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink style={{ color: color }}  className="nav-link" aria-current="page" to="/addnote">Add note</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink style={{ color: color }}  className="nav-link" aria-current="page" to="/login">Login</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink style={{ color: color }}  className="nav-link" aria-current="page" to="/register">Register</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar
