// Importation Modules
import React from "react";

//import data from "../../public/data.json"

// Importation des components utilisés
import Banner from "../../components/Banner/index.jsx";
import Thumb from "../../components/Thumb/index.jsx";

// Importation du fichier SCSS
import "./Home.scss"

// Création de la page Home
class Home extends React.Component {
    render() {
      // Récupération des données
      /*fetch('./data.json')
      .then((response) => response.json())
      .then((data) => console.log(data));*/
      
      const data = [
        {
          "id": "c67ab8a7",
          "title": "Appartement cosy",
          "cover": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
        },
        {
          "id": "b9123946",
          "title": "Magnifique appartement proche Canal Saint Martin",
          "cover": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg",
        },
        {
          "id": "46d188c5",
          "title": "Studio de charme - Buttes Chaumont",
          "cover": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-1.jpg",
        },
        {
          "id": "7af00cd6",
          "title": "Nid douillet au coeur du 11ème",
          "cover": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-3-1.jpg",
        },
        {
          "id": "0979876d",
          "title": "Appartement de Standing - 10e",
          "cover": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-4-1.jpg",
        },
        {
          "id": "f72a452f",
          "title": "Studio d'artiste",
          "cover": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-5-1.jpg",
        },
        {
          "id": "bc6f7112",
          "title": "Superbe appartement proche Tour Eiffel",
          "cover": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-7-1.jpg",
        },
        {
          "id": "cb2f9222",
          "title": "Suite familiale",
          "cover": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-8-1.jpg",
        },
        {
          "id": "d60ca600",
          "title": "Appartement moderne sur parc",
          "cover": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-9-1.jpg",
        },
        {
          "id": "2cf259e1",
          "title": "Charmant Studio Marais",
          "cover": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-10-1.jpg",
        },
        {
          "id": "5323c29b",
          "title": "Studio fonctionnel République",
          "cover": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-11-3.jpg",
        },
        {
          "id": "af6d2d48",
          "title": "Bungalow dans la forêt",
          "cover": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-12-1.jpg",
        },
        {
          "id": "7cbb378e",
          "title": "Grande Maison proche banlieue",
          "cover": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-13-2.jpg",
        },
        {
          "id": "ba55a0cc",
          "title": "Maison T5 - Le Vésinet",
          "cover": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-14-1.jpg",
        },
        {
          "id": "1e181317",
          "title": "Loft de Luxe à la Défense",
          "cover": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-15-1.jpg",
        },
        {
          "id": "1e180563",
          "title": "Charmant apt aux portes de Paris",
          "cover": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-16-1.jpg",
        },
        {
          "id": "2139a317",
          "title": "Cheap - Chambre Paris 20",
          "cover": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-17-1.jpg",
        },
        {
          "id": "cb02d69b",
          "title": "Magnifique appartement Rivoli",
          "cover": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-19-1.jpg",
        }
      ];



      return (
        <main>
          <Banner />
          <div className="thumb-home">
          <div className="thumb-box">
          {data.map(({ id, title, cover }) => (
            <Thumb key={`about-${title}`} id={id} title={title} cover={cover} />
          ))}
        </div>
        </div>
        </main>
      );
    }
}

// Exportation de la page Home
export default Home;