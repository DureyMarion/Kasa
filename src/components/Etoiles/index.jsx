// Importation des composants React
import React from 'react';

// Importation Images
import Star from '../../assets/star-rate.svg';
import EmptyStar from '../../assets/emptyStar.svg';

// Importation du fichier SCSS
import './Etoiles.scss';

// Création et exportation du component Etoiles
export default function Etoiles (rate) {
    // State (état, données)
    // Notation sur 5 Étoiles
    const range = [1, 2, 3, 4, 5];
    
    // Affichage des étoiles
    // Méthode Map => Création d'un 2eme tableau à partir des éléments du 1er tableau
    return range.map((rangeElem, key) =>
        rangeElem <= rate.rating
            ? (
                <img src={Star} 
                    alt="étoile pleine" 
                    key={key}
                    className="star"
                />
            )
            : (
                <img
                    src={EmptyStar}
                    alt="étoile vide"
                    key={key}
                    className="star"
                />
            )
    );
}
