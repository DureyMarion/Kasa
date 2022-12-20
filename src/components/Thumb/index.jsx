// Import Modèles
import PropTypes from "prop-types"
import React from "react";
import { Link } from "react-router-dom";

// Importation fichier SCSS
import "./Thumb.scss"

// Création du component Thumb
class Thumb extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
      }
    }

  render() {
    // Création des props
    const { id, cover, title,location } = this.props
    return (
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