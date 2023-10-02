import React from 'react'
import Navbar from '../components/Navbar'
import '../css/aboutcollapse.css';
import Bgimage from '../components/molecules/backgroundimg';
import Footer from '../components/footer';
import Collapse from '../components/molecules/collapse';

const Aboutpage = () => {

    const backgroundImage = {
        src: "/backgroundabout.png",
        alt: "fjords norvégiens"
      };

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
    

    return(
        <div>
        <Navbar />
        <Bgimage slogantiltle={""} image={backgroundImage} />
        <Collapse menuContent={menu1} className="Largeurmenus" />
        <Collapse menuContent={menu2} className="Largeurmenus" />
        <Collapse menuContent={menu3} className="Largeurmenus" />
        <Collapse menuContent={menu4} className="Largeurmenus" />
        <Footer />
    </div>
    )
}

export default Aboutpage