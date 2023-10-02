import React from 'react';
import "../../css/bgindex.css";

function Bgimage({ slogantiltle, image }) {
  const slogan = slogantiltle ? slogantiltle : "";

  return (
    <div className="Bgindex">
      <div className="Bgindex__container">
        <img className="Bgindex__container--image" src={image.src} alt={image.alt} />
        <p className="Bgindex__container--sloggan">{slogan}</p>
        <div className="Bgindex__container--flou"></div>
      </div>
    </div>
  );
}

export default Bgimage;
