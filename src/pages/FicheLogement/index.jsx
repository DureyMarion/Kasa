// Importation des composants React
import React from 'react';
import { Navigate } from 'react-router-dom';

// Import data
import products from "../../data/data.json";

// Importation des components utilisés
import Carousel from '../../components/Carousel';
import Etoiles from '../../components/Etoiles';
import Card from '../../components/Card';
import Tag from '../../components/Tag';

// Importation du fichier SCSS
import './FicheLogement.scss';

// Création de la page FicheLogement
class FicheLogement extends React.Component {

    // Premier affichage + Re-render
    render () {
    
        // location.pathname => Obtiens le chemin complet de l'URL avant séparation + "/" Caractère de séparation puis
        // .pop() => supprime le dernier élément d'un tableau et renvoie cet élément 
        // => Changement d'id selon le logement
        const urlId        = window.location.pathname.split('/').pop();
        const currentHouse = products.find(house => house.id === urlId); // find() boucle sur tableau jusqu'à trouver une valeur
        
        // Condition si un id ne correspond pas, on affiche la page Erreur
        if (!currentHouse) {
            return <Navigate to="/Error404"/>;
        }
        
        // Permet d'obtenir ou de définir le titre actuel du document
        document.title = 'Kasa - Logement';

        // Déclaration des propriétés qui renvoie la valeur de l'attribut de chaque élément.
        let dataTitle      = currentHouse.title;
        let dataPictures   = currentHouse.pictures;
        let dataDesc       = currentHouse.description;
        let dataHost       = currentHouse.host;
        let dataRating     = currentHouse.rating;
        let dataLocation   = currentHouse.location;
        let dataEquipments = currentHouse.equipments;
        let dataTags       = currentHouse.tags;
        
        // Affichage de la page FicheLogement
        return (

        <main className="Logement">
        <Carousel images={dataPictures}/>

        <section>
            <header className="Logement__header">
                <div className="Logement__summary-box">
                    <h1 className="Logement__title">{dataTitle}</h1>
                    <h2 className="Logement__location">{dataLocation}</h2>
                    <div className="Logement__tags-box">
                    {/* Méthode Map => Création d'un 2eme tableau à partir des éléments du 1er tableau */}
                    {dataTags.map((tag, index) => (
                        <Tag className="Logement__tag" tags={tag} key={index} />
                        ))}
                    </div>
                </div>

                <div className="Logement__aside-box">
                    <div className="Logement__host-box">
                        <p className="Logement__host-name">{dataHost.name}</p>
                        <img
                            className="Logement__host-picture"
                            src={dataHost.picture}
                            alt={dataHost.name}
                        />
                    </div>

                     <div className="Logement__rating">
                        <Etoiles rating={dataRating}/>
                    </div>
                </div>
            </header>

                <div className="Logement__cards-box">
                    <div className="Logement__card">
                        <Card 
                        title={'Description'}
                        textArray={[dataDesc]} 
                        />
                    </div>

                    <div className="Logement__card">
                        <Card
                            title={'Equipements'}
                            textArray={dataEquipments}
                        />    
                    </div>
                </div>
            </section>
        </main>
        );
    }
}

// Exportation de la page FicheLogement
export default FicheLogement;
