import React from 'react';
import "../css/bgindex.css";

function Bgindex() {
  return (
    <div className="Bgindex">
        <div className="Bgindex__container">
            <img className="Bgindex__container--image" src='/backgroundindex.png' alt="chutes du nyagara"></img>
            <p className="Bgindex__container--sloggan">Chez vous, partout et ailleurs</p>
            <div className="Bgindex__container--flou"></div>
        </div>
    </div>
  )
}

export default Bgindex