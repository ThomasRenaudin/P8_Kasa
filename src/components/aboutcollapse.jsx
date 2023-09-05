import React, { useState } from 'react';
import '../css/aboutcollapse.css';

function AboutCollapse({ title, content }) {
  // État pour gérer l'ouverture/fermeture du menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fonction pour basculer l'état du menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const arrowImageSrc = isMenuOpen ? '/arrowdown.png' : '/arrowup.svg';

  return (
    <div className="AboutCollapse">
      <div className="AboutCollapse__titlecontainer" onClick={toggleMenu}>
        <h3 className="AboutCollapse__titlecontainer--title">{title}</h3>
        <img className={`AboutCollapse__titlecontainer--arrow ${isMenuOpen ? 'open' : ''}`} src={arrowImageSrc} alt="Arrow" />
      </div>
      <div className={`AboutCollapse__textcontainer ${isMenuOpen ? 'open' : ''}`}>
        <p className="AboutCollapse__textcontainer--text">{content}</p>
      </div>
    </div>
  );
}

function App() {
  // Variables pour les données de chaque menu
  const menu1 = {
    title: "Fiabilité",
    content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements. Toutes les informations sont régulièrement vérifiées par nos équipes."
  };

  const menu2 = {
    title: "Respect",
    content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
  };

  const menu3 = {
    title: "Service",
    content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
  };

  const menu4 = {
    title: "Sécurité",
    content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
  };

  return (
    <div className="Page">
      <AboutCollapse {...menu1} />
      <AboutCollapse {...menu2} />
      <AboutCollapse {...menu3} />
      <AboutCollapse {...menu4} />
    </div>
  );
}

export default App;
