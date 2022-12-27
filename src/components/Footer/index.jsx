// Importation des composants React
import React from "react";
import { Link } from "react-router-dom";

// Importation du fichier SCSS
import "./Footer.scss";

// Importation Image
import logoWhite from "../../assets/logo-footer.svg";

// Création du component Footer
class Footer extends React.Component {

  // Premier affichage + Re-render
  render() {
    // Affichage de Footer
    return (
      <footer>
        
        {/* Événement/comportament => renvoie à la page Home */}
        {/* scrollTo(x,y) => fait défiler la fenêtre aux coordonnées spécifiées */}
        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
          <img src={logoWhite} alt="Kasa" />
        </Link>

        <p>&copy; 2021 Kasa. Tous droits réservés</p> {/* &copy; => Symbol du copyright */}
      </footer>
    );
  }
}

// Exportation du component Footer
export default Footer;