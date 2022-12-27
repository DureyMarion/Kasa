// Import des composants React
import PropTypes from "prop-types"
import React from "react";
import { Link } from "react-router-dom";

// Importation fichier SCSS
import "./Thumb.scss"

// Création du component Thumb
class Thumb extends React.Component {
  
    // Méthode utilisée pour initialiser l'état d'un objet dans une classe
    constructor(props) {
      super(props)

      // State (état, données)
      this.state = {
      }
    }

  // Premier affichage + Re-render
  render() {
    // Utilisation des props
    const { id, cover, title,location } = this.props

    // Affichage de Thumb
    return (

      // Événement/comportament => renvoie à la page Home 
      // scrollTo(x,y) => fait défiler la fenêtre aux coordonnées spécifiées
      <Link
        className="thumb-wrapper"
        to={`/location/${id}`}
        onClick={() => window.scrollTo(0, 0)}
      >
        <article className="thumb">
          <img
            className="thumb__cover"
            src={cover}
            alt={`Une location située en ${location}`}
          />

          <div className="thumb__filter"></div>

          <h2 className="thumb__title">{title}</h2>
        </article>
      </Link>
    );
  }
}


// Configuration des propsTypes
Thumb.propTypes = {
  id: PropTypes.string.isRequired,
  cover: PropTypes.string,
  title: PropTypes.string.isRequired,
  location: PropTypes.string,
}

Thumb.defaultProps = {
  id: undefined,
  cover: undefined,
  title: '',
  location: '',
}

// Exportation du Thumb
export default Thumb;