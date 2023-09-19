import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Appartements from './components/appartements';
import Homepage from './page/Homepage';




const route = createRoot(document.getElementById('root'));


route.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage/>}/> 
        <Route path="/appartement/:id" element={<Appartementspage/>}/> 
        <Route path="/about" element={<About/>}/> 
        <Route path="/404" element={<ErreurPage/>}/> 
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();


