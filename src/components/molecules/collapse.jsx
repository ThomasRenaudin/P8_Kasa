import React from "react";
import { useState } from "react";

function Collapse({ menuContent, className }) {
  // État pour gérer l'ouverture/fermeture du menu et l'état de l'icône
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Gestion de la classe CSS
  const colapseClassName = "AppartementCollapse " + className;

  // Fonction pour basculer l'état du menu et de l'icône
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Classe conditionnelle pour l'icône en fonction de l'état du menu
  const arrowClassName = `AppartementCollapse__titlecontainer--arrow ${isMenuOpen ? 'open' : ''}`;

  return (
    <div className={"AppartementCollapse"}>
      <div className={`AppartementCollapse__titlecontainer ${className}`} onClick={toggleMenu}>
        <h3 className="AppartementCollapse__titlecontainer--title">{menuContent.title}</h3>
        <img className={arrowClassName} src="/arrowup.svg" alt="Arrow" />
      </div>
      <div className={`AppartementCollapse__textcontainer ${className} ${isMenuOpen ? 'open' : ''}`}>
        <p className="AppartementCollapse__textcontainer--text">{menuContent.content}</p>
      </div>
    </div>
  );
}

export default Collapse;

