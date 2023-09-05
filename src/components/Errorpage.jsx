import * as React from "react";
import "../css/Errorpage.css";



function Errorpage() {
  return (
    <div className="ErrorpageFlexbox">
        <p className='ErrorpageFlexbox__404'>404</p>
        <p className="ErrorpageFlexbox__Oups">Ooops ! La page que vous demandez n'existe pas.</p>
        <a className="ErrorpageFlexbox__Back" href ="/">Retourner sur la page d'accueil</a>
    </div>
  )
}

export default Errorpage