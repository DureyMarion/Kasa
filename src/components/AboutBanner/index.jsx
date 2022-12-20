// Importation des modules
import { Component } from "react"

// Importation image
import aboutBanner from "../../assets/about-background.png"

// Importation du fichier SCSS
import "./AboutBanner.scss";

// Création du component AboutBanner
class AboutBanner extends Component {

  render() {
    // Affichage du AboutBanner
    return (
      <div className="banner">
        <div className="about-banner">
          <img src={aboutBanner} alt="Un paysage de montagne" />
        </div>
      </div>
    );
  }
}

// Exportation du component Banner
export default AboutBanner;