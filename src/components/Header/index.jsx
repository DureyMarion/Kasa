// Importation des composants React
import React from "react";
import { Link, NavLink } from "react-router-dom";

// Importation fichier SCSS
import "./Header.scss";

// Importation Image
import logo from "../../assets/LOGO.svg";

// Création du component Header
class Header extends React.Component {

  // Premier affichage + Re-render
  render() {
    
    // Affichage du Header
    return (
      <header>
        <Link to="/"> {/* Redirection page Home */}
          <img className="header-logo" src={logo} alt="Kasa" />
        </Link>

        <nav className="main-nav">
          <ul>
            <li>
              <NavLink
                to="/"
                className="header-link"
              >
                Accueil
              </NavLink>
            </li>

            <li>
              <NavLink
                className="header-link"
                to="/a-propos"
              >
                &Agrave; propos {/* &Agrave; => À */}
              </NavLink> 
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

// Exportation du component Header
export default Header;
