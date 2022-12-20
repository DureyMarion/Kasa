// Importation Modules
import React from 'react';

// Importation Images
import Star from '../../assets/star-rate.svg';
import EmptyStar from '../../assets/emptyStar.svg';

// Importation du fichier SCSS
import './Etoiles.scss';

// Création et exportation du component Etoiles
export default function Etoiles (rate) {
    const range = [1, 2, 3, 4, 5];
    
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
