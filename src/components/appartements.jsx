import * as React from "react";
import { useState } from "react";
import "../css/Appartements.css";
import Collapse from "./molecules/collapse";

function Appartements({ appartement }) {

  // Déclaration des contenus du menu

  const menu1 = {
    title: "Fiabilité",
    content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements. Toutes les informations sont régulièrement vérifiées par nos équipes."
  };

  const menu2 = {
    title: "Respect",
    content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
  };


// Gestion du compteur pour le carroussel

 const [counter, setCounter] = useState(1);


  const incrementCounter = () => {
    setCounter((counter % appartement.pictures.length) + 1);
  };

  const decrementCounter = () => {
    setCounter((counter - 2 + appartement.pictures.length) % appartement.pictures.length + 1);
  };

  const numberOfPhotos = appartement.pictures.length;

  // Gestion de la structure de la page d'un appartement

  return (
    <div className="AppartementsFlexbox">
      <div className="AppartementsFlexbox__carroussel">

        {/* Flèche gauche pour décrémenter le compteur */}
        {numberOfPhotos > 1 && (
          <img
            className="AppartementsFlexbox__carroussel--left"
            src="/arrow_left.png"
            alt="Flèche gauche"
            onClick={decrementCounter}
          />
        )}
        <img
          className="AppartementsFlexbox__carroussel--illustration"
          src={appartement.pictures[counter - 1]}
          alt="Illustration de l'appartement"
        />
        {/* Flèche droite pour incrémenter le compteur */}
        {numberOfPhotos > 1 && (
          <img
            className="AppartementsFlexbox__carroussel--right"
            src="/arrow_right.png"
            alt="Flèche droite"
            onClick={incrementCounter}
          />
        )}

        {/* Div pour afficher le compteur et le nombre de photos */}
        <div className="AppartementsFlexbox__carroussel--counter">
          {counter}/{numberOfPhotos}
        </div>
      </div>
      
      <div className="AppartementsFlexbox__titre">
        {appartement.title}
      </div>

      <div className="AppartementsFlexbox__emplacement">
        {appartement.location}
      </div>

      <div className="AppartementsFlexbox__tags">
      {appartement.tags.map((tag) => (
          <span className="AppartementsFlexbox__tags--tag">
            {tag}
          </span>
        ))}
      </div>

      <div className="AppartementsFlexbox__noteproprio host">
        {/* Affiche les étoiles */}
        <div className="AppartementsFlexbox__noteproprio--etoiles host__stars">
          {[1, 2, 3, 4, 5].map((etoile) => (
            <span
              className={`etoile ${etoile <= appartement.rating ? 'rouge' : 'grise'}`}
            >
              ★
            </span>
          ))}
        </div>
        <div className="AppartementsFlexbox__noteproprio--proprio host__profile">
          <p className="host__profile--name">{appartement.host.name} </p>
          <img className="host__profile--photo" src={appartement.host.picture}/> 
        </div>
      </div>

      <div className="AppartementsFlexbox__Description">
      </div>

      <div className="AppartementsFlexbox__Equipements">
      </div>
      
      {

      <div className="AppartementsFlexbox__Dropdowns">
        <div className="AppartementsFlexbox__Dropdowns--menus">
          <Collapse menuContent={menu1} className=""/>
        </div>
        <div className="AppartementsFlexbox__Dropdowns--menus">
          <Collapse menuContent={menu2} className="" />
        </div>  
      </div>
    }

    </div>
    
  );
}








export default Appartements;
