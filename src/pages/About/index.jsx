// Importation des composants React
import React from "react";

// Importation des components utilisés
import AboutBanner from "../../components/AboutBanner";
import Card from "../../components/Card";

// Importation du fichier SCSS
import "./About.scss";

const ABOUT_CONTENTS = [
  {
    title: "Fiabilité",
    text: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
  },
  {
    title: "Respect",
    text: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    title: "Service",
    text: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
  },
  {
    title: "Sécurité",
    text: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
];

// Création de la page About
class About extends React.Component {
  // Premier affichage + Re-render
  render() {
    // Affichage
    return (
      <main className="About">
        <AboutBanner />
  
        <div className="card-box">
          {/* Méthode Map => Création d'un 2eme tableau à partir des éléments du 1er tableau */}
          {ABOUT_CONTENTS.map(({ title, text }) => (
            <Card key={`about-${title}`} title={title} textArray={[text]} />
          ))}
        </div>
      </main>
    );
  }
}

// Exportation de la page About
export default About;