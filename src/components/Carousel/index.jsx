// Importation des modules
import React from "react";
import { useState, useEffect } from "react";

// Importation images
import ArrowLeft from "../../assets/vector-left.svg";
import ArrowRight from "../../assets/vector-right.svg";

// Importation fichier Scss
import "./Carousel.scss";

// State (état, données)
// Initialisation du component Carousel
function Carousel(product) {
   const [currentIndex, setCurrentIndex] = useState(0);
   const [right, setRight] = useState(true);
   const slides = product.images;

   // Chaque Slide à une autre image
   useEffect(() => {
      slides.forEach((image) => {
         new Image().src = image;
      });
   }, [slides]);

   
   // Comportements
   // Setter => set.... (fonction asynchrone)

   // Modification du state => actualisation de l'affichage (Re-render) => Retour en arrière
   const goToPrevious = () => {
      setRight(false);
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
   };

   // Modification du state => actualisation de l'affichage (Re-render) => Aller en Avant
   const goToNext = () => {
      setRight(true);
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
   };

   // Calcul du nombre à afficher selon la slide
   const moreOneImg = () => {
      if (slides.length - 1 >= 1) {
         return true;
      }
      return false;
   };

   // Affichage du Carousel
   return moreOneImg() ? (
      <div className="slider__styles">
         <img
         /* Événement/Comportement => retour en arrière */
            className="arrow left__arrow"
            src={ArrowLeft}
            alt="flèche vers la gauche"
            onClick={goToPrevious}
         ></img>

         <img
         /* Événement/Comportement => aller en avant */
            className="arrow right__arrow"
            src={ArrowRight}
            alt="flèche vers la droite"
            onClick={goToNext}
         ></img>
         {/* Méthode Map => Création d'un 2eme tableau à partir des éléments du 1er tableau */}
         {slides.map((slide, index) => {
            return (
               <div
                  className={
                     index === currentIndex
                        ? `${right ? "right" : "left"}`
                        : "slide__styles-hide"
                  }
                  key={index}
               >
                  {index === currentIndex && (
                     <img
                        src={slide}
                        alt="logement"
                        className={
                           right ? "slide__styles-right" : "slide__styles-left"
                        }
                     ></img>
                  )}
               </div>
            );
         })}
         {/* Gestion du N° d'image selon le nombre total des Slides */}
         <span className="number__styles">
            {currentIndex + 1}/{slides.length}
         </span>
      </div>
   ) : (
      <img
         src={`${slides[currentIndex]}`}
         className="slide__styles-one"
         alt="logement"
      ></img>
   );
}

// Exportation du component Carousel
export default Carousel;
