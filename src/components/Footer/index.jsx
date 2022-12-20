// Importation Modules
import React from "react";
import { Link } from "react-router-dom";

// Importation du fichier SCSS
import "./Footer.scss";

// Importation Image
import logoWhite from "../../assets/logo-footer.svg";

// Création du component Footer
class Footer extends React.Component {
  render() {
    return (
      <footer>
        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
          <img src={logoWhite} alt="Kasa" />
        </Link>

        <p>&copy; 2021 Kasa. Tous droits réservés</p>
      </footer>
    );
  }
}

// Exportation du component Footer
export default Footer;