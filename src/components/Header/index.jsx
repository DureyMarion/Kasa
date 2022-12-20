// Importation Modules
import React from "react";
import { Link, NavLink } from "react-router-dom";

// Importation fichier SCSS
import "./Header.scss";

// Importation Image
import logo from "../../assets/LOGO.svg";

// Création du component Header
class Header extends React.Component {
  render() {
    return (
      <header>
        <Link to="/">
          <img className="header-logo" src={logo} alt="Kasa" />
        </Link>

        <nav className="main-nav">
          <ul>
            <li>
              <NavLink
                className="header-link active-link"
                to="/"
              >
                Accueil
              </NavLink>
            </li>

            <li>
              <NavLink
                className="header-link"
                to="/a-propos"
              >
                &Agrave; propos
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
