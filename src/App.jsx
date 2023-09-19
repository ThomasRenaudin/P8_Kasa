import React from 'react'
import * as ReactDOM from "react-dom/client";
import Navbar from './components/Navbar'
import Bgindex from './components/bgindex';
import Bgabout from './components/bgabout';
import Logements from './components/logements';
import AboutCollapse from './components/aboutcollapse';
import Errorpage from './components/Errorpage';
import Appartements from './components/appartements';
import Footer from './components/footer';
import "./css/App.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


function MainApp() {
  return (
    <div>
        <Navbar />
        <Bgindex />
        <Logements />
        <Footer />
    </div>
  )
}

export default MainApp

function Appartments(){
  return(
    <div>
      <Navbar/>
      <Appartements/>
      <Footer/>
    </div>
  )
}

function About(){
  return(
    <div>
      <Navbar/>
      <Bgabout/>
      <AboutCollapse />
      <Footer/>
    </div>
  )
}

function ErreurPage(){
  return(
    <div>
      <Navbar/>
      <Errorpage/>
      <Footer/>
    </div>
  )
}

