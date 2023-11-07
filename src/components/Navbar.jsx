import * as React from "react";
import "../css/Navbar.css";
import { NavLink } from 'react-router-dom';


function Navbar() {
  return (
    <nav className="navbar">
        <div className="navbar__logo">
            <img className="navbar__logo--image" alt="logo" src='/LOGO.png'></img>
        </div>
        <div className="navbar__liens">
        <NavLink to="/" className="navbar__liens--accueil">Accueil</NavLink>
        <NavLink to="/about" className='navbar__liens--apropos'>A propos</NavLink>
        </div>
    </nav>
  )
}


export default Navbar

