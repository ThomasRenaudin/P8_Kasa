import React from 'react'
import Navbar from '../components/Navbar'
import Bgindex from '../components/bgindex';
import Logements from '../components/logements';
import Footer from '../components/footer';

const Appartementspage = () => {
    return(
        <div>
            <Navbar/>
            <Appartements/>
            <Footer/>
        </div>
    )
}

// Récupération de l'ID via UseParam depuis react Router DOM

export default Appartementspage