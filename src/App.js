// Importation Modules
import React from 'react';
import { Routes, Route } from "react-router-dom";

// Importation fichier SCSS
import "./App.scss"

// Importaion des pages utilisées
import Error404 from "./pages/Error";
import Home from "./pages/Home";
import About from "./pages/About";
import FicheLogement from "./pages/FicheLogement";

// Importation des components utilisés
import Footer from "./components/Footer";
import Header from "./components/Header";
import reportWebVitals from './reportWebVitals';

// Création de App
// Gestion des routes avec redirection sur la bonne page
function App() {
  
return(
      <div>
        <Header />
          <main>

          <Routes>
					  <Route path="/" element={<Home />} />
            <Route path="/location/:id" element={<FicheLogement />} />
					  <Route path="/a-propos" element={<About />} />
		
					  <Route path="*" element={<Error404 />} />
				  </Routes>

        </main>
      <Footer />
      </div>
);
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Exportation de App
export default App;
