import * as React from "react";
import "../css/Navbar.css";



function Navbar() {
  return (
    <nav className="navbar">
        <div className="navbar__logo">
            <img className="navbar__logo--image" alt="logo" src='/LOGO.png'></img>
        </div>
        <div className="navbar__liens">
            <a href="/" className="navbar__liens--accueil">Accueil</a>
            <a href="/about" className="navbar__liens--apropos">A propos</a>
        </div>
    </nav>
  )
}

export default Navbar