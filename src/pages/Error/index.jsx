// Importation des composants React
import React from "react";
import { Link } from "react-router-dom";

// Importation du fichier SCSS
import "./ErrorPage.scss";

// Création de la page Erreur404 
class Error404 extends React.Component {
  
  // Premier affichage + Re-render
  render() {

    // Affichage
    return (
      <main className="Error404">
        <p className="Error404__status-code">404</p>

        <p className="Error404__text">
          Oups ! La page que vous demandez n'existe pas.
        </p>
        
        {/* Lien de retour vers la page home */}
        <Link className="Error404__link-to-home" to="/"> 
          Retourner sur la page d'accueil
        </Link>
      </main>
    );
  }
}

// Exportation de la page Erreur404
export default Error404;