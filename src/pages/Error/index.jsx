// Importation Modules
import React from "react";
import { Link } from "react-router-dom";

// Importation du fichier SCSS
import "./ErrorPage.scss";

// Création de la page Erreur404 
class Error404 extends React.Component {
  render() {
    return (
      <main className="Error404">
        <p className="Error404__status-code">404</p>

        <p className="Error404__text">
          Oups ! La page que vous demandez n'existe pas.
        </p>
        
        <Link className="Error404__link-to-home" to="/">
          Retourner sur la page d'accueil
        </Link>
      </main>
    );
  }
}

// Exportation de la page Erreur404
export default Error404;