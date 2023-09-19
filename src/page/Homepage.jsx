import React from 'react'
import Navbar from '../components/Navbar'
import Bgindex from '../components/bgindex';
import Logements from '../components/logements';
import Footer from '../components/footer';

const Homepage = () => {
    return(
        <div>
        <Navbar />
        <Bgindex />
        <Logements />
        <Footer />
    </div>
    )
}

export default Homepage