// Importation des modules
import React from 'react';
import PropTypes from 'prop-types';

// Importation des icons Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

// Importation fichier Scss
import './Card.scss';

// Création du component Carousel
class Card extends React.Component {
    constructor (props) {
        super(props);
        
        this.state        = {
            isOpen: false
        };
        this.updateIsOpen = this.updateIsOpen.bind(this);
    }
    
    updateIsOpen () {
        this.setState({isOpen: !this.state.isOpen});
    }
    
    render () {
        const cardIcon = this.state.isOpen ? faChevronUp : faChevronDown;
        
        // Affichage du Card
        return (
            <section
                className={`card${this.state.isOpen ? ' is-open' : ' is-close'}`}
            >
                <h2 className="card__title" onClick={this.updateIsOpen}>
                    <span>{this.props.title}</span>
                    <span className={cardIcon}></span>
                    <FontAwesomeIcon className="card__icon" icon={cardIcon}/>
                </h2>
                
                <ul
                    className={`card__text ${
                        this.state.isOpen ? 'is-open' : 'is-close'
                    }`}
                >
                    {this.props.textArray.map((item, index) => (
                        <li key={`item-${index}`}>{item}</li>
                    ))}
                </ul>
            </section>
        );
    }
}

// Configuration des propstypes
Card.propTypes = {
    title: PropTypes.string.isRequired,
    textArray: PropTypes.arrayOf(PropTypes.string).isRequired
};

// Exportation du component Card
export default Card;
