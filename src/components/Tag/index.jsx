// Importation Modules
import PropTypes from 'prop-types'
import { Component } from 'react'

// Importation du fichier SCSS
import "./Tag.scss"

// Création du component Tag
class Tag extends Component {
    constructor(props) {
      super(props)
      this.state = {
      }
    }

  render() {
    // Création Propstypes
    const { tags } = this.props

    return (
      <div className="TagWrapper">
        <p className="TagDescription">
            {tags}
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