import React from 'react'
import Navbar from '../components/Navbar'
import MessageErreur from '../components/errorMessage';
import Footer from '../components/footer';

const  Errorpage = () => {
    return(
        <div>
        <Navbar />
        <MessageErreur />
        <Footer />
    </div>
    )
}

export default Errorpage