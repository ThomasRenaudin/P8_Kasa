import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './page/Homepage';
import Appartementspage from './page/Appartementspage';
import Aboutpage from './page/Aboutpage';
import Errorpage from './page/Errorpage';

const route = createRoot(document.getElementById('root'));

route.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage/>}/> 
        <Route path="/appartments/:id" element={<Appartementspage/>}/> 
        <Route path="/about" element={<Aboutpage/>}/> 
        <Route path="/404" element={<Errorpage/>}/> 
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();


