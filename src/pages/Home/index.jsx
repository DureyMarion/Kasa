// Importation des composants React
import React from 'react';

// Import data
import products from "../../data/data.json";

// Importation des components utilisés
import Banner from "../../components/Banner";
import Thumb from "../../components/Thumb";

// Importation du fichier SCSS
import "./Home.scss"

// Création de la page Home
class Home extends React.Component {
    
    // Méthode utilisée pour initialiser l'état d'un objet dans une classe
    constructor(props) {
        super(props);
        this.state = {
          data: []
        };
    }

    // Premier affichage + Re-render
    render() {
      
    // Récupération des données
    const data = products;

    // Affichage
    return (
        <main>
          <Banner />
          <div className="thumb-home">
            <div className="thumb-box">
              {/* Méthode Map => Création d'un 2eme tableau à partir des éléments du 1er tableau */}
              {data.map(({ id, title, cover }) => (
                <Thumb key={`about-${title}`} id={id} title={title} cover={cover} />
                /* Singularisation de chaque élément de la liste avec l'attribut "key" 
                   Cela permet d'optimiser les performances du rendu */
              ))}
            </div>
          </div>
        </main>
    );
  }
}

// Exportation de la page Home
export default Home;