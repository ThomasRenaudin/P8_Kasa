import React from 'react';
import "../css/logements.css";
import logementsData from '../backend.json';
import { NavLink } from 'react-router-dom';

function Logements() {
  let logementsToShow;

  if (window.innerWidth <= 768) {
    logementsToShow = logementsData.slice(0, 3);
  } else {
    logementsToShow = logementsData.slice(0, 6);
  }

  return (
    <div className="Logements">
      {logementsToShow.map((logement) => (
        <NavLink
          to={`/appartments/${logement.id}`}
          className="Logements__container"
          key={logement.id}
        >
          <img
            className="Logements__container--image"
            src={logement.pictures[0]}
            alt={logement.title}
          />
          <div className="Logements__container--flou"></div>
          <h2 className="Logements__container--titre">{logement.title}</h2>
        </NavLink>
      ))}
    </div>
  );
}

export default Logements;


  
  
  