// Importation des composants React
import PropTypes from 'prop-types'
import { Component } from "react"

// Importation image
import banner from "../../assets/background-banner.png"

// Importation du fichier SCSS
import "./Banner.scss";

// Création du component Banner
class Banner extends Component {
  // Méthode utilisée pour initialiser l'état d'un objet dans une classe
  constructor(props) {
    super(props)
    // State (état, données)
    this.state = {
    }
  }

  // Premier affichage + Re-render
  render() {
    const { title } = this.props

    // Affichage du Banner
    return (
      <div className="banner">
        <div className="hero-banner">
          <img src={banner} alt="Un paysage sauvage de bord de mer" />
          <h1>{title}</h1>
        </div>
      </div>
    );
  }
}

// Configuration des propstypes
Banner.propTypes = {
  title: PropTypes.string.isRequired,
}

Banner.defaultProps = {
  title: "Chez vous, partout et ailleurs",
}

// Exportation du component Banner
export default Banner;