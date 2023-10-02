import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Appartements from '../components/appartements';
import Footer from '../components/footer';
import logementsData from '../backend.json';


const Appartementspage = () => {
    const { id } = useParams();
  
    // Vérification de l'ID existe dans le fichier backend.json
    const appartement = logementsData.find(logement => logement.id === id);
  
    if (!appartement) {
      // Si l'ID n'existe pas, redirection 404
      return <Navigate to="/404" />;
    }
  
    // Si l'ID existe, Affichage
    return (
      <div>
        <Navbar />
        <Appartements id={id} />
        <Footer />
      </div>
    );
  };
  
  export default Appartementspage;