import React from 'react';
import Navbar from '../components/Navbar';
import Bgimage from '../components/molecules/backgroundimg';
import Logements from '../components/logements';
import Footer from '../components/footer';

const Homepage = () => {
  // Définition de l'image
  const backgroundImage = {
    src: "/backgroundindex.png",
    alt: "chutes du Niagara"
  };

  return (
    <div>
      <Navbar />
      <Bgimage slogantiltle={"Chez vous, partout et ailleurs"} image={backgroundImage} />
      <Logements />
      <Footer />
    </div>
  );
};

export default Homepage;
