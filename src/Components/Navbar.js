// import PropTypes from 'prop-types'
import React from 'react'
import '../css/Navbar.css';
import logo from './newsportal.jpeg';
import { Link } from 'react-router-dom'
import DarkModeToggle from "react-dark-mode-toggle"

const Navbar = (props) => {

     return (

        <nav className={`navbar navbar-expand-lg navbar-${props.mode} py-0`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><img className="logo" src={logo} alt="logo" />NewsPortal</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="d-flex mx-5">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-2">
                                <Link className="nav-link" aria-current="page" to="/general">General</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link" to="/business">Business</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link" to="/technology">Technology</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link" to="/science">Science</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link" to="/sports">Sports</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link" to="/health">Health</Link>
                            </li>
                            <li className="nav-item mx-2">                             
                             <Link className="nav-link" to="/entertainment">Entertainment</Link>
                            </li>
                        </ul>
                        <div className="toggle-btn mx-3">
                            <DarkModeToggle onChange={props.toggleMode} checked={props.isDarkMode} size={70}></DarkModeToggle>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}


export default Navbar;