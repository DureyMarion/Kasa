// Importation des composants React
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
        
        // State (état, données)
        // Initialisé à card fermé
        this.state        = {
            isOpen: false
        };
        // Utilisation de la méthode bind() => Création d'une nouvelle fonction qui stocke les paramètres
        // de la fonction cible à l'avance, au lieu d'être transmises au moment de l'appel.
        this.updateIsOpen = this.updateIsOpen.bind(this);
    }
    
    // Comportements
    // Setter => set.... (fonction asynchrone)
    // Modification du state => actualisation de l'affichage (Re-render) => ouverture du card
    updateIsOpen () {
        this.setState({isOpen: !this.state.isOpen}); // ! => on obtient le booléen inverse 
    }
    
   // Premier affichage + Re-render
    render () {
        // Création Variable pour utiliser deux icons FontAwesome
        const cardIcon = this.state.isOpen ? faChevronUp : faChevronDown;  /* Opérateur terniaire => condition simplifiée */
        
        // Affichage du Card
        return (
            <section
                className={`card${this.state.isOpen ? ' is-open' : ' is-close'}`} /* Opérateur terniaire => condition simplifiée */
            >
                {/* Événement/Comportement */}
                <h2 className="card__title" onClick={this.updateIsOpen}>
                    <span>{this.props.title}</span>
                    <span className={cardIcon}></span>
                    <FontAwesomeIcon className="card__icon" icon={cardIcon}/>
                </h2>
                
                <ul
                    className={`card__text ${
                        this.state.isOpen ? 'is-open' : 'is-close' /* Opérateur terniaire => condition simplifiée */
                    }`}
                >
                    {/* Méthode Map => Création d'un 2eme tableau à partir des éléments du 1er tableau */}
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
