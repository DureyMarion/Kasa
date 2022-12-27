// Importation des composants React
import PropTypes from 'prop-types'
import { Component } from 'react'

// Importation du fichier SCSS
import "./Tag.scss"

// Création du component Tag
class Tag extends Component {
    // Méthode utilisée pour initialiser l'état d'un objet dans une classe
    constructor(props) {
      super(props)

      // State (état, données)
      this.state = {
      }
    }

  // Premier affichage + Re-render
  render() {
    // Création de la props
    const { tags } = this.props

    // Affichage de Tag
    return (
      <div className="TagWrapper">
        <p className="TagDescription">
            {tags} {/* Consommation de la props => accès aux propriéts */}
        </p>
      </div>
    )
  }
}

// Configuration propstypes
Tag.propTypes = {
  tags: PropTypes.string.isRequired,
}

Tag.defaultProps = {
  tags: '',
}

// Exportation du component Tag
export default Tag;